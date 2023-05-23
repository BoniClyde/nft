<template>
  <div>
    <div class="flex justify-center lg:justify-end">
      <div class="">
        <div class="relative -z-10 w-96 rounded-lg bg-white shadow-2xl">
          <div
            v-show="isLoading"
            class="skeleton-image h-[400px] max-w-full rounded-t-lg object-cover"
          ></div>

          <img
            v-show="!isLoading"
            :src="src"
            :alt="name"
            class="max-w-full rounded-t-lg object-cover"
            @load="onImageLoad"
            @error="onImageError"
          />

          <div class="py-4">
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
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  src: String,
  price: Number,
  tokenId: Number,
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
