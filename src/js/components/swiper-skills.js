import SwiperCore, { Pagination } from "swiper/core";

const swiper = new SwiperCore(".swiper-skills", {
  modules: [Pagination],
  effect: "creative",
  spaceBetween: 15,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
