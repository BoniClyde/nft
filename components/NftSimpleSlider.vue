<script lang="ts" setup>
import { register } from "swiper/element/bundle";
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { ref, onMounted } from "vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";

const { data, pending } = await useClientFetch<{
  data: NftDataTypes[];
  meta: {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
  };
}>("/nfts/all-nfts", {
  query: {
    perPage: 20,
  },
});

register();
onMounted(() => {
  const swiperEl = document.getElementById("nft-slider") as any;

  const params = {
    injectStyles: [
      `
      .swiper-pagination-bullets.swiper-pagination-horizontal{
        display: none;
      }
      `,
    ],
    pagination: {
      clickable: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: false,
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
  console.log(swiperEl);
});
</script>
<template>
  <div class="px-10 md:px-10">
    <swiper-container id="nft-slider" class="mySwiper" :init="false">
      <swiper-slide v-for="(nft, index) in data?.data">
        <NftSimpleCard
          :name="nft.contract.name"
          :key="index"
          class="px-1"
          :src="nft.media.gateway"
          :price="nft.price"
          :tokenId="nft.contract.tokenId"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
