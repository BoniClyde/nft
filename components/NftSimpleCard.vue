<template>
  <div>
    <li class="relative rounded-2xl bg-primary-900">
      <img
        class="aspect-[14/13] w-full rounded-t-2xl object-cover"
        :src="src"
        alt=""
      />

      <div class="p-4">
        <h3
          class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-50"
        >
          <TruncateString :value="name" :length="20" />
        </h3>
        <div class="flex justify-between">
          <p class="text-sm leading-6 text-gray-200">Price</p>
          <p class="text-base font-medium leading-6 text-gray-200">
            {{ price }} ETH
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
@keyframes loading {
  from {
    background-position: 200px 0;
  }
  to {
    background-position: 2200px 0;
  }
}
</style>
