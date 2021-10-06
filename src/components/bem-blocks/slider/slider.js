const atfSlider = document.querySelector('.atf__slider');
const day1Slider = document.querySelector('.tour__day-1-slider');

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 35,
  loop: false,
  mousewheel: false,
  breakpoints: {
    550: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperRtl = new Swiper('.swiper-rtl', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 35,
  loop: false,
  mousewheel: false,
  breakpoints: {
    550: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const mQuery = window.matchMedia('(min-width: 1440px)');

if (mQuery.matches) {
  day1Slider.classList.remove('overflow-v');
  day1Slider.classList.add('overflow-h');
}

