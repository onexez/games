const swiper = new Swiper('.swiper1', {
  loop: true,

  centeredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    425: {},
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
