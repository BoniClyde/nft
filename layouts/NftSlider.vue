<!-- <template>
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
    <swiper-slide v-for="nft in nftCards" :key="nft.id">
      <NftCard
        class=""
        :id="nft.id"
        :name="nft.name"
        :src="nft.src"
        :price="nft.price"
      />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const modules = [Pagination];

type NftData = {
  id: string;
  name: string;
  src: string;
  price?: number;
};

const nftCards = ref<NftData[]>([
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY=",
    price: 139.8,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNi5naWY=",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
  },
  // Add more NFT cards here with their respective data
]);
</script>
 -->

<template>
  <div>
    <div class="swiper mySwiper py-8">
      <div class="swiper-wrapper">
        <NftCard
          v-for="nft in nftCards"
          :key="nft.id"
          class="swiper-slide"
          :id="nft.id"
          :name="nft.name"
          :src="nft.src"
          :price="nft.price"
        />
      </div>
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
      <div class="swiper-pagination bg-red-500"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TestimonialCard from "~/layouts/TestimonialCard.vue";
import { Testimonials } from "~/types/model";

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

type NftData = {
  id: string;
  name: string;
  src: string;
  price: number;
};

const nftCards = ref<NftData[]>([
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY=",
    price: 139.8,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNi5naWY=",
    price: 0.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
    price: 0.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
    price: 0.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
    price: 0.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
    price: 0.4,
  },
  // Add more NFT cards here with their respective data
]);

function mountSwiper() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  console.log("swiper", swiper);
}

onMounted(mountSwiper);

/* onMounted(() => {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
 */
</script>

<style scoped>
.swiper {
  @apply p-4;
}

.swiper-slide {
  @apply dark:bg-secondary-500;
}

.swiper-slide img {
  @apply w-20;
}
/* 
.swiper-pagination {
  @apply pt-10;
} */
/* .swiper-button-next,
.swiper-button-prev {
  @apply text-xs text-primary-400;
} */
</style>
