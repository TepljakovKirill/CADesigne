const button = document.querySelector(".banner__block--button");
const response = document.querySelector(".response");
const overlayResponse = document.querySelector(".overlay-response");
const closeForm = document.querySelector(".response__message-button");
const message = document.querySelector(".response__message");
const resetForm = document.querySelector(".response__form");

button.addEventListener("click", () => {
  response.style.display = "block";
  overlayResponse.style.display = "block";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    response.style.display = "none";
    overlayResponse.style.display = "none";
  }
});

closeForm.addEventListener("click", () => {
  response.style.display = "none";
  overlayResponse.style.display = "none";
  message.style.display = "none";
  resetForm.reset();
});
