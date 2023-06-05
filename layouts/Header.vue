<template>
  <div
    class="border-b shadow-lg dark:border-secondary-400 dark:bg-secondary-950"
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
          <div>
            <div>
              <div class="flex gap-x-4">
                <div class="relative flex">
                  <div
                    class="p-3 transition-opacity"
                    @click="toggleTheme"
                    :class="{
                      'opacity-100': showThemeSelector,
                      'opacity-80': !showThemeSelector,
                    }"
                  >
                    <i
                      class="cursor-pointer text-secondary-500 dark:text-primary-200"
                      :class="selectedIcon"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="showThemeSelector"
            
              class="w-28 top-18 right-2 lg:right-64 border dark:border-secondary-600  absolute z-50 cursor-pointer rounded-md  bg-white  dark:bg-secondary-900"
            >
              <div
                v-for="(item, index) in themeValues"
                :key="index"
                @click="$colorMode.preference = item.value"
                class="cursor-pointer   px-3 py-3 text-xs  hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-all delay-100 duration-300 ease-in-out "
                :class="[
                  $colorMode.preference === item.value
                    ? 'text-primary-500 dark:bg-secondary-700 bg-secondary-50 '
                    : 'theme-text',
                ]"
              >
               <div class="flex items-center">
                <i
                  class="cursor-pointer dark:text-white  px-1"
                  :class="`${item.iconstyle} ${item.icon}`"
                ></i>
           <span class="font-medium">     {{ item.title }}</span>
               </div>
              </div>
            </div>
          </div>

          <div class="hidden items-center space-x-2 px-4 lg:flex">
            <NuxtLink to="/login" class="btn3">
              Sign In
              <i class="fa-duotone fa-right-to-bracket"></i>
            </NuxtLink>
            <NuxtLink to="/signup" class="btn1">
              Get Started
              <i class="fa-sharp fa-solid fa-user-plus"></i>
            </NuxtLink>
          </div>
          <div class="flex gap-x-8">
            <button ref="target" class="lg:hidden" @click="toggleMobileMenu">
              <i class="fa-solid fa-bars theme-text text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile -->

      <div
        v-if="showSearch"
        id="searchBar area"
        class="glass fixed top-0 z-50 h-24 w-full bg-white py-5 dark:bg-secondary-900"
      >
        <div class="grid grid-cols-4 items-center justify-between px-6 pt-1 bg-red-40">
          <div class="col-span-3">
            <input
              type="text"
              placeholder="Search for collections, NFTs or users"
              class="h-8 rounded-md bg-gray-100 px-20 text-sm text-gray-800 
              placeholder:text-xs dark:bg-gray-200
              w-full py-6
               "
            />
          </div>
          <button @click="toggleSearchBar">
            <i class="fa-solid fa-xmark dark:text-gray-100 text-2xl"></i>
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
          <NuxtLink to="/login" class="btn3">
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

const showThemeSelector = ref(false);

type ThemeValueType = {
  title: string;
  icon: string;
  value: "light" | "dark" | "system";
  iconstyle?: string;
};

const themeValues: ThemeValueType[] = [
  {
    title: "Light",
    icon: "fa-regular fa-sun-bright",
    value: "light",
    iconstyle: "text-yellow-700",
  },
  {
    title: "Dark",
    icon: "fa-solid fa-moon ",
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
  showThemeSelector.value = true;
  console.log("Menu show", showThemeSelector.value);
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}

onClickOutside(target, (event) => (showMobileMenu.value = false));
onClickOutside(target, (event) => (showThemeSelector.value = false));

const colorMode = useColorMode();

const selectedTheme = computed(() => {
  return themeValues.find((theme) => theme.value === colorMode.preference);
});
const selectedIcon = computed(() => {
  if (selectedTheme.value) {
    const { icon, iconstyle } = selectedTheme.value;
    return `${iconstyle} ${icon}`;
  } else {
    return ""; // Handle the case when no matching theme is found
  }
});
</script>

<style scoped>
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
.transition-opacity {
  transition-property: opacity;
  transition-duration: 0.5s; /* Adjust the duration as desired */
}



</style>
