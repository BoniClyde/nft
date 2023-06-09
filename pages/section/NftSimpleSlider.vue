<template>
  <div>
    <div v-if="pending"></div>
    <div v-else class="flex w-full justify-center">
      <Splide :has-track="false" :options="options" class="">
        <SplideTrack>
          <SplideSlide v-for="(nft, index) in data?.data" :key="index">
            <NuxtLink
              :to="{
                name: 'nftDetails',
                params: {
                  nftUuid: nft.uuid,
                },
              }"
            >
              <NftSimpleCard
                :name="nft.contract.name"
                :key="index"
                :src="nft?.media?.gateway"
                :price="nft.price"
                :tokenId="nft.contract.tokenId"
                sizes="sm:100vw md:50vw lg:400px"
                class="aspect-[14/13] w-full rounded-t-2xl object-cover"
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
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";

import "@splidejs/vue-splide/css";

const { data, pending } = useClientFetch<{
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
    640: { perPage: 1, gap: 0, width: "80vw" },
  },
  autoplay: true,
};
</script>

<style lang="scss">
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-100;
}
</style>
