<template>
  <swiper
    :slidesPerView="'auto'"
    :centeredSlides="true"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper bg-primary-900"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <swiper-slide>
      <TestimonialCard
        :name="item.name"
        :description="item.description"
        :position="item.position"
        :star="item.star"
        v-for="(item, index) in testimonials"
        :key="index"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    TestimonialCard,
  },
  setup() {
    const modules = [Pagination];

    return {
      modules,
      nftCards,
    };
  },
};
</script>
