<template>
  <div class="flex flex-col justify-center py-10 md:grid md:grid-cols-2">
    <div>
      <div
        class="space-y-2 text-center text-3xl font-semibold lg:mt-20 lg:text-left lg:text-5xl"
      >
        <h1 class="">Sell, Buy, discover</h1>
        <h1>and collect NFT arts</h1>
      </div>

      <p
        class="py-4 text-center font-semibold tracking-wider text-primary-500 underline dark:text-primary-400 lg:text-left"
      >
        Find it, Buy it, Flip it
      </p>
      <div
        class="lg:grid-colds-2 mb-4 grid grid-cols-1 justify-center gap-x-2 text-center md:grid-cols-2 lg:justify-start"
      >
        <nuxt-link
          to="/explore"
          class="btn1 rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
          >Create Art<span class="px-1"
            ><i class="fa-duotone fa-file-plus"></i>
          </span>
        </nuxt-link>
        <nuxt-link
          to="/explore"
          class="rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
          >Marketplace<span> →</span>
        </nuxt-link>
      </div>
    </div>
    <div>
      <div v-if="pending">Loading</div>
      <div v-else>
        <Splide :has-track="false" :options="options" class="">
          <SplideTrack>
            <SplideSlide v-for="(item, index) in data?.data" :key="index">
              <nuxt-img
                class="aspect-w-16 aspect-h-9 h-full w-full rounded-md object-cover"
                sizes="sm:100vw md:50vw lg:400px"
                preload
                :src="item.collectionImage"
                loading="lazy"
              />
            </SplideSlide>
          </SplideTrack>
        </Splide>

        <!-- <HomeSectionSlider /> -->

        <!-- <ImageSection /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { serverUrl } from "~/app.config";
import { useClientFetch } from "~/request.http";
import { nftTypes } from "~/types/model";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

import "@splidejs/vue-splide/css";

const { data, pending, refresh } = await useAsyncData<{
  meta: {
    lastPage: number;
    page: number;
    perPage: number;
    total: number;
  };
  data: any;
}>(() =>
  $fetch(`${serverUrl}/nfts/collections`, {
    params: {
      page: 1,
      perPage: 30,
    },
  })
);

const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: false,
  arrows: false,
  width: "80vw",
  perPage: 1,
  drag: false,
  autoplay: true,
};
</script>

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
