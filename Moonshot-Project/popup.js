document.addEventListener('DOMContentLoaded', function () {
  const activateButton = document.getElementById('activateExtension');

  activateButton.addEventListener('click', function () {
    chrome.runtime.sendMessage({ command: 'activateExtension' }, function (response) {
      if (response && response.success) {
        alert('The extension has been activated.');
      } else {
        alert('The extension could not be activated.');
      }
    });
  });
});
