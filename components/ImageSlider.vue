<template>
  <Swiper
    class="swiper"
    :modules="[Pagination]"
    :space-between="30"
    :pagination="{ clickable: true }"
  >
    <SwiperSlide v-for="(item, id) in 8" :key="id" class="slide">
      <div class="h-80">
        <div class="h-20 text-2xl text-green-500">slider </div>
      </div>
    </SwiperSlide>
    <div class="swiper-pagination bg-red-500"></div>

  </Swiper>
</template>

<script lang="ts" setup>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<style lang="scss" scoped></style>
