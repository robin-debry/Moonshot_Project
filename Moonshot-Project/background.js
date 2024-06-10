// In background.js
console.log('Background script loaded');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.command === 'activateExtension') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const tabId = tabs[0].id;
        console.log('Active tab ID:', tabId);

        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: () => {
            return Array.from(document.querySelectorAll('img:not([alt])')).map(img => img.src);
          }
        }, async (results) => {
          if (chrome.runtime.lastError || !results || results.length === 0) {
            console.error('No images found or error occurred:', chrome.runtime.lastError);
            sendResponse({ success: false, error: 'No images found.' });
            return;
          }

          console.log('Image sources found:', results);
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

            console.log('Received alt texts:', data.alt_texts);
            const altTexts = data.alt_texts;
            chrome.scripting.executeScript({
              target: { tabId: tabId },
              func: (altTexts) => {
                const images = document.querySelectorAll('img:not([alt])');
                images.forEach((img, index) => {
                  if (index < altTexts.length) {
                    img.alt = altTexts[index];
                    img.setAttribute('role', 'img'); // Ensure the role is explicitly set

                    // Add a unique id to each image for better focus control
                    img.id = `image-${index}`;

                    // Force screen reader to re-evaluate the image
                    const originalParent = img.parentNode;
                    const placeholder = document.createElement('span');
                    placeholder.setAttribute('aria-hidden', 'true');
                    originalParent.replaceChild(placeholder, img);

                    setTimeout(() => {
                      placeholder.replaceWith(img);

                      // Set aria-live attribute on the image's container to notify screen reader of the change
                      const container = document.createElement('div');
                      container.setAttribute('aria-live', 'assertive');
                      container.appendChild(img);
                      originalParent.appendChild(container);

                      // Focus on the image to ensure it gets re-evaluated
                      img.focus();

                      // Optionally, remove the aria-live container after focus to clean up the DOM
                      setTimeout(() => {
                        originalParent.appendChild(img); // Move image back to original parent
                        container.remove(); // Remove the temporary container
                      }, 100);
                    }, 50); // Adjust the delay as needed
                  } else {
                    img.alt = "No detectable objects";
                  }
                });
              },
              args: [altTexts],
            });

            sendResponse({ success: true });
          } catch (error) {
            console.error('Error processing images:', error);
            sendResponse({ success: false, error: error.message });
          }
        });

        return true; // Keep the message channel open for sendResponse
      } else {
        console.error('No active tab found.');
        sendResponse({ success: false, error: 'No active tab found.' });
      }
    });

    return true; // Will respond asynchronously
  }
});
