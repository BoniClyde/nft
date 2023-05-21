<template>
  <div class="relative">
    <div class="grid grid-cols-4 gap-x-4 px-6 border-2 border-green-500 py-1">
      <div class="bg-red-200 col-span-2">
        <div class="flex items-center gap-x-2">
          <AppLogo />
          <button @click="toggleSearchBar">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div class="bg-red-200 hidden">item 2</div>
      <div class="bg-red-200 text-right col-span-2">
        <button ref="target" @click="toggleMobileMenu">
          <i class="text-2xl fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <div v-if="showSearch" class="absolute bg-gray-700 top-0 w-full h-10">
      <div class="flex justify-between px-6 items-center pt-2">
        <div>
          <input
            type="text"
            placeholder="Search for collections, NFTs or users"
            class="px-3 rounded-md text-sm bg-gray-100 placeholder:text-sm text-gray-900 sm:w-72 md:w-80 lg:w-96"
          />
        </div>
        <button @click="toggleSearchBar">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    <div v-if="showMobileMenu" class="absolute bg-yellow-500 w-48 right-0 h-52">
      menu
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const showSearch = ref(false);

const showMobileMenu = ref(false);

const target = ref(null);

function toggleSearchBar() {
  showSearch.value = !showSearch.value;
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}

onClickOutside(target, (event) => (showMobileMenu.value = false));


</script>
