<template>
  <div>
    <div
      style="height: 96%"
      class="absolute right-8 top-4 w-96 rounded-lg bg-white text-gray-900 shadow-lg dark:bg-secondary-900 dark:text-white"
    >
      <div class="">
        <div class="space-y-4 pl-4 pt-4 text-2xl font-semibold">
          <NuxtLink
            to="/explore"
            class="block hover:text-primary-500"
            @click="useModalStore().hideModal()"
          >
            Marketplace<i class="fa-solid fa-store pl-4 text-primary-700"></i>
          </NuxtLink>
          <NuxtLink
            @click="useModalStore().hideModal()"
            to="/howitworks"
            class="block hover:text-primary-500"
          >
            How it Works
          </NuxtLink>

          <NuxtLink
            @click="useModalStore().hideModal()"
            to="/about"
            class="block hover:text-primary-500"
          >
            About
          </NuxtLink>
          <div class="flex flex-col space-y-8">
            <NuxtLink @click="useModalStore().hideModal()" to="/login">
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
              @click="useModalStore().hideModal()"
              to="/signup"
              class="btn1 mx-4 w-full text-center"
            >
              Get Started
              <i class="fa-sharp fa-solid fa-user-plus"></i>
            </NuxtLink>
          </div>
          <div class="border-b pt-2"></div>
          <div class="flex justify-between px-4 py-4">
            <i class="fa fa-air-conditioner"></i>
            <i class="fa fa-air-conditioner"></i>
            <i class="fa fa-air-conditioner"></i>
            <i class="fa fa-air-conditioner"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/appStore";
</script>

<style scoped></style>
