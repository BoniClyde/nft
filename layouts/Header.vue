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
          <div class="">
            <div
              v-if="showThemeMenu"
              class="absolute top-14 z-50 w-36 rounded-md border-2 bg-white p-4 dark:bg-primary-900"
            >
              <div
                v-for="(item, index) in themeValues"
                :key="index"
                @click="$colorMode.preference = item.value"
                class="cursor-pointer text-sm"
                :class="[
                  $colorMode.preference === item.value
                    ? 'text-primary-400'
                    : 'text-secondary-900',
                ]"
              >
                <i
                  class="cursor-pointer text-secondary-900 dark:text-white"
                  :class="item.icon"
                ></i>
                {{ item.title }}
              </div>
            </div>
          </div>

          <div class="hidden items-center space-x-2 px-4 lg:flex">
            <NuxtLink to="/login" class="btn">
              Sign In
              <i class="fa-duotone fa-right-to-bracket"></i>
            </NuxtLink>
            <NuxtLink to="/signup" class="btn1">
              Get Started
              <i class="fa-sharp fa-solid fa-user-plus"></i>
            </NuxtLink>
          </div>
          <div class="flex gap-x-8">
            <div class="lg:hidden">
              <div class="flex gap-x-4">
                <div class="relative flex">
                  <div class="p-3" @click="toggleTheme">
                    <i class="text-primary-300" :class="selectedIcon"></i>
                  </div>
                </div>

                <!-- <select
                  class="h-7 rounded-md border-2 border-secondary-200"
                  v-model="$colorMode.preference"
                >
                  <option value="system">System</option>

                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select> -->
              </div>
            </div>

            <button ref="target" class="lg:hidden" @click="toggleMobileMenu">
              <i class="fa-solid fa-bars theme-text text-2xl"></i>
            </button>
          </div>
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
        class="absolute right-4 z-50 h-52 w-48 border bg-white font-semibold transition-opacity duration-500"
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
          <NuxtLink to="/signup" class="btn1">
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
import { computed } from "vue";

const showSearch = ref(false);

const showMobileMenu = ref(false);

const target = ref(null);

const showThemeMenu = ref(true);

type ThemeValueType = {
  title: string;
  icon: string;
  value: "light" | "dark" | "system";
};

const themeValues: ThemeValueType[] = [
  {
    title: "Light",
    icon: "fa-regular fa-sun-bright fa-spin",
    value: "light",
  },
  {
    title: "Dark",
    icon: "fa-thin fa-moon fa-spin",
    value: "dark",
  },
  {
    title: "System",
    icon: "fa-regular fa-desktop",
    value: "system",
  },
];

function toggleSearchBar() {
  showSearch.value = !showSearch.value;
}

function toggleTheme() {
  console.log("Toggled");
  showThemeMenu.value = !showThemeMenu.value;
  console.log("Menu show", showThemeMenu.value);
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}

onClickOutside(target, (event) => (showMobileMenu.value = false));
onClickOutside(target, (event) => (showThemeMenu.value = false));
const colorMode = useColorMode();
console.log(colorMode.preference);

const selectedTheme = computed(() => {
  return themeValues.find((theme) => theme.value === colorMode.preference);
});
const selectedIcon = computed(() => {
  if (selectedTheme.value) {
    return selectedTheme.value.icon;
  } else {
    return ""; // Handle the case when no matching theme is found
  }
});
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
