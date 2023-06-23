<template>
  <div>
    <div
      v-for="(detail, index) in nftdetail"
      :key="index"
      class="container mx-auto px-4 py-8"
    >
      <div>
        <h1 class="theme-text heading mb-4 mt-10">Collection Name</h1>

        <h2 class="theme-text text-3xl">{{ detail.collectionname }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="image-container space-y-2 py-4">
          <div
            class="image-container relative overflow-hidden rounded-2xl border shadow dark:border-secondary-900"
          >
            <nuxt-img
              class="aspect-[3/4] w-full rounded-t-2xl object-cover"
              sizes="sm:100vw md:50vw lg:400px"
              :src="detail.image"
              placeholder="nft/deafaultErrorImage.png"
            />
            <div
              class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
            >
              <div class="flex justify-between">
                <div>
                  <i class="fa-light fa-link cursor-pointer"></i>
                </div>
                <div>
                  <i
                    class="fa-sharp fa-regular fa-heart cursor-pointer hover:text-secondary-700"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:py-10">
          <div class="mb-6 text-3xl">{{ detail.name }}</div>
          <div class="mb-6 flex flex-row gap-x-4">
            <button class="btn2">{{ detail.ethprice }}ETH</button>
            <button class="btn1">${{ detail.usdprice }}</button>
          </div>
          <div class="mb-6">
            {{ detail.description }}
          </div>
          <div class="mb-6 flex gap-x-4">
            <img class="h-14 w-14 rounded-full" :src="detail.ownerpic" alt="" />

            <div class="">
              <h1>{{ detail.owner }}</h1>
              <p>By Owner</p>
            </div>
          </div>
          <div class="mb-6">
            <div>
              <div class="mb-4"><h1 class="py-4 text-2xl">Latest Bids</h1></div>
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
                            <time :datetime="bid.datetime">{{ bid.date }}</time>
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
</template>

<script setup lang="ts">
import { BidsType } from "../types/model";
import NftSimpleSlider from "./section/NftSimpleSlider.vue";

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
    collectionname: "NFT 8 - Death of a Salesman",
    ethprice: "1.49",
    usdprice: "3,500",
    name: "Death of a Salesman",
    description:
      "A masterpiece built with vibrant colors that represents the freedom of womanhood. This art also represents intersectional self as well. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    owner: "Liar Smith",
    ownerpic: "/nft/nft5.png",
  },
];
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
