<template>
  <footer class="  text-sm text-white">
  <div class="  bg-secondary-500 py-20 ">
    <div class="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-4">
      <!-- Column 1 -->
      <div class="md:col-span-1">
        <p class="heading">
          We will not rest until 1 billion people are collecting NFTs worldwide.
        </p>
      </div>

      <!-- Column 2 -->
      <div class="md:col-span-1">
        <h3 class="mb-4 text-lg font-semibold">What is an NFT?</h3>
        <ul>
          <li>
            <a href="#" class="text-white hover:text-gray-600"
              >Publish an NFT with us.</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-600">About Us</a>
          </li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="md:col-span-1">
        <h3 class="mb-4 text-lg font-semibold">
          {{ appStore.appConfigData.company_name }}
        </h3>
        <!-- Add your content here -->
        <ul>
          <li>
            <a href="#" class="text-white hover:text-gray-600"
              >Displaying NFTs</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-600"
              >Report Security issue</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-600">My Collection</a>
          </li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div class="md:col-span-1">
        <h3 class="mb-4 text-lg font-semibold">Resources</h3>
        <!-- Add your content here -->
        <ul>
          <li>
            <a href="#" class="">Partners</a>
          </li>
          <li>
            <a href="#" class="">Terms Privacy</a>
          </li>
          <li>
            <a href="#" class="">News & Blog</a>
          </li>
          <li>
            <a href="#" class="">Help Center</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </footer>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/appStore";
const appStore = useAppStore();
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl;
}
.slash{
  clip-path: polygon(0 26%, 100% 0, 100% 100%, 0% 100%);

}




</style>
