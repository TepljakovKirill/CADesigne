const burger = document.querySelector('.burger');
const closeMobileMenu = document.querySelector('.nav__close-mobile-menu');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.nav__wrap');


burger.addEventListener('click', () => {
  mobileMenu.style.transform = "translateX(0)";
  overlay.style.display = "block";
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.style.transform = "translateX(-130vh)";
  overlay.style.display = "none";
});
