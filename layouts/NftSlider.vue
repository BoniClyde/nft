<template>
  <div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper mb-14">
        <NftSimpleCard
          v-for="nft in nftCards"
          :key="nft.id"
          class="swiper-slide px-1"
          :name="nft.name"
          :src="nft.src"
          :price="nft.price"
        />
      </div>
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NftSimpleCard from "~/components/NftSimpleCard.vue";
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
    price: 0.1,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
    price: 0.8,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
    price: 3.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
    price: 55.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.killabears.com/content/killabears/video/879-5dfacaf4cc418ffe0e143c179822c28e0b0fb44da19a932953e8604c5be8462a.mp4",
    price: 707.4,
  },

  {
    id: "3333",
    name: "Looking Good4",
    src: "https://dl.openseauserdata.com/cache/originImage/files/2b8a53db3f8e00b8a19efe0e55b12c83.png",
    price: 77.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://i.seadn.io/gae/s7v6qwDUfz706J_omsFko4UT1DLm0smQkqZI4Qbl72vcGhGvVI5M0KocsImihiT1_ddWbp36bKmfehV4LK9v7aXTwK76I9zNHvqqkw?auto=format&dpr=1&w=1000",
    price: 77.4,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://i.seadn.io/gae/itxl9IQpTPNQLas3Heuzz30xiiUXfFpPj-znZVe6jPaNP-UZ94lAkt1OvQM4mp2gLv7Wgk5irzgqfYcz1nSzVde1zDqfoly492e2?auto=format&dpr=1&w=384",
    price: 770.4,
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
      700: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      968: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
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
  @apply cursor-pointer dark:bg-secondary-500;
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
.swiper-pagination-bullet-active {
  @apply bg-primary-500;
}
</style>
