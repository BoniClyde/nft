<template>
  <div>
    <div class="slideshow-container">
      <div
        ref="slides"
        v-for="(item, index) in imgData"
        :key="index"
        class="mySlides fade"
      >
        <div class="numbertext">1 / {{ index + 1 }}</div>
        <img :src="`/nft/${item}`" style="width: 100%" />
        <div class="text">Caption Text</div>
      </div>

      <a class="prev" @click="plusSlides(-1)">❮</a>
      <a class="next" @click="plusSlides(1)">❯</a>
    </div>
    <br />

    <div style="text-align: center">
      <span
        ref="dots"
        v-for="(item, index) in imgData"
        :key="index"
        class="dot"
        @click="currentSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgData = ["nft1.png", "nft2.png", "nft3.png"];

let slideIndex = 1;

const slides: Ref<HTMLElement | null> = ref(null);
const dots: Ref<HTMLElement | null> = ref(null);

showSlides(slideIndex);

function plusSlides(n: number) {
  showSlides((slideIndex += n));
}

function currentSlide(n: number) {
  showSlides((slideIndex = n));
}

function showSlides(n: number) {
  let i;
  const slidesValue = slides.value as HTMLElement[] | null;
  const dotsValue = dots.value as HTMLElement[] | null;

  if (slidesValue && dotsValue) {
    if (n > slidesValue.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slidesValue.length;
    }
    for (i = 0; i < slidesValue.length; i++) {
      slidesValue[i].style.display = "none";
    }
    for (i = 0; i < dotsValue.length; i++) {
      dotsValue[i].className = dotsValue[i].className.replace(" active", "");
    }
    slidesValue[slideIndex - 1].style.display = "block";
    dotsValue[slideIndex - 1].className += " active";
  }

  console.log(slidesValue);
}

onMounted(() => {
  showSlides(slideIndex);
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>
