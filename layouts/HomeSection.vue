<template>
  <div class="rounded-lg lg:mb-10">
    <div class="relative isolate overflow-hidden">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-y-8 space-y-8 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10 lg:pt-0"
      >
        <div class="px-6 lg:px-0 lg:pt-4">
          <div>
            <div
              class="space-y-2 text-center text-3xl font-semibold lg:mt-20 lg:text-left lg:text-5xl"
            >
              <h1 class="">Sell, Buy, discover</h1>
              <h1>and collect NFT arts</h1>
            </div>

            <p
              class="py-4 text-center font-semibold tracking-wider text-primary-500 underline dark:text-primary-400 lg:text-left"
            >
              Find it, Buy it, Flip it
            </p>
            <div
              class="lg:grid-colds-2 mb-4 grid grid-cols-1 justify-center gap-x-2 text-center md:grid-cols-2 lg:justify-start"
            >
              <!-- <PrimaryButton label="Create Art" class="btn1" /> -->
              <nuxt-link
                to="/explore"
                class="btn1 rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
                >Create Art<span class="px-1"
                  ><i class="fa-duotone fa-file-plus"></i>
                </span>
              </nuxt-link>
              <!-- <PrimaryButton label="Marketplace" class="btn2" /> -->
              <nuxt-link
                to="/explore"
                class="rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
                >Marketplace<span> →</span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          v-if="!pending"
          class="image-container:hover cursor-pointer justify-end lg:flex"
        >
          <nuxt-img
            class="aspect-w-16 aspect-h-9 container h-full w-full rounded-md object-cover"
            sizes="sm:100vw md:50vw lg:400px"
            preload
            :src="data?.data[current].collectionImage"
            loading="lazy"
          />
          <!-- <HomeSectionSlider /> -->

          <!-- <ImageSection /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClientFetch } from "~/request.http";
import { nftTypes } from "~/types/model";

const { data, pending, error } = await useClientFetch<{
  meta: {
    lastPage: number;
    page: number;
    perPage: number;
    total: number;
  };
  data: any;
}>("/nfts/collections", {
  lazy: true,
  query: {
    page: 1,
    perPage: 30,
    // minPrice: 10,
  },
});

const current = ref(0);

onMounted(() => {
  setInterval(() => {
    changeImage();
    console.log("running");
  }, 10000);
});

function changeImage() {
  if (current.value === data.value.data.length - 1) {
    current.value = 0;
  } else {
    current.value++;
  }
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
