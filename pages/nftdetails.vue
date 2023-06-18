<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="space-y-2 py-4">
        <div
          class="image-container relative overflow-hidden rounded-2xl border shadow dark:border-secondary-900"
        >
          <nuxt-img
            class="aspect-[3/4] w-full rounded-t-2xl object-cover"
            sizes="sm:100vw md:50vw lg:400px"
            src="nft/nft8.png"
            placeholder="nft/deafaultErrorImage.png"
          />
          <div
            class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
          >
            <div class="flex justify-between">
              <div>
                <i class="fa-light fa-link cursor-pointer"></i>
              </div>
              <div>
                <i
                  class="fa-sharp fa-regular fa-heart cursor-pointer hover:text-secondary-700"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="theme-text heading">Collection Name</h1>

        <h2 class="theme-text heading">NFT 8 - Death of a Salesman (NFT)</h2>

        <div class="flex justify-between py-4">
          <div class="flex gap-x-4">
            <div>
              <img class="h-14 w-14 rounded-full" src="nft/nft3.png" alt="" />
            </div>
            <div>
              <h1>Created By</h1>
              <p>Mitsibushi</p>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <img class="h-14 w-14 rounded-full" src="nft/nft3.png" alt="" />
            </div>
            <div>
              <h1>Current Owner</h1>
              <p>Mitsibushi</p>
            </div>
          </div>
        </div>
        <div class="0 mx-auto border border px-4">
          <div class="flex flex-col gap-4 p-4">
            <div>
              <h3 class="text-lg font-semibold">Offers</h3>
              <p>{{ offers }}</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold">Details</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p>
                    <span class="font-semibold">Contract Address:</span>
                    {{ contractAddress }}
                  </p>
                  <p>
                    <span class="font-semibold">Token ID:</span> {{ tokenId }}
                  </p>
                </div>
                <div>
                  <p><span class="font-semibold">Chain:</span> {{ chain }}</p>
                  <p>
                    <span class="font-semibold">Metadata:</span> {{ metadata }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-10">
      <CollectionSlider />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import NftSimpleSlider from "./section/NftSimpleSlider.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  listings: {
    type: Number,
    required: false,
  },
  offers: {
    type: Number,
    required: false,
  },
  contractAddress: {
    type: String,
    required: false,
  },
  tokenId: {
    type: String,
    required: false,
  },
  chain: {
    type: String,
    required: false,
  },
  metadata: {
    type: String,
    required: false,
  },
});
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
