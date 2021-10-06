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

const day1Slider = document.querySelector('.tour__day-1-slider');
const mediaQuery1440 = window.matchMedia('(min-width: 1440px)');

if (mediaQuery1440.matches) {
  day1Slider.classList.remove('overflow-v');
  day1Slider.classList.add('overflow-h');
}


const day2Slider = document.querySelector('.tour__day-2-slider');
const mediaQuery1100 = window.matchMedia('(min-width: 1100px)');

if (mediaQuery1100.matches) {
  day2Slider.classList.remove('overflow-v');
  day2Slider.classList.add('overflow-h');
}
