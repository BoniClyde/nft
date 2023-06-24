<template>
  <div>
    {{ isLoading }}
    <div v-if="!isLoading"></div>
    <div v-else>
      <div class="container mx-auto px-4 py-8">
        <div>
          <h1 class="theme-text heading mb-4 mt-10">Collection Name</h1>

          <h2 class="theme-text text-3xl">
            {{ singleNftData?.collectionName }}
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="image-container space-y-2 py-4">
            <div
              class="image-container relative w-full rounded-2xl border shadow dark:border-secondary-900"
            >
              <Image
                class="rounded-t-2xl object-cover"
                sizes=""
                :url="singleNftData!.media.gateway"
              />
              <div
                class="theme-text absolute bottom-0 z-40 w-full bg-white py-6 dark:bg-secondary-900"
              >
                <div class="flex justify-between px-4">
                  <div class="flex items-center gap-x-2">
                    <NumberSummary :value="singleNftData?.views" />
                    <i class="fa-light fa-eye cursor-pointer"></i>
                  </div>
                  <div class="flex items-center gap-x-2 pr-2">
                    <NumberSummary :value="singleNftData?.favorites" />

                    <i
                      class="fa-sharp fa-regular fa-heart cursor-pointer hover:text-secondary-700"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="mb-6 text-3xl">{{ singleNftData.collectionName }}</div>
            <div class="mb-6 flex flex-row gap-x-4">
              <button class="btn2">{{ singleNftData.price }}ETH</button>
            </div>
            <div class="mb-6">
              {{ singleNftData.description }}
            </div>
            <div class="mb-6 flex gap-x-4">
              dd

              <div class="">
                <h1>Owner</h1>
                <p>By Owner</p>
              </div>
            </div>
            <div class="mb-6">
              <div>
                <div class="mb-4">
                  <h1 class="py-4 text-2xl">Latest Bids</h1>
                </div>
                <div class="flow-root">
                  <ul>
                    <li v-for="(bid, index) in bids" :key="index">
                      <div class="relative pb-8">
                        <div class="relative flex space-x-6">
                          <div>
                            <span
                              class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500"
                            >
                              <i
                                class="cursor-pointer px-1"
                                :class="`${bid.iconstyle} ${bid.icon}`"
                              ></i>
                            </span>
                          </div>
                          <div
                            class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                          >
                            <div>
                              <p class="theme-text text-sm">
                                {{ bid.user }} {{ bid.activity }}
                              </p>
                            </div>
                            <div
                              class="whitespace-nowrap text-right text-sm text-gray-500"
                            >
                              <time :datetime="bid.datetime">{{
                                bid.date
                              }}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mb-6 flex flex-row gap-x-4">
              <button class="btn1">Place a bid</button>
              <button class="btn2">Purchase Now</button>
            </div>
          </div>
        </div>

        <div class="py-10">
          <h1 class="theme-text mb-4 py-4 text-center text-3xl">
            Users also looked at
          </h1>
          <NftSimpleSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BidsType, NftDataTypes } from "../../types/model";
import NftSimpleSlider from "../section/NftSimpleSlider.vue";

import NumberSummary from "../../components/utils/NumberSummary.vue";

import axios from "axios";
import Image from "~/components/utils/Image.vue";

import { serverUrl } from "../../config.ts";

definePageMeta({
  title: "NFT Details",
  description: "NFT Details",
  name: "nftDetails",
});

const bids: BidsType[] = [
  {
    user: "John Doe",
    amount: 1.5,
    activity: "Increased Bid offer to 11 ETH",
    date: "June 10, 2023",
    datetime: "2023-06-10",
    icon: "fa-solid fa-check",
    iconstyle: "text-green-500",
  },
  {
    user: "Jane Smith",
    amount: 1.8,
    activity: "rejected last Bid offer",
    date: "June 9, 2023",
    datetime: "2023-06-09",
    icon: "fa-solid fa-cancel",

    iconstyle: "text-red-500",
  },
  {
    user: "Mike Johnson",
    amount: 1.2,
    activity: "Increased Bid offer to 20 ETH",
    date: "June 8, 2023",
    datetime: "2023-06-08",
    icon: "fa-solid fa-check",

    iconstyle: "text-green-500",
  },
  // Add more bids here...
];

const nftdetail = [
  {
    image: "/nft/nft1.png",
    collectionName: "NFT 8 - Death of a Salesman",
    ethPrice: "1.49",
    usdPrice: "3,500",
    name: "Death of a Salesman",
    description:
      "A masterpiece built with vibrant colors that represents the freedom of womanhood. This art also represents intersectional self as well. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    owner: "Liar Smith",
    ownerPrice: "/nft/nft5.png",
  },
];

const singleNftData = ref<NftDataTypes>();

const isLoading = ref(false);

const route = useRoute();

const nftUuid = computed(() => {
  return route.params.nftUuid;
});

console.log(nftUuid.value);

onMounted(() => {
  getOne();
}); //

function getOne() {
  isLoading.value = false;

  axios
    .get(`${serverUrl}/nfts/item/${nftUuid.value}`)
    .then((response) => {
      singleNftData.value = response.data;
      isLoading.value = true;
    })
    .catch((error) => {
      console.log(error);
      isLoading.value = true;
    });

  console.log("getOne is now running");
}
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

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
