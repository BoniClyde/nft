<template>
  <div>
    <div class="mx-auto max-w-2xl pt-24 text-center sm:py-10">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        Top 10 NFT Collections
      </h2>
      <p class="mt-6 text-lg leading-8">
        The Top NFT Collections currenly making waves in our platform and across
        the NFT universe. Here are the Top 10 most viewed NFT Collections this
        month
      </p>
    </div>

    <div v-if="pending">
      <div class="flex justify-center py-80">
        <i class="fa-duotone fa-spinner-third animate-spin text-3xl"></i>
      </div>
    </div>

    <div v-else>
      <div class="">
        <div class="mx-auto max-w-7xl px-8">
          <div>
            <ul
              role="list"
              class="mx-auto grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:px-8 md:px-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              <li
                class="image-container dark:border-6 relative cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow dark:border-secondary-900"
                v-for="(item, index) in data?.data"
                :key="index"
              >
                <Image
                  class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                  sizes="sm:100vw md:50vw lg:400px"
                  :url="item?.collectionImage"
                  :alt="item.collectionName"
                />

                <div
                  class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
                >
                  <div class="flex items-center gap-x-2">
                    <TruncateString
                      class="text-lg font-semibold leading-8 tracking-tight"
                      :value="item.collectionName"
                      :length="20"
                    />
                    <i class="fa-solid fa-badge-check text-primary-500"></i>
                  </div>

                  <div class="flex justify-between">
                    <p>Floor Price</p>
                    <p class="text-base font-medium leading-6">
                      {{ item.floorPrice }} ETH
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-10 grid place-content-center py-8">
        <nuxt-link
          to="/explore"
          class="rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
          >See More<span class="px-1">
            <i class="fa fa-solid fa-down"></i
          ></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TruncateString from "~/components/utils/TruncateString.vue";
import { collectionTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";
import LoadingCard from "~/components/utils/LoadingCard.vue";

import Image from "~/components/utils/Image.vue";

const { data, pending, error } = useClientFetch<{
  meta: {
    lastPage: number;
    page: number;
    perPage: number;
    total: number;
  };
  data: collectionTypes[];
}>("/nfts/collections", {
  lazy: true,
  query: {
    page: 1,
    perPage: 10,
  },
});
</script>

<style lang="css">
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1);
  transform-origin: center center;
}
</style>
