chrome.storage.sync.get("fontSize", ({ fontSize }) => {
  const elements = document.getElementsByTagName("*");
  for (let i = 0; i < elements.length; i++) {
    const style = window.getComputedStyle(elements[i]);
    const originalFontSize = style.getPropertyValue("font-size");
    elements[i].style.fontSize = fontSize;
    elements[i].setAttribute("data-original-font-size", originalFontSize);
  }
});

chrome.storage.onChanged.addListener(({ fontSize }) => {
  fontSize = fontSize.newValue;
  const elements = document.querySelectorAll("[data-original-font-size]");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = fontSize.newValue;
  }
});
const cssFile = chrome.runtime.getURL('content.css');
const link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = cssFile;
document.head.appendChild(link);