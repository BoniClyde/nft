<template>
  <div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <NftSimpleCard
          v-for="(nft, index) in data?.data"
          :key="index"
          class="swiper-slide px-1"
          :name="nft.contract.name"
          :src="nft.media.gateway"
          :price="nft.price"
          :tokenId="nft.contract.tokenId"
        />
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div v-if="pending">Loading...</div>
</template>

<script lang="ts" setup>
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { ref, onMounted } from "vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";

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

      1100: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
}

onMounted(mountSwiper);

const { data, pending } = await useClientFetch<{
  data?: {
    data: NftDataTypes;
  };
}>("/nfts/all-nfts", {
  query: {
    perPage: 8,
  },
});
console.log(data.value);
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
  @apply h-10 w-20;
}

.swiper-pagination-bullet-active {
  @apply bg-red-500;
}

.swiper-pagination-bullet-active {
  /* Add your updated styles here */
  opacity: 0.5;
  background: red;
}
.swiper-pagination {
  @apply mb-2;
}
</style>
