<template>
  <ClientOnly>
    <div v-if="pending">loading</div>
    <div v-else class="flex w-full justify-center">
      <Splide :has-track="false" :options="options" class="">
        <SplideTrack>
          <SplideSlide v-for="(nft, index) in data?.data" :key="index">
            <NuxtLink to="/nftdetails">
              <NftSimpleCard
                :name="nft.contract.name"
                :key="index"
                class="px-1"
                :src="nft.media.gateway"
                :price="nft.price"
                :tokenId="nft.contract.tokenId"
              />
            </NuxtLink>
          </SplideSlide>
        </SplideTrack>
        <button class="splide__toggle" type="button">
          <span class="splide__toggle__play"
            ><i class="fa-sharp fa-solid fa-play"></i
          ></span>
          <span class="splide__toggle__pause"
            ><i class="fa-sharp fa-solid fa-pause"></i
          ></span>
        </button>
        <div class="splide__progress">
          <div class="splide__progress__bar"></div>
        </div>
      </Splide>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";

import "@splidejs/vue-splide/css";

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
    perPage: 10,
  },
});

const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: false,
  arrows: false,
  width: "80vw",
  perPage: 4,
  breakpoints: {
    1200: { perPage: 3, gap: "1rem" },
    700: { perPage: 2, gap: "2rem" },
    640: { perPage: 1, gap: 0, width: "50vw" },
  },
  autoplay: true,
};
</script>

<style lang="scss" scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-200;
}
</style>
