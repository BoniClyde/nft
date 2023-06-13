<script lang="ts" setup>
import { register } from "swiper/element/bundle";

register();
onMounted(() => {
  const swiperEl = document.getElementById("nft-slider") as any;

  const params = {
    injectStyles: [
      `
      .swiper-pagination-bullets.swiper-pagination-horizontal{
        display: none;
      }
      `,
    ],
    pagination: {
      clickable: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView:2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    navigation: false,
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
  console.log(swiperEl);
});
</script>
<template>
  <div class="px-10 md:px-0">
    <swiper-container id="nft-slider" class="mySwiper" :init="false">
      <swiper-slide v-for="(item, index) in 10" :key="index" class="h-80">{{
        index
      }}</swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
