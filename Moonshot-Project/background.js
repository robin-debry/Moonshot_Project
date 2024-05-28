chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.command === 'activateExtension') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        const tabId = tabs[0].id;

        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: () => {
            return Array.from(document.querySelectorAll('img:not([alt])')).map(img => img.src);
          }
        }, async (results) => {
          if (chrome.runtime.lastError || !results || results.length === 0) {
            sendResponse({ success: false, error: 'No images found.' });
            return;
          }

          const imageSources = results[0].result;
          const formData = new FormData();

          try {
            for (let i = 0; i < imageSources.length; i++) {
              const response = await fetch(imageSources[i]);
              const blob = await response.blob();
              formData.append('images', blob, `image${i}.png`);
            }

            const result = await fetch('http://localhost:5000/detect', {
              method: 'POST',
              body: formData
            });
            const data = await result.json();

            const altTexts = data.alt_texts;
            chrome.scripting.executeScript({
              target: { tabId: tabId },
              func: (altTexts) => {
                const images = document.querySelectorAll('img:not([alt])');
                images.forEach((img, index) => {
                  if (index < altTexts.length) {
                    img.alt = altTexts[index];
                  } else {
                    img.alt = "No detectable objects";
                  }
                });
              },
              args: [altTexts],
            });

            sendResponse({ success: true });
          } catch (error) {
            sendResponse({ success: false, error: error.message });
          }
        });

        return true; // Keep the message channel open for sendResponse
      } else {
        sendResponse({ success: false, error: 'No active tab found.' });
      }
    });

    return true; // Will respond asynchronously
  }
});
