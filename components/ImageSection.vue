<template>
  <div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper mb-14">
        <div class="lg:flex">
          <img
            class="swiper-slide rounded-md"
            :src="item.src"
            v-for="(item, index) in imageNft"
            :key="index"
            alt=""
          />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js",
    },
  ],
});

type ImagesNft = {
  src: string;
};

const imageNft = ref<ImagesNft[]>([
  {
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY=",
  },
  {
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNi5naWY=",
  },
  {
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
  },
  {
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
  },
  {
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
  },
  {
    src: "https://i.seadn.io/gcs/files/494b62bdf3c3508338a8309770e32de1.gif?auto=format&dpr=1&w=1200",
  },

  {
    src: "https://dl.openseauserdata.com/cache/originImage/files/2b8a53db3f8e00b8a19efe0e55b12c83.png",
  },
  {
    src: "https://i.seadn.io/gae/s7v6qwDUfz706J_omsFko4UT1DLm0smQkqZI4Qbl72vcGhGvVI5M0KocsImihiT1_ddWbp36bKmfehV4LK9v7aXTwK76I9zNHvqqkw?auto=format&dpr=1&w=1000",
  },
  {
    src: "https://i.seadn.io/gae/itxl9IQpTPNQLas3Heuzz30xiiUXfFpPj-znZVe6jPaNP-UZ94lAkt1OvQM4mp2gLv7Wgk5irzgqfYcz1nSzVde1zDqfoly492e2?auto=format&dpr=1&w=384",
  },
  // Add more NFT cards here with their respective data
]);
</script>

<style scoped>
/* 
  .swiper-pagination {
    @apply pt-10;
  } */
/* .swiper-button-next,
  .swiper-button-prev {
    @apply text-xs text-primary-400;
  } */
.swiper-pagination-bullet-active {
  @apply bg-primary-500;
}
</style>
