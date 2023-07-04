<template>
  <div>
    <div v-if="!isLoading"></div>
    <div v-else>
      <div class="container mx-auto px-4 py-8">
        <div>
          <h1 class="theme-text heading mb-4 mt-10">Collection Name</h1>

          <h2 class="theme-text text-3xl">
            {{ singleNftData?.collectionName }}
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="image-container space-y-2 py-4">
            <div
              class="image-container relative w-full rounded-2xl border shadow dark:border-secondary-900"
            >
              <Image
                class="rounded-t-2xl object-cover"
                sizes=""
                :url="singleNftData!.media.gateway"
              />
              <div
                class="theme-text absolute bottom-0 z-40 w-full bg-white py-6 dark:bg-secondary-900"
              >
                <div class="flex justify-between px-4">
                  <div class="flex items-center gap-x-2">
                    <NumberSummary :value="singleNftData!.views" />
                    <i class="fa-light fa-eye cursor-pointer"></i>
                  </div>
                  <div class="flex items-center gap-x-2 pr-2">
                    <NumberSummary :value="singleNftData!.favorites" />

                    <i
                      class="fa-sharp fa-regular fa-heart cursor-pointer hover:text-secondary-700"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="mb-6 text-3xl">{{ singleNftData!.collectionName }}</div>
            <div class="mb-6 flex flex-row gap-x-4">
              <button class="btn2">{{ singleNftData!.price }}ETH</button>
            </div>
            <div class="mb-6">
              {{ singleNftData!.description }}
            </div>

            <div class="mb-6">
              <div>
                <ActivitiesTable />
              </div>
            </div>
            <div class="mb-6 flex flex-row gap-x-4">
              <NuxtLink target="_blank" :to="appStore.appConfigData.login_url">
                <button class="btn1">
                  Place a bid
                  <i class="fa-duotone fa-right-to-bracket"></i>
                </button>
              </NuxtLink>
              <NuxtLink target="_blank" :to="appStore.appConfigData.login_url">
                <button class="btn2">Purchase Now</button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="py-10">
          <h1 class="theme-text mb-4 py-4 text-center text-3xl">
            Users also looked at
          </h1>
          <NftSimpleSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BidsType, NftDataTypes } from "../../types/model";
import NftSimpleSlider from "../section/NftSimpleSlider.vue";

import NumberSummary from "../../components/utils/NumberSummary.vue";

import Image from "~/components/utils/Image.vue";
import { $axios } from "../../request.http";
import ActivitiesTable from "./ActivitiesTable.vue";
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();

definePageMeta({
  title: "NFT Details",
  description: "NFT Details",
  name: "nftDetails",
});

const nftdetail = [
  {
    image: "/nft/nft1.png",
    collectionName: "NFT 8 - Death of a Salesman",
    ethPrice: "1.49",
    usdPrice: "3,500",
    name: "Death of a Salesman",
    description:
      "A masterpiece built with vibrant colors that represents the freedom of womanhood. This art also represents intersectional self as well. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    owner: "Liar Smith",
    ownerPrice: "/nft/nft5.png",
  },
];

const singleNftData = ref<NftDataTypes>();

const isLoading = ref(false);

const route = useRoute();

const nftUuid = computed(() => {
  return route.params.nftUuid;
});

onMounted(() => {
  getOne();
}); //

function getOne() {
  isLoading.value = false;

  $axios
    .get(`/nfts/item/${nftUuid.value}`)
    .then((response) => {
      singleNftData.value = response.data;
      isLoading.value = true;
    })
    .catch((error) => {
      isLoading.value = true;
    });
}
</script>

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
