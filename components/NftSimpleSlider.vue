<script lang="ts"></script>

<script lang="ts" setup>
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
</script>

<!-- <template>
  <div v-if="pending"></div>
  <div v-else class="px-10 md:px-0">
    <ClientOnly>
      <swiper-container :init="false">
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
    </ClientOnly>
  </div>
</template> -->

<template>
  <swiper-container
    :slides-per-view="4"
    :space-between="20"
    :loop="true"
    :autoplay="true"
    :pagination="{
      hideOnClick: true,
    }"
    :breakpoints="{
      768: {
        slidesPerView: 4,
      },
    }"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
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

  <div>
    <swiper-container
      :slides-per-view="2"
      :space-between="20"
      :loop="true"
      :autoplay="true"
      :pagination="{
        hideOnClick: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 4,
        },
      }"
      @progress="onProgress"
      @slidechange="onSlideChange"
    >
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
