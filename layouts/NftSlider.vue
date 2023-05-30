<template>
  <swiper
    :slidesPerView="'auto'"
    :centeredSlides="true"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper bg-primary-900"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <swiper-slide v-for="nft in nftCards" :key="nft.id">
      <NftCard
        class=""
        :id="nft.id"
        :name="nft.name"
        :src="nft.src"
        :price="nft.price"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Pagination];

    const nftCards = [
      {
        id: "3333",
        name: "Looking Good4",
        src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY=",
        price: "139.8",
      },
      {
        id: "3333",
        name: "Looking Good4",
        src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNi5naWY=",
      },
      {
        id: "3333",
        name: "Looking Good4",
        src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
      },
      {
        id: "3333",
        name: "Looking Good4",
        src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
      },
      {
        id: "3333",
        name: "Looking Good4",
        src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
      },
      {
        id: "3333",
        name: "Looking Good4",
        src: "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
      },
      // Add more NFT cards here with their respective data
    ];

    return {
      modules,
      nftCards,
    };
  },
};
</script>
