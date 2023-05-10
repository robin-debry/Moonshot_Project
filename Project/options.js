const saveButton = document.getElementById("save-button");
const fontSizeSelect = document.getElementById("font-size-select");

chrome.storage.sync.get("fontSize", ({ fontSize }) => {
  fontSizeSelect.value = fontSize;
});

saveButton.addEventListener("click", () => {
  const fontSize = fontSizeSelect.value;
  chrome.storage.sync.set({ fontSize });
});