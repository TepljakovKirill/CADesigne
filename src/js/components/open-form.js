const button = document.querySelector('.banner__block--button');
const response = document.querySelector('.response');
const overlayResponse = document.querySelector('.overlay-response');

button.addEventListener('click', () => {
  response.style.display = "block";
  overlayResponse.style.display = "block";
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    response.style.display = "none";
    overlayResponse.style.display = "none";
  }
});



