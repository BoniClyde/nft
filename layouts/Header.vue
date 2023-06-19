<template>
  <div
    class="border-b shadow-lg dark:border-secondary-400 dark:bg-secondary-950"
  >
    <div class="relative top-0 shadow-sm">
      <div
        class="flex items-center justify-between gap-x-4 px-6 py-6 lg:grid-cols-3"
      >
        <div class="lg:col-span-1">
          <div class="flex items-center gap-x-6">
            <NuxtLink to="/">
              <AppLogo class="transition-all duration-300 hover:scale-105" />
            </NuxtLink>
            <nav class="theme-text hidden space-x-4 font-semibold lg:flex">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/explore"
                >Marketplace<i
                  class="fa-solid fa-store px-1 text-primary-700 dark:text-primary-200"
                ></i>
              </NuxtLink>
              <NuxtLink to="/howitworks">How it Works</NuxtLink>
              <NuxtLink to="/about">About</NuxtLink>
            </nav>
          </div>
        </div>

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
                      class="cursor-pointer text-secondary-500 transition-all duration-300 hover:scale-105 dark:text-primary-200"
                      :class="selectedIcon"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="showThemeSelector"
              class="top-18 absolute right-2 z-50 w-28 cursor-pointer rounded-md border bg-white dark:border-secondary-600 dark:bg-secondary-900 lg:right-64"
            >
              <div
                v-for="(item, index) in themeValues"
                :key="index"
                @click="$colorMode.preference = item.value"
                class="cursor-pointer px-3 py-3 text-xs transition-all delay-100 duration-300 ease-in-out hover:bg-secondary-50 dark:hover:bg-secondary-700"
                :class="[
                  $colorMode.preference === item.value
                    ? 'bg-secondary-50 text-primary-500 dark:bg-secondary-700 '
                    : 'theme-text',
                ]"
              >
                <div class="flex items-center">
                  <i
                    class="cursor-pointer px-1 dark:text-white"
                    :class="`${item.iconstyle} ${item.icon}`"
                  ></i>
                  <span class="font-medium"> {{ item.title }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden items-center space-x-2 px-4 lg:flex">
            <NuxtLink to="/login" class="btn3">
              Sign In
              <i
                class="fa-duotone fa-right-to-bracket transition-all duration-300 hover:scale-105"
              ></i>
            </NuxtLink>
            <NuxtLink to="/signup" class="btn1">
              Get Started
              <i
                class="fa-sharp fa-solid fa-user-plus transition-all duration-300 hover:scale-105"
              ></i>
            </NuxtLink>
          </div>
          <div class="flex gap-x-8">
            <button @click="modalStore.openModal" class="lg:hidden">
              <i
                class="fa-solid fa-bars theme-text pl-4 text-2xl transition-all duration-300 hover:scale-105"
              ></i>
            </button>

            <ModalLayout>
              <template #mobilMenu>
                <MobileMenu />
              </template>
            </ModalLayout>
          </div>
        </div>
      </div>
      <!-- Mobile -->

      <div
        v-if="showSearch && $route.path !== '/explore'"
        id="searchBar area"
        class="glass fixed top-0 z-50 h-24 w-full bg-white py-5 dark:bg-secondary-900"
      >
        <div class="grid grid-cols-4 items-center justify-between px-6 pt-1">
          <div class="col-span-3 transition-all delay-100 duration-300">
            <input
              type="text"
              v-model="search_store.searchQuery"
              placeholder="Search for collections, NFTs or users"
              class="h-8 w-full rounded-md bg-gray-100 px-20 py-6 text-sm text-gray-800 placeholder:text-xs dark:bg-gray-200"
              @keyup.enter="gotToSearch"
            />
          </div>
          <button @click="toggleSearchBar">
            <i
              class="fa-solid fa-xmark text-2xl transition-all duration-300 hover:scale-105 dark:text-gray-100"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { computed } from "vue";
import { searchStore } from "~/store/appStore";

import { ThemeValueType } from "../types/model";

import ModalLayout from "../layouts/ModalLayout.vue";

import { useModalStore } from "~/store/appStore";
import MobileMenu from "~/components/MobileMenu.vue";

const modalStore = useModalStore();

const showSearch = ref(false);

const target = ref(null);

const showThemeSelector = ref(false);

const search_store = searchStore();

const $router = useRouter();
const $route = useRoute();

function gotToSearch() {
  if (search_store.searchQuery.length > 0) {
    $router.push({
      path: "/explore",
    });
    toggleSearchBar();
  } else {
  }
}

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
  showThemeSelector.value = true;
}

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
.glass {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
