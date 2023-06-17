<template>
  <div v-if="pending">loading</div>
  <div v-else>
    <h1>Native slider</h1>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(nft, index) in imgData" :key="index">
          <img class="h-64" :src="nft" alt="Sample 1" />
   <!--        <NftSimpleCard
            :name="nft.contract.name"
            :key="index"
            class="px-1"
            :src="nft.media.gateway"
            :price="nft.price"
            :tokenId="nft.contract.tokenId"
          /> -->
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
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { ref, onMounted } from "vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";

//fetch data
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
    perPage: 20,
  },
});

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
