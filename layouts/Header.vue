<template>
  <div
    class="border-b shadow-lg dark:border-secondary-400 dark:bg-secondary-500"
  >
    <div class="relative shadow-sm">
      <div
        class="grid grid-cols-2 items-center gap-x-4 px-6 py-6 lg:grid-cols-3"
      >
        <div class="lg:col-span-1">
          <div class="flex items-center gap-x-6">
            <NuxtLink to="/">
              <AppLogo />
            </NuxtLink>
            <input
              id="searchInput"
              type="text"
              placeholder="Search for collections, NFTs or users"
              class="hidden rounded-md bg-gray-100 px-6 py-2 text-gray-900 sm:w-80 md:w-80 lg:block"
            />
            <button @click="toggleSearchBar" class="lg:hidden">
              <i class="fa-solid fa-magnifying-glass theme-text"></i>
            </button>
          </div>
        </div>
        <nav class="theme-text hidden space-x-4 font-semibold lg:flex">
          <NuxtLink to="/">Explore</NuxtLink>
          <NuxtLink to="/howitworks">How it Works</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </nav>
        <div class="flex justify-end">
          <div class="hidden items-center space-x-2 px-4 lg:flex">
            <select
              class="h-7 rounded-md border-2 border-secondary-200"
              v-model="$colorMode.preference"
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
            <NuxtLink to="/login" class="btn">
              Sign In
              <i class="fa-duotone fa-right-to-bracket"></i>
            </NuxtLink>
            <NuxtLink to="/getstarted" class="btn1">
              Get Started
              <i class="fa-sharp fa-solid fa-user-plus"></i>
            </NuxtLink>
          </div>
          <button ref="target" class="lg:hidden" @click="toggleMobileMenu">
            <i class="fa-solid fa-bars theme-text text-2xl"></i>
          </button>
        </div>
      </div>
      <!-- Mobile -->

      <div
        v-if="showSearch"
        class="fixed top-0 z-50 h-16 w-full bg-white py-5 dark:bg-gray-900"
      >
        <div class="flex items-center justify-between px-6 pt-1">
          <div>
            <input
              type="text"
              placeholder="Search for collections, NFTs or users"
              class="h-8 rounded-md bg-gray-100 px-20 text-sm text-gray-800 placeholder:text-xs dark:bg-gray-200 sm:w-72 md:w-96 lg:w-96"
            />
          </div>
          <button @click="toggleSearchBar">
            <i class="fa-solid fa-xmark dark:text-gray-100"></i>
          </button>
        </div>
      </div>
      <div
        v-if="showMobileMenu"
        class="absolute right-0 h-52 w-48 border bg-white font-semibold transition-opacity duration-500"
      >
        <NuxtLink
          to="/"
          class="block px-6 py-2 text-gray-900 hover:text-primary-500"
        >
          Explore
        </NuxtLink>
        <NuxtLink
          to="/howitworks"
          class="block px-6 py-2 text-gray-900 hover:text-primary-500"
        >
          How it Works
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="block px-6 py-2 text-gray-900 hover:text-primary-500"
        >
          About
        </NuxtLink>
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/login" class="btn">
            Sign In
            <i class="fa-duotone fa-right-to-bracket"></i>
          </NuxtLink>
          <NuxtLink to="/getstarted" class="btn1">
            Get Started
            <i class="fa-sharp fa-solid fa-user-plus"></i>
          </NuxtLink>
        </div>
      </div>
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

const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
