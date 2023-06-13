<template>
  <div v-if="false">
    <swiper-container
      slides-per-view="3"
      speed="500"
      loop="true"
      css-mode="true"
      grid-rows="3"
      mousewheel-force-to-axis="true"
      init="false"
    >
      <swiper-slide>Slide </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");

  console.log("i just mount", swiperEl);
});

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};
</script>
