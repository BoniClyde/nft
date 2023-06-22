<template>
  <div>
    <li
      class="image-container relative cursor-pointer overflow-hidden rounded-2xl border shadow dark:border-secondary-900"
    >
      <Image
        class="aspect-[3/4] w-full rounded-t-2xl object-cover"
        sizes="sm:100vw md:50vw lg:400px"
        :url="src"
        placeholder="nft/deafaultErrorImage.png"
      />


      <div
        class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
      >
        <div class="flex items-center gap-x-2">
          <TruncateString
            class="text-lg font-semibold leading-8 tracking-tight"
            :value="name"
            :length="20"
          />
        </div>

        <div class="flex justify-between">
          <p>Floor Price</p>
          <p class="text-base font-medium leading-6">{{ price }} ETH</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import { collectionTypes } from "~/types/model";
import TruncateString from "./utils/TruncateString.vue";
import Image from "./utils/Image.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
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
</script>

