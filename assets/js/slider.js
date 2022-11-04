document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".sliders__sertificat", {
    // Optional parameters

    loop: true,
    slidesPerView: 4,
    spaceBetween: 15,

    breakpoints: {
      1560: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".btn-right-sert",
      prevEl: ".btn-left-sert",
    },
  });
  const swiper1 = new Swiper(".sliders__feedback", {
    // Optional parameters

    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,

    breakpoints: {
      1560: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".btn-right-feedback",
      prevEl: ".btn-left-feedback",
    },
  });
  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    }
});