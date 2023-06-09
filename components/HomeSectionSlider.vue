<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <NuxtImg
            v-for="(nft, index) in data?.data"
            :key="index"
            :src="nft.media.gateway"
            :price="nft.price"
            class="swiper-slide px-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";
import { Swiper } from "swiper";

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

function mountSwiper() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 3,
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
        spaceBetween: 40,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      1030: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });
}

onMounted(mountSwiper);

const { data, pending } = await useClientFetch<{
  data: NftDataTypes[];
  meta: {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
  };
}>("/nfts/all-nfts", {
  query: {
    perPage: 1,
  },
});
// console.log(data.value);
</script>

<style scoped lang="scss">
@import "swiper/swiper-bundle.css";

.swiper {
  @apply p-4 px-10;
}

.swiper-slide {
  @apply cursor-pointer dark:bg-secondary-950;
}

.swiper-slide img {
  @apply w-20;
}
</style>
