<template>
  <header>
    <div class="relative shadow-sm">
    <div class="relative">
      <div
        class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 px-6 items-center py-6"
      >
        <div class="lg:col-span-1">
          <div class="flex items-center gap-x-6">
            <AppLogo />
            <input
              id="searchInput"
              type="text"
              placeholder="Search for collections, NFTs or users"
              class="py-2 px-6 rounded-md bg-gray-100 text-gray-900 sm:w-80 md:w-80 hidden lg:block"
            />
            <button @click="toggleSearchBar" class="lg:hidden">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
          <nav class=" hidden lg:flex space-x-4 font-semibold">
            <NuxtLink to="/" class="text-gray-800">Explore</NuxtLink>
            <NuxtLink to="/" class="text-gray-800"
            <NuxtLink to="/contact" class="text-gray-800"
              >How it Works</NuxtLink
            >
            <NuxtLink to="/about" class="text-gray-800">About</NuxtLink>
          </nav>
        <div class="flex justify-end">
          <div class="hidden lg:flex space-x-2 px-4">
            <PrimaryButton
              class="btn"
              label="Sign In"
              icon="fa-duotone fa-right-to-bracket"
            />
            <PrimaryButton
              class="btn1"
              label="Get Started"
              icon="fa-sharp fa-solid fa-user-plus"
            />
          </div>
          <button ref="target" class="lg:hidden" @click="toggleMobileMenu">
            <i class="text-2xl fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <!-- Mobile -->

      <div v-if="showSearch" class="absolute z-50 bg-white top-0 w-full py-5 h-16">
      <div v-if="showSearch" class="absolute bg-white top-0 w-full py-5 h-16">
        <div class="flex justify-between px-6 items-center pt-1">
          <div>
            <input
              type="text"
              placeholder="Search for collections, NFTs or users"
              class="px-20 rounded-md text-sm bg-gray-100 placeholder:text-xs text-gray-800 sm:w-72 h-8 md:w-96 lg:w-96"
            />
          </div>
          <button @click="toggleSearchBar">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <div
        v-if="showMobileMenu"
        class="absolute bg-white  font-semibold w-48 right-0 h-52 transition-opacity duration-500 border "
      >
        <NuxtLink to="/" class="block text-gray-900 hover:text-primary-500 py-2 px-6">
      >
        <NuxtLink to="/" class="block text-gray-900 hover:bg-gray-200 py-2">
          Explore
        </NuxtLink>
        <NuxtLink
          to="/howitworks"
<<<<<<< HEAD
          class="block text-gray-900 hover:text-primary-500 py-2 px-6"
=======
          class="block text-gray-900 hover:bg-gray-200 py-2"
>>>>>>> 7e976d3 (refactored header)
        >
          How it Works
        </NuxtLink>
        <NuxtLink
          to="/about"
<<<<<<< HEAD
          class="block text-gray-900 hover:text-primary-500 py-2 px-6"
        >
          About
        </NuxtLink>
        <div class="flex flex-col  space-y-2">
          <PrimaryButton
              class="btn ml-2"
              label="Sign In"
              icon="fa-duotone fa-right-to-bracket"
            />
            <PrimaryButton
              class="btn1"
              label="Get Started"
              icon="fa-sharp fa-solid fa-user-plus"
            />
=======
          class="block text-gray-900 hover:bg-gray-200 py-2"
        >
          About
        </NuxtLink>
        <div class="space-y-2">
          <button
            class="text-gray-900 bg-white hover:bg-gray-700 hover:text-white py-2 px-4 rounded-xl"
          >
            Sign Up
          </button>
          <button
            class="text-white bg-primary-500 hover:bg-gray-700 py-2 px-4 rounded-xl"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const showSearch = ref(false);

<<<<<<< HEAD
const showMobileMenu = ref(false);
=======
const showMobileMenu = ref(true);
>>>>>>> 7e976d3 (refactored header)

const target = ref(null);

function toggleSearchBar() {
  showSearch.value = !showSearch.value;
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}

onClickOutside(target, (event) => (showMobileMenu.value = false));
</script>
