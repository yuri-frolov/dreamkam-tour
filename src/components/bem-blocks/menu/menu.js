let mobileMenu = document.querySelector('.menu');

function openNav() {
  mobileMenu.style.height = "100%";
}

function closeNav() {
  mobileMenu.style.height = "0%";
}

let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
  openNav();
});

let mobileMenuClose = document.querySelector('.menu__close');
mobileMenuClose.addEventListener('click', () => {
  closeNav();
});
