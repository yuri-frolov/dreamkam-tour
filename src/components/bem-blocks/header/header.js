let header = document.querySelector('.header');

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  header.classList.add('header__scrolled');

  if (window.scrollY === 0) {
    header.classList.remove('header__scrolled');
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove('header__invisible');
  } else {
    header.classList.add('header__invisible');
  }
  prevScrollpos = currentScrollPos;
};
