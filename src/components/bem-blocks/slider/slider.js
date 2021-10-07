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
const mediaQuery1440 = window.matchMedia('(min-width: 1440px)');
const mediaQuery1100 = window.matchMedia('(min-width: 1100px)');

const day1Slider = document.querySelector('.tour__day-1-slider');
if (mediaQuery1440.matches) {
  day1Slider.classList.remove('overflow-v');
  day1Slider.classList.add('overflow-h');
}

const day2Slider = document.querySelector('.tour__day-2-slider');
if (mediaQuery1100.matches) {
  day2Slider.classList.remove('overflow-v');
  day2Slider.classList.add('overflow-h');
}

const day3Slider = document.querySelector('.tour__day-3-slider');
if (mediaQuery1440.matches) {
  day3Slider.classList.remove('overflow-v');
  day3Slider.classList.add('overflow-h', 'swiper--buttons-black');
}
