document.addEventListener('DOMContentLoaded', function () {
  const activateButton = document.getElementById('activateExtension');

  activateButton.addEventListener('click', function () {
    chrome.runtime.sendMessage({ command: 'activateExtension' }, function (response) {
      if (response && response.success) {
        alert('L\'extension a été activée avec succès !');
      } else {
        alert('Une erreur est survenue lors de l\'activation de l\'extension.');
      }
    });
  });
});
