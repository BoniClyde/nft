<template>
  <div>
    <li
        class="relative rounded-2xl bg-primary-900"
    >
      <img
          class="aspect-[14/13] w-full rounded-t-2xl object-cover"
          :src="data.image"
          alt=""
      />
      <div
          class="absolute left-4 top-4 rounded-md bg-white px-6 py-2 text-xs font-bold"
      >
        {{ data.tag }}
      </div>
      <div class="p-4">
        <h3
            class="mt-6 text-lg font-semibold leading-8 tracking-tight text-red-500"
        >
          <TruncateString :value="data.name" :length="20"/>
        </h3>
        <div class="flex justify-between">
          <p class="text-sm leading-6 text-gray-200">Price</p>
          <p class="text-base font-medium leading-6 text-gray-200">
            {{ data.price }} ETH
          </p>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">

import TruncateString from "~/components/utils/TruncateString.vue";
import {collectionTypes} from "~/types/model";


const props = defineProps({
  data: {
    type: Object as PropType<collectionTypes>,
    required: true,
  },
});
</script>

<style scoped>

</style>