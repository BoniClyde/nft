<template>
  <div
    class="flex flex-col items-center justify-center gap-x-10 px-8 py-20 md:grid lg:grid-cols-2"
  >
    <div>
      <div
        class="space-y-2 text-center text-3xl font-semibold lg:text-left lg:text-5xl"
      >
        <div class="py-4">
          <span
            class="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10 dark:bg-secondary-600 dark:text-white"
            >{{ appStore.appConfigData.company_name
            }}<i class="fa-sharp fa-solid fa-brush"></i
          ></span>
        </div>
        <h1 class="text-left">Sell, Buy, discover</h1>
        <h1 class="text-left">and collect NFT arts</h1>
      </div>
      <p
        class="py-4 text-left font-semibold tracking-wider text-primary-500 underline dark:text-primary-400 lg:text-left"
      >
        Find it, Buy it, Flip it
      </p>
      <div
        class="lg:grid-colds-2 mb-4 grid grid-cols-1 justify-center gap-x-2 text-center md:grid-cols-2 lg:justify-start"
      >
        <a
          :href="appStore.appConfigData.login_url"
          class="btn1 rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
          >Create Art<span class="px-1"
            ><i class="fa-duotone fa-file-plus"></i>
          </span>
        </a>
        <nuxt-link
          :to="{ name: 'explore' }"
          class="rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
          >Marketplace<span> →</span>
        </nuxt-link>
      </div>
    </div>
    <div>
      <div v-if="pending">
        <div class="flex justify-center">
          <i class="fa-duotone fa-spinner-third animate-spin text-3xl"></i>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-center">
          <Splide :has-track="false" :options="options" class="">
            <SplideTrack>
              <SplideSlide v-for="(item, index) in data?.data" :key="index">
                <Image
                  class="h-[500px] rounded-lg"
                  sizes=""
                  :url="item.collectionImage"
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClientFetch } from "~/request.http";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import Image from "~/components/utils/Image.vue";
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();

const { data, pending, error, refresh } = useClientFetch<any>(
  "/nfts/collections",
  {
    lazy: true,
    query: {
      page: 1,
      perPage: 6,
    },
  }
);

const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: false,
  arrows: false,
  width: "80vw",
  perPage: 1,
  drag: true,
  autoplay: true,
};
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
