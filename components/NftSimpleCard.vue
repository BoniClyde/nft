<template>
  <div>
    <div class="flex justify-center lg:justify-end">
      <div class="">
        <div class="relative z-10 w-96 rounded-lg px-2 text-gray-900 shadow-lg">
          <div
            v-show="false"
            class="skeleton-image relative h-[400px] max-w-full rounded-t-lg object-cover transition-transform hover:scale-110"
          ></div>

          <img
            :src="src"
            :alt="name"
            class="max-w-full transform rounded-t-lg object-cover"
            @load="onImageLoad"
            @error="onImageError"
          />

          <div class="absolute bottom-0 left-0 h-20 w-96 bg-primary-500"></div>

          <div class="absolute top-72 w-full py-4 font-bold text-white">
            <h2 class="px-4 text-sm font-semibold">{{ name }}</h2>
            <p class="mt-2 flex justify-between px-4 text-xs">
              Price: <span class="font-bold">{{ price }} ETH</span>
            </p>
          </div>
          <div
            class="absolute left-0 top-0 z-10 m-4 rounded-md bg-white p-2 px-4 text-xs font-bold"
          >
            {{ tokenId }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="false">
    <li
      class="relative rounded-2xl bg-primary-900"
      v-for="(item, index) in nfts?.data"
      :key="index"
    >
      <img
        class="aspect-[14/13] w-full rounded-t-2xl object-cover"
        :src="item.collectionImage"
        alt=""
      />

      <div class="p-4">
        <h3
          class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-50"
        >
          <TruncateString :value="item.collectionName" :length="20" />
        </h3>
        <div class="flex justify-between">
          <p class="text-sm leading-6 text-gray-200">Price</p>
          <p class="text-base font-medium leading-6 text-gray-200">
            {{ item.floorPrice }} ETH
          </p>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import { nftTypes } from "~/types/model";

const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  tokenId: {
    type: String,
    required: false,
  },
});

const isLoading = ref(true);

function onImageLoad() {
  isLoading.value = false;
}

function onImageError() {
  isLoading.value = true;
}
</script>

<style lang="css" scoped>
.skeleton-image {
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  from {
    background-position: 200px 0;
  }
  to {
    background-position: 2200px 0;
  }
}
</style>
