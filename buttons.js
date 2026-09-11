const ersterButton = document.getElementById('ersterButton');

if (ersterButton) {
  ersterButton.addEventListener('click', function() {
    window.open('https://play.google.com/store/games?hl=en', '_blank', 'noopener');
  });
}

const zweiterButton = document.getElementById('zweiterButton');

if (zweiterButton) {
  zweiterButton.addEventListener('click', function() {
    alert('The iOS app is not available yet.');
  });
}



