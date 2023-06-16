<template>
  <swiper-container
    :centered-slides="true"
    :pagination="{
      hideOnClick: true
    }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper-container>
</template>

<script>



</script>
