<template>
  <div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper mb-14">
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
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div v-if="pending">Loading...</div>
  <div v-else>
    <div v-for="(item, index) in data?.data" :key="index">
      {{ item.contract.tokenId }}
      <img class="h-10" :src="item.media.gateway" alt="" />
      <div>{{ item.price }}{{ item.currency }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { ref, onMounted } from "vue";
import { NftDataTypes } from "~/types/model";

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

const { data, pending } = await useFetch<{
  data?: {
    data: NftDataTypes;
  };
}>("http://49.12.208.193:5066/api/nfts/all-nfts", {
  query: {
    perPage: 7,
    search: "Sproto Gremlins",
  },
});
console.log(data.value);
</script>

<style scoped>
.swiper {
  @apply p-4;
}

.swiper-slide {
  @apply cursor-pointer dark:bg-secondary-950;
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
