<template>
  <div>
    <div v-if="pending">Loading ...</div>

   <div v-else>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Discover NFT Collectors Top {{ nfts.meta.total }}
          </h2>
          <p class="mt-6 text-lg leading-8">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <div>

          <ul
            role="list"
            class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            <li
              class="relative cursor-pointer rounded-2xl border-2 border-secondary-200 shadow dark:border-0 dark:bg-secondary-900"
              v-for="(item, index) in nfts?.data"
              :key="index"
            >
              <nuxt-img
                sizes="sm:100vw md:50vw lg:400px"
                preload
                :src="item.collectionImage"
                class="aspect-[14/13] w-full rounded-t-2xl object-cover"
                loading="lazy"
              />

              <div class="p-4">
                <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight">
                  <TruncateString :value="item.collectionName" :length="20" />
                </h3>
                <div class="flex justify-between">
                  <p class="text-sm leading-6">Price</p>
                  <p class="text-base font-medium leading-6">
                    {{ item.floorPrice }} ETH
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid place-content-center">
      <PrimaryButton label="See More" class="btn2" />
    </div>
   </div>
  </div>
</template>

<script setup lang="ts">
import TruncateString from "~/components/utils/TruncateString.vue";
import { nftTypes } from "~/types/model";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { useClientFetch } from "~/request.http";
// import NftSlider from "./NftSlider.vue";

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const nfts = ref<nftTypes[]>();

const {
  data: nfts,
  pending,
  error,
} = await useClientFetch<{
  data: {
    meta: {
      lastPage: number;
      page: number;
      perPage: number;
      total: number;
    };
    data: nftTypes;
  };
}>("/nfts/collections", {
  lazy: true,
  query: {
    page: 1,
    perPage: 24,
    minPrice: 10,
  },
});

// console.log(nfts.value);
</script>

<style lang="css">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient {
  background: rgb(18, 48, 204);
  background: linear-gradient(
    90deg,
    rgba(18, 48, 204, 1) 1%,
    rgba(9, 50, 121, 1) 53%,
    rgba(14, 94, 152, 1) 100%
  );
}
</style>
