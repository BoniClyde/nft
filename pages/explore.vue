<template>
  <div>
    <div class="py-10 text-center text-xl font-bold">Explore NFTs</div>
    <div v-if="pending"></div>

    <template v-else>
      <div class="px-4">
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          <li
            class="relative rounded-2xl bg-secondary-400 dark:bg-secondary-800"
            v-for="(item, index) in data?.data"
            :key="index"
          >
            <img
              class="aspect-[14/13] w-full rounded-t-2xl object-cover"
              :src="item.media.gateway"
              alt=""
            />

            <div class="theme-text p-4">
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight">
                <TruncateString :value="item.collectionName" :length="20" />
              </h3>
              <div class="flex justify-between">
                <p class="text-sm leading-6">Price</p>
                <p class="text-base font-medium leading-6">
                  {{ item.price }} ETH
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useClientFetch } from "~/request.http";
import { NftDataTypes } from "~/types/model";
import { nftTypes } from "~/types/model";
import TruncateString from "~/components/utils/TruncateString.vue";

const { data, pending } = await useClientFetch<{
  data?: {
    data: NftDataTypes[];
    meta: any;
  };
}>("/nfts/all-nfts", {
  query: {
    perPage: 40,
    showAll: "true",
  },
});
</script>

<style scoped></style>
