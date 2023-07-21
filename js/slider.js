let swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1.5,
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  watchOverflow: true,
  autoHeight: true,
  initialSlide: 2,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1.5,
    },
  },
});

var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  loopedSlides: 4,
});
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: "auto",
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
