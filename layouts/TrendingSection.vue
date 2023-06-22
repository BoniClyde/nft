<template>
  <div>
    <LoadingCard />
    <div class="mx-auto max-w-2xl pt-24 text-center sm:py-10">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        NFT Collectors Top {{ data?.meta.total }}
      </h2>
      <p class="mt-6 text-lg leading-8">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </p>
    </div>

    <div v-if="pending">Loading ...</div>

    <div v-else>
      <div class="">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div>
            <ul
              role="list"
              class="mx-auto grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              <li
                class="image-container dark:border-6 relative cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow dark:border-secondary-900"
                v-for="(item, index) in data?.data"
                :key="index"
              >
                <nuxt-img
                  class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                  sizes="sm:100vw md:50vw lg:400px"
                  :src="item.collectionImage"
                  :alt="item.collectionName"
                  loading="lazy"
                  @error="
                    () => (item.collectionImage = '/nft/defaultErrorImage.png')
                  "
                  placeholder="nft/deafaultErrorImage.png"
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
      <div class="grid place-content-center py-8">
        <PrimaryButton label="See More" class="btn2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TruncateString from "~/components/utils/TruncateString.vue";
import { collectionTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";
import LoadingCard from "~/components/utils/LoadingCard.vue";

const { data, pending, error } = await useClientFetch<{
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
    perPage: 6,
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
