const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 35,
  loop: false,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
