<template>
  <div>
    <h1>Native slider</h1>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(item, index) in imgData" :key="index">
          <img class="h-64" :src="item" alt="Sample 1" />
        </SplideSlide>
      </SplideTrack>
      <button class="splide__toggle" type="button">
        <span class="splide__toggle__play">Play</span>
        <span class="splide__toggle__pause">Pause</span>
      </button>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";

const imgData = [
  "nft/nft1.png",
  "nft/nft2.png",
  "nft/nft3.png",
  "nft/nft4.png",
  "nft/nft5.png",
  "nft/nft6.png",
  "nft/nft7.png",
  "nft/nft8.png",
  "nft/nft9.png",
  "nft/nft10.png",
  "nft/nft11.png",
  "nft/nft12.png",
];
const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  perPage: 4,
  pagination: false,
  arrows: false,
  breakpoints: {
    1200: { perPage: 2, gap: "1rem" },
    640: { gap: 0 },
  },
  autoplay: true,
};
</script>

<style lang="scss" scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-500;
}
</style>
