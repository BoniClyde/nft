<template>
  <div>
    <div 
    style="height: 96%;"
    class=" absolute right-8 top-4 w-96 rounded-lg bg-white shadow-lg">
      <div class="">
        <div class="space-y-4 pl-4 pt-4 text-2xl font-semibold">
          <NuxtLink
            to="/explore"
            class="block text-gray-900 hover:text-primary-500 dark:text-white"
          >
            Marketplace<i
              class="fa-solid fa-store pl-4 text-primary-700 dark:text-primary-200"
            ></i>
          </NuxtLink>
          <NuxtLink
            to="/howitworks"
            class="block text-gray-900 hover:text-primary-500 dark:text-white"
          >
            How it Works
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="block text-gray-900 hover:text-primary-500 dark:text-white"
          >
            About
          </NuxtLink>
          <div class="flex flex-col space-y-8">
            <NuxtLink to="/login" class="">
              Sign In
              <i class="fa-duotone fa-right-to-bracket"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full">
        <div id="footer">
          <div class="flex">
            <NuxtLink to="/signup" class="btn1 mx-4 w-full">
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

<script setup lang="ts"></script>

<style scoped>
.menu {
 
}
</style>
