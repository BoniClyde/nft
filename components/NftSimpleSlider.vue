<script lang="ts" setup>
import { register } from "swiper/element/bundle";

register();
onMounted(() => {
  const swiperEl = document.querySelector("swiper-container") as any;

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
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
  console.log(swiperEl);
});
</script>
<template>
  <div>
    <swiper-container
      class="mySwiper"
      :navigation="true"
      space-between="30"
      :pagination="false"
      :pagination-clickable="false"
      :slides-per-view="3"
      :autoplay="true"
      :autoplay-delay="100"
      :loop="true"
      :init="false"
    >
      <swiper-slide v-for="(item, index) in 10" :key="index">{{
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
