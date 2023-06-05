<template>
  <div >
    <section v-if="false" class="">
      {{ nfts.length }}
      <Swiper
        :modules="[
          SwiperAutoplay,
          SwiperEffectCreative,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
        ]"
        :slides-per-view="4"
        :space-between="10"
        navigation
        :pagination="{ clickable: true }"
        :loop="false"
        :effect="'creative'"
        class="mySwiper bg-green-500"
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
        <SwiperSlide
          class="grid grid-cols-3 border-2 bg-yellow-400"
          v-for="(nft, index) in nfts"
          :key="index"
        >
          <div class="h-40 border-4 border-yellow-400">
            <strong>{{ nft }}</strong>

            <!--      <SingleNftCard :data="nft"/>-->
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Discover NFT Collectors
          </h2>
          <p class="mt-6 text-lg leading-8">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          <li
            class="relative rounded-2xl bg-primary-900"
            v-for="(item, index) in nfts"
            :key="index"
          >
            <img
              class="aspect-[14/13] w-full rounded-t-2xl object-cover"
              :src="item.image"
              alt=""
            />
            <div
              class="absolute left-4 top-4 rounded-md bg-white px-6 py-2 text-xs font-bold text-gray-900"
            >
              {{ item.tag }}
            </div>
            <div class="p-4">
              <h3
                class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-50"
              >
                <TruncateString :value="item.name" :length="20" />
              </h3>
              <div class="flex justify-between">
                <p class="text-sm leading-6 text-gray-200">Price</p>
                <p class="text-base font-medium leading-6 text-gray-200">
                  {{ item.price }} ETH
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid place-content-center">
      <PrimaryButton label="See More" class="btn2" />
    </div>
  </div>

  <div v-if="pending">
    Loading ...
  </div>
<div v-else>
  <div class="grid grid-cols-4">
    <div v-for="(nft, index) in data" :key="index">
    <img class="h-40" :src="nft.collectionImage" />
    {{ nft.collectionName }}

    {{ nft.floorPrice }} ETH
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
// import NftSlider from "./NftSlider.vue";

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const nfts = ref<nftTypes[]>([
  {
    id: "1",
    name: "MutantApeYachtClub",
    image: "/nft/nft1.png",
    tag: "#0001",
    price: 0.05,
  },
  {
    id: "2",
    name: "MutantDogYachtClub #2691",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: "3",
    name: "Dreadfulz #6345",
    image:
      "https://assets.raribleuserdata.com/prod/v3/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC9wYkhqWHlzemdQb0gyVWhoNXUtYmttZnFUZ1pHXzNfZ0FuVDRIaTJuTjNj",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image:
      "https://assets.raribleuserdata.com/prod/v9/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC82UWpzOTNKcHc4SEtjTW9OX2I0SGh1Q1IxQWktbGpYXzlVeU1aM0R4WWZB",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image: "/nft/nft7.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image: "/nft/nft11.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image: "/nft/nft10.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image: "/nft/nft9.png",
    tag: "#0002",
    price: 0.08,
  },
]);

const { data, pending, error } = await useFetch<{
  data:{
    collectionName: string;
    _id: string;
  collectionImage: string;
  floorPrice: number;
  nftCount: number;
  }
}>(
  "http://49.12.208.193:5066/api/nfts/collections", {
    lazy: true,
  }
);

console.log(data.value);
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
