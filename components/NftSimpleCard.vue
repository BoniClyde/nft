<template>
  <div>
    <div class="flex justify-center lg:justify-end">
      <div class="">
        <div class="relative z-10 w-96 rounded-lg px-2 text-gray-900 shadow-lg">
          <div
            v-show="false"
            class="skeleton-image h-[400px] max-w-full rounded-t-lg object-cover transition-transform hover:scale-110"
          ></div>

          <img
            :src="src"
            :alt="name"
            class="max-w-full transform rounded-t-lg object-cover"
            @load="onImageLoad"
            @error="onImageError"
          />

          <div
            class="absolute left-0 top-0 h-full w-96 rounded-t-lg bg-black opacity-20"
          ></div>

          <div class="absolute top-72 w-full py-4 font-bold text-white">
            <h2 class="px-4 text-sm font-semibold">{{ name }}</h2>
            <p class="mt-2 flex justify-between px-4 text-xs">
              Price: <span class="font-bold">{{ price }} ETH</span>
            </p>
          </div>
          <!-- <div
              class="absolute left-0 top-0 z-10 m-4 rounded-md bg-white p-2 px-4 text-xs font-bold"
            >
              {{ tokenId }}
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
