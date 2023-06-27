<template>
  <div>
    <div
      style="height: 96%"
      class="absolute right-8 top-4 w-96 rounded-lg bg-white text-gray-900 shadow-lg dark:bg-secondary-900 dark:text-white"
    >
      <div>
        <button @click="modalStore.hideModal()" class="absolute right-6 top-6">
          <i class="fa-light fa-arrow-right-to-line text-2xl"></i>
        </button>
        <div class="space-y-4 pl-4 pt-4 text-2xl font-semibold">
          <NuxtLink
            :to="{ name: 'explore' }"
            class="block hover:text-primary-500"
            @click="modalStore.hideModal()"
          >
            Marketplace<i class="fa-solid fa-store pl-4 text-primary-700"></i>
          </NuxtLink>
          <NuxtLink
            @click="modalStore.hideModal()"
            :to="{ name: 'howItWorks' }"
            class="block hover:text-primary-500"
          >
            How it Works
          </NuxtLink>

          <NuxtLink
            @click="modalStore.hideModal()"
            :to="{ name: 'about' }"
            class="block hover:text-primary-500"
          >
            About
          </NuxtLink>

          <button @click="toggleDropDown" class="">
            Resources
            <span>
              <i
                :class="[
                  isOpen
                    ? ' fa fa-chevron-circle-up'
                    : 'fa fa-chevron-circle-down',
                ]"
              ></i>
            </span>
          </button>
          <Transition name="fade">
            <div v-if="isOpen" class="space-y-2 text-base">
              <NuxtLink
                @click="modalStore.hideModal()"
                :to="{ name: 'contact' }"
                class="block hover:text-primary-500"
              >
                <i class="fa-sharp fa-solid fa-dash pr-2"></i> Contact
              </NuxtLink>
              <NuxtLink
                @click="modalStore.hideModal()"
                :to="{ name: 'about' }"
                class="block hover:text-primary-500"
              >
                <i class="fa-sharp fa-solid fa-dash pr-2"></i> Partners
              </NuxtLink>
            </div>
          </Transition>
          <NuxtLink
            @click="modalStore.hideModal()"
            to="/blog"
            class="block hover:text-primary-500"
          >
            Blog
          </NuxtLink>
          <div class="flex flex-col space-y-8">
            <NuxtLink
              target="_blank"
              @click="modalStore.hideModal()"
              :to="appStore.appConfigData.login_url"
            >
              Sign In
              <i class="fa-duotone fa-right-to-bracket"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full">
        <div id="footer">
          <div class="flex">
            <NuxtLink
              target="_blank"
              @click="modalStore.hideModal()"
              :to="appStore.appConfigData.register_url"
              class="btn1 mx-4 w-full text-center"
            >
              Get Started
              <i class="fa-sharp fa-solid fa-user-plus"></i>
            </NuxtLink>
          </div>
          <div class="border-b pt-2"></div>
          <div class="flex justify-between px-4 py-4">
            <div>
              <i class="fa-brands fa-instagram"></i>
              <a :href="appStore.appConfigData.instagram_url"></a>
            </div>
            <div>
              <i class="fa-brands fa-facebook">
                <a :href="appStore.appConfigData.facebook_url"></a>
              </i>
            </div>
            <div>
              <i class="fa-brands fa-twitter">
                <a :href="appStore.appConfigData.twitter_url"></a>
              </i>
            </div>
            <div>
              <i class="fa-brands fa-telegram">
                <a :href="appStore.appConfigData.telegram_url"></a>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/appStore";
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();

const isOpen = ref(true);

function toggleDropDown() {
  isOpen.value = !isOpen.value;
}

onMounted(() => {
  isOpen.value = false;
});

const modalStore = useModalStore();
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.1s ease;
}
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
