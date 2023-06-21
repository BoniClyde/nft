<template>
  <div class="container mx-auto px-8 lg:px-8">
    <div class="py-10 text-center text-xl font-bold">Explore NFTs</div>

    <div class="flex justify-center">
      <input
        id="searchInput"
        v-model="search_store.searchQuery"
        type="text"
        placeholder="Search for collections, NFTs or users"
        class="w-4/5 rounded-md bg-gray-100 px-6 py-2 text-gray-900"
      />
    </div>
    <div v-if="pending">Loading ....</div>

    <template v-else>
      <div v-if="data?.data.length > 0">
        <p class="mt-6 text-center" v-if="search_store.searchQuery">
          Hurry! Only <span class="font-bold">{{ data?.meta.total }}</span> left
          in stock. Get yours now!
        </p>
        <br />

        <div class="flex justify-start pt-10">
          <div class="flex gap-x-10">
            <NuxtLink to="/">
              <button
                class="font-semibold transition-all duration-300 hover:scale-105"
              >
                Home
              </button>
            </NuxtLink>

            <svg
              class="h-5 w-5 flex-shrink-0 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <button
              class="transition-all duration-300 hover:scale-105"
              :class="[selectedType === 'nft' ? 'active' : 'inactive']"
              @click="selectNfts"
            >
              Nfts
            </button>
            <svg
              class="h-5 w-5 flex-shrink-0 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <button
              class="transition-all duration-300 hover:scale-105"
              :class="[selectedType === 'collection' ? 'active' : 'inactive']"
              @click="selectCollection"
            >
              Collections
            </button>
          </div>
        </div>

        <div class="">
          <ul
            role="list"
            class="mx-auto mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            <li
              class="image-container dark:border-6 relative cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow dark:border-secondary-900"
              v-for="(item, index) in data?.data"
              :key="index"
            >
              <nuxt-img
                v-if="selectedType === 'collection'"
                class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                sizes="sm:100vw md:50vw lg:400px"
                preload
                :src="item.collectionImage"
                :alt="item.collectionName"
                loading="lazy"
                @error="
                  () => (item.collectionImage = '/nft/defaultErrorImage.png')
                "
                placeholder="/nft/defaultErrorImage.png"
              />
              <NuxtLink to="/nftdetails">
                <nuxt-img
                  v-if="selectedType === 'nft'"
                  class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                  sizes="sm:100vw md:50vw lg:400px"
                  preload
                  :src="item.media.gateway"
                  :alt="item.collectionName"
                  loading="lazy"
                  @error="
                    () => (item.collectionImage = '/nft/defaultErrorImage.png')
                  "
                  placeholder="/nft/defaultErrorImage.png"
                />
              </NuxtLink>

              <div
                v-if="selectedType === 'nft'"
                class="absolute left-4 top-4 rounded-md bg-white px-4 py-1 text-secondary-900"
              >
                #{{ item.contract.tokenId }}
              </div>

              <div
                class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
              >
                <div class="flex items-center gap-x-2">
                  <TruncateString
                    class="text-lg font-semibold leading-8 tracking-tight"
                    :value="item.collectionName"
                    :length="20"
                  />
                  <i
                    v-if="selectedType === 'collection'"
                    class="fa-solid fa-badge-check text-primary-500"
                  ></i>
                </div>
                <div class="flex justify-between">
                  <p class="text-sm leading-6">
                    {{
                      selectedType === "collection" ? "Floor Price" : "Price"
                    }}
                  </p>
                  <p class="text-base font-medium leading-6">
                    {{ item.price }} ETH
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-else>
        <div class="flex h-screen justify-center">
          <div class="text-center">
            <h1 class="font-bold">No Items found</h1>
            <br />
            <p>
              Sorry! We couldn't find any items matching your search criteria.
            </p>
            <nuxt-img
              class="mt-2 aspect-[14/13] w-full rounded-t-2xl object-cover"
              sizes="sm:100vw md:50vw lg:400px"
              preload
              src="https://i.seadn.io/gae/2G4FVS0mk1gd_DeVajwLZrvv7isCWTh1izTi35gYMANpwx5_tpEaNXhoA9WzUkFeN7E7Fa_pm5ayXlPwKm0ac2pYvsL8ykFhWtdN6w?auto=format&dpr=1&w=1000"
              loading="lazy"
            />
          </div>
        </div>
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

const search_store = searchStore();

// search_store.searchQuery = "";

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
        perPage: 10,
        search: search_store.searchQuery,
        //  search: "chum",
        type: selectedType.value,
      },
    }),

  {
    // watch: [selectedType, search_store.searchQuery],
    watch: [selectedType, search_store],
  }
);

/* watch(() => search_store.searchQuery, () => {
console.log("search_store.searchQuery", search_store.searchQuery);
}
); */
</script>

<style scoped>
.active {
  @apply border-b-2 border-primary-500 px-2;
}
/* search_store.searchQuery = ""; */

.inactive {
  @apply hover:border-secondary-500;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
