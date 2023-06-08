<template>
  <div v-if="false" class="container mx-auto">
    <div class="py-10 text-center text-xl font-bold">Explore NFTs</div>
    <div v-if="pending"></div>

    <template v-else>

      total: {{ data?.meta.total }}
      <br />

      selected: {{ selectedType }}
      <div class="flex justify-start">
        <div class="flex gap-x-10">
          <button
            :class="[selectedType === 'collection' ? 'active' : 'inactive']"
            @click="selectCollection"
          >
            Collections
          </button>
          <button
            :class="[selectedType === 'nft' ? 'active' : 'inactive']"
            @click="selectNfts"
          >
            Nfts
          </button>
        </div>
      </div>

      <div class="">
        <ul
          role="list"
          class="mx-auto mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          <li
            class="relative rounded-2xl bg-secondary-400 dark:bg-secondary-800"
            v-for="(item, index) in data?.data"
            :key="index"
          >
            <nuxt-img
              class="aspect-[14/13] w-full rounded-t-2xl object-cover"
              sizes="sm:100vw md:50vw lg:400px"
              preload
              :src="item.media.gateway"
              :alt="item.collectionName"
              loading="lazy"
              @error="
                () => (item.collectionImage = '/nft/defaultErrorImage.png')
              "
              placeholder="/nft/defaultErrorImage.png"
              @load="
                () => (item.collectionImage = '/nft/defaultErrorImage.png')
              "
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
import { serverUrl } from "~/app.config";
import { searchStore } from "~/store/appStore";

const selectedType = ref<"nft" | "collection">("nft");


const search_store =  searchStore();


function selectCollection() {
  selectedType.value = "collection";
}

function selectNfts() {
  selectedType.value = "nft";
}

const { data, pending, refresh } = await useAsyncData<{
  data: NftDataTypes[];
  meta: {
    total: number;
  };
}>(
  () =>
    $fetch(`${serverUrl}/nfts/all-nfts`, {
      params: {
        perPage: 2,
        //  search: "chum",
        type: selectedType.value,
      },
    }),
  {
    watch: [selectedType],
  }
);
</script>

<style scoped>
.active {
  @apply border-2 border-green-500 px-2;
}

.inactive {
  @apply border-b-2 border-secondary-800;
}
</style>
