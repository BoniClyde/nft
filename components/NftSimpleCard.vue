<template>
  <div>
    <li
      class="image-container relative cursor-pointer overflow-hidden rounded-2xl border-4 shadow dark:border-secondary-900"
    >
      <nuxt-img
        class="aspect-[3/4] w-full rounded-t-2xl object-cover"
        sizes="sm:100vw md:50vw lg:400px"
        :src="src"
        @error="() => (item.collectionImage = '/nft/defaultErrorImage.png')"
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
import { nftTypes } from "~/types/model";
import TruncateString from "./utils/TruncateString.vue";

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

const isLoading = ref(true);

function onImageLoad() {
  isLoading.value = false;
}

function onImageError() {
  isLoading.value = true;
}
</script>

<style lang="css" scoped>
@keyframes loading {
  from {
    background-position: 200px 0;
  }
  to {
    background-position: 2200px 0;
  }
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}

.image-container img {
  transition: transform 0.3s ease;
}
</style>
