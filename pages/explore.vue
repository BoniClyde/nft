<script setup lang="ts">
definePageMeta({
  name: "explore",
});
import { NftDataTypes } from "~/types/model";
import TruncateString from "~/components/utils/TruncateString.vue";
import { searchStore } from "~/store/appStore";
import Image from "~/components/utils/Image.vue";
import axios from "axios";
import { $axios } from "../request.http";

const selectedType = ref<"nft" | "collection">("nft");

const fetchedData = ref<NftDataTypes[]>([]);

const router = useRouter();

function goToCollectionsSearch(data: any) {
  /*   router.push({
    name: "explore",
    query: {
      type: "collection",
    },
  });
 */

  selectedType.value = "nft";
  search_store.searchQuery = data.collectionName;
}

const pageMeta = ref<{
  lastPage: number;
  page: number;
  perPage: number;
  total: number;
}>();

const scrollTrigger = ref<HTMLElement>(); // used to selet the html element

const isLoading = ref(false);

const search_store = searchStore();

// search_store.searchQuery = "";

function selectCollection() {
  search_store.searchQuery = "";
  selectedType.value = "collection";
}

function selectNfts() {
  selectedType.value = "nft";
}

// listen for when a user scrolls to the bottom of the page
// the bottom of the page is the scroll trigger

function scrollListener() {
  const options = {
    rootMargin: "0px",
    threshold: 1,
  };

  // Check if scrollTrigger is defined
  if (scrollTrigger.value) {
    // Create an IntersectionObserver with the scrollTrigger
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNftData();
      }
    }, options);

    // Observe the scrollTrigger element
    observer.observe(scrollTrigger.value);
  }
}

watch(
  () => [search_store.searchQuery, selectedType.value],
  () => {
    search_store.page = 1;
    fetchedData.value = [];
    fetchNftData();
  }
);

// fetch data
function fetchNftData() {
  if (isLoading.value) return;
  isLoading.value = true;
  $axios
    .get(`/nfts/all-nfts`, {
      params: {
        perPage: 8,
        search: search_store.searchQuery,
        page: search_store.page,
        //  search: "chum",
        type: selectedType.value,
      },
    })
    .then((response) => {
      fetchedData.value = [...fetchedData.value, ...response.data.data];
      pageMeta.value = response.data.meta;

      search_store.page++;
      isLoading.value = false;
    })
    .catch((error) => {
      isLoading.value = false;
      return error;
    });
}

/* watch(() => search_store.searchQuery, () => {
console.log("search_store.searchQuery", search_store.searchQuery);
}
); */

const vAutofocus = {
  mounted(el: HTMLElement) {
    el.focus();
  },
};

onMounted(() => {
  search_store.searchQuery = "";

  fetchNftData();
  scrollListener();
});

const images =
  "https://i.seadn.io/gcs/files/78f82f06fa505a4ebe6431348d4fe943.jpg?auto=format&dpr=1&w=1000";
</script>
<template>
  <div
    class="relative col-span-3 h-64 rounded-lg"
    :style="{
      'background-image': `url(${images})`,
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <div class="overlay rounded-lg"></div>
    <div class="text-wrapper">
      <div class="p-10">
        <div class="text-center text-xl font-medium text-white">
          Marketplace <br />
        </div>

        <div class="my-4"></div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-8 lg:px-8">
    <div class="py-10 text-center text-xl font-bold">Explore NFTs</div>

    <div class="flex justify-center">
      <input
        id="searchInput"
        v-model="search_store.searchQuery"
        type="text"
        placeholder="Search for collections, NFTs "
        class="w-4/5 rounded-md bg-gray-100 px-6 py-2 text-gray-900"
        v-autofocus
      />
    </div>

    <div class="">
      <div v-if="isLoading">
        <div class="flex justify-center py-80">
          <i class="fa-duotone fa-spinner-third animate-spin text-3xl"></i>
        </div>
      </div>
      <template v-else>
        <div class="rounded-lg" v-if="fetchedData.length > 0">
          <p class="mt-6 text-center" v-if="search_store.searchQuery">
            Hurry! Only
            <span class="font-bold">{{ pageMeta?.total }}</span> left in stock.
            Get yours now!
          </p>
          <br />

          <div class="flex justify-start pt-10">
            <div class="flex gap-x-10">
              <NuxtLink :to="{ name: 'home' }">
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
                v-for="(item, index) in fetchedData"
                :key="index"
              >
                <template v-if="selectedType === 'collection'">
                  <Image
                    class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                    sizes="sm:100vw md:50vw lg:400px"
                    :url="item.collectionImage"
                    :alt="item.collectionName"
                    @click="goToCollectionsSearch(item)"
                  />

                  <!--     <NuxtLink
                    :to="{
                      name: 'nftDetails',
                      params: {
                        nftUuid: item.uuid,
                      },
                    }"
                  >
                    <Image
                      class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                      sizes="sm:100vw md:50vw lg:400px"
                      :url="item.collectionImage"
                      :alt="item.collectionName"
                    />
                  </NuxtLink> -->
                </template>

                <template v-if="selectedType === 'nft'">
                  <NuxtLink
                    :to="{
                      name: 'nftDetails',
                      params: {
                        nftUuid: item.uuid,
                      },
                    }"
                  >
                    <Image
                      class="aspect-[3/4] w-full rounded-t-2xl object-cover"
                      sizes="sm:100vw md:50vw lg:400px"
                      :url="item.media.gateway"
                      :alt="item.collectionName"
                    />
                  </NuxtLink>
                </template>

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
              <Image
                class="mt-2 aspect-[14/13] w-full rounded-t-2xl object-cover"
                sizes="sm:100vw md:50vw lg:400px"
                url="https://i.seadn.io/gae/2G4FVS0mk1gd_DeVajwLZrvv7isCWTh1izTi35gYMANpwx5_tpEaNXhoA9WzUkFeN7E7Fa_pm5ayXlPwKm0ac2pYvsL8ykFhWtdN6w?auto=format&dpr=1&w=1000"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
    <div ref="scrollTrigger"></div>
  </div>
</template>

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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  z-index: 1;
}

.text-wrapper {
  position: relative;
  z-index: 2;
}
</style>
