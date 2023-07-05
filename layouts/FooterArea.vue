<template>
  <footer class="text-sm text-white">
    <div class="bg-secondary-950 py-20">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-5">
        <!-- Column 1 -->
        <div class="space-y-4 md:col-span-1">
          <AppLogo />
          <p class="heading">
            We will not rest until 1 billion people are collecting NFTs
            worldwide.
          </p>
        </div>

        <!-- Column 2 -->
        <div class="md:col-span-1">
          <h3 class="mb-4 text-lg font-semibold">What is an NFT?</h3>
          <ul>
            <li>
              <a
                :href="appStore.appConfigData.login_url"
                class="text-white hover:text-gray-600"
                >Publish an NFT with us.</a
              >
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'about' }"
                class="cursor-pointer text-white hover:text-gray-600"
              >
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'contact' }"
                class="cursor-pointer text-white hover:text-gray-600"
              >
                Contact Us
              </NuxtLink>
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
              <a href="#" class="text-white hover:text-gray-600"
                >My Collection</a
              >
            </li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div class="md:col-span-1">
          <h3 class="mb-4 text-lg font-semibold">My Account</h3>
          <!-- Add your content here -->
          <ul>
            <li>
              <a
                :href="appStore.appConfigData.login_url"
                class="text-white hover:text-gray-600"
                >My Collection</a
              >
            </li>
            <li>
              <a
                :href="appStore.appConfigData.login_url"
                class="text-white hover:text-gray-600"
                >Profile</a
              >
            </li>
            <li>
              <a
                :href="appStore.appConfigData.login_url"
                class="text-white hover:text-gray-600"
                >Create Item</a
              >
            </li>
          </ul>
        </div>

        <!-- Column 5 -->
        <div class="md:col-span-1">
          <h3 class="mb-4 text-lg font-semibold">Resources</h3>
          <!-- Add your content here -->
          <ul>
            <NuxtLink>
              <li
                class="cursor-pointer hover:text-gray-600"
                :to="{ name: 'about' }"
              >
                Partners
              </li>
            </NuxtLink>
            <li>
              <a
                :href="appStore.appConfigData.privacy_link"
                class="cursor-pointer hover:text-gray-600"
                >Terms Privacy</a
              >
            </li>
            <li>
              <a
                :href="appStore.appConfigData.blog_link"
                class="cursor-pointer hover:text-gray-600"
                >News & Blog</a
              >
            </li>
            <li>
              <a
                :href="appStore.appConfigData.blog_link"
                class="cursor-pointer hover:text-gray-600"
                >Help Center</a
              >
            </li>
            <li>
              <a
                :href="appStore.appConfigData.legal_link"
                class="cursor-pointer hover:text-gray-600"
                >Legal</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-20 px-6">
        <div
          class="container mx-auto flex flex-col justify-between sm:flex-row"
        >
          <div class="sm:order-1">
            <p class="text-white lg:px-6">
              {{ appStore.appConfigData.company_name }} 2023
            </p>
          </div>
          <div class="mt-4 flex items-center sm:order-1 sm:mt-0">
            <a
              :href="appStore.appConfigData.terms_link"
              class="mr-4 text-white hover:text-gray-600"
              >Terms & Conditions</a
            >
            <span class="text-gray-600">|</span>
            <a
              :href="appStore.appConfigData.privacy_link"
              class="ml-4 text-white hover:text-gray-600"
              >Privacy Policy</a
            >
          </div>
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
.slash {
  clip-path: polygon(0 26%, 100% 0, 100% 100%, 0% 100%);
}
</style>
