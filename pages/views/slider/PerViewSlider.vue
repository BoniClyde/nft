<template>
    <div class="relative">
      <button class="prev" @click="plusSlides(-3)">❮</button>
      <div class="grid grid-cols-3 gap-x-10">
        <div
          v-for="(item, index) in imgData"
          :key="index"
          :class="['mySlides', { active: isActiveSlide(index) }]"
        >
          <div>
            <img class="relative h-80" :src="`/nft/${item}`" />
            <div class="text">Caption Text</div>
          </div>
        </div>
      </div>
      <button class="next" @click="plusSlides(3)">❯</button>
  
      <div class="text-center">
        <span
          v-for="(item, index) in imgData"
          :key="index"
          :class="['dot', { active: isActiveSlide(index) }]"
          @click="currentSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  
  const imgData = ["nft1.png", "nft2.png", "nft3.png", "nft4.png", "nft5.png", "nft6.png", "nft7.png"];
  
  let slideIndex = 0;
  
  const slides = ref<HTMLElement[]>([]);
  const dots = ref<HTMLElement[]>([]);
  
  function plusSlides(n: number) {
    showSlides(slideIndex + n);
  }
  
  function currentSlide(n: number) {
    showSlides(n);
  }
  
  function showSlides(n: number) {
    const slidesValue = slides.value;
    const dotsValue = dots.value;
  
    if (slidesValue && dotsValue) {
      slideIndex = n;
      if (slideIndex > slidesValue.length - 3) {
        slideIndex = slidesValue.length - 3;
      }
      if (slideIndex < 0) {
        slideIndex = 0;
      }
      for (let i = 0; i < slidesValue.length; i++) {
        slidesValue[i].classList.remove('active');
        slidesValue[i].style.display = "none";
      }
      for (let i = 0; i < dotsValue.length; i++) {
        dotsValue[i].classList.remove('active');
      }
  
      const endIndex = Math.min(slideIndex + 3, slidesValue.length);
      for (let i = slideIndex; i < endIndex; i++) {
        slidesValue[i].style.display = "block";
      }
      slidesValue[slideIndex].classList.add('active');
      dotsValue[slideIndex].classList.add('active');
    }
  }
  
  const isActiveSlide = computed(() => (index: number) => {
    return index >= slideIndex && index < slideIndex + 3;
  });
  
  onMounted(() => {
    slides.value = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
    dots.value = Array.from(document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>);
    showSlides(slideIndex);
  });
  </script>
  
  <style scoped>
  /* ... Existing styles ... */
  
  .active {
    display: block;
  }
  </style>
  

<style scoped>
.mySlides {
  display: none;
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
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 100;
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
