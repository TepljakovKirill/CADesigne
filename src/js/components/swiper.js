import SwiperCore, { Navigation } from "swiper/core";

const swiper = new SwiperCore(".swiper", {
  modules: [Navigation],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
