const open = document.querySelector('.hamburger');
const close = document.querySelector('.full-screen-menu__close');
const overlay = document.querySelector('.full-screen-menu');

open.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.style.display = "block";
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.style.display = "none";
});