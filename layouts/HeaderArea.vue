<template>
  <header class="flex items-center justify-between py-4 px-6">
    <div class="flex items-center space-x-4">
      <div class="flex items-center gap-x-4">
        <!-- <AppLogo /> -->
        <!-- <button @click="toggleSearchBar" class="lg:hidden"> -->
        <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
        <!-- </button> -->
      </div>
      <input
        type="text"
        placeholder="Search for collections, NFTs or users"
        class="py-2 px-6 rounded-md bg-gray-100 text-gray-900 sm:w-80 md:w-80 lg:w-96"
      />
    </div>
    <nav class="hidden lg:flex space-x-4 px-2 font-semibold text-15">
      <NuxtLink to="/" class="text-gray-800">Explore</NuxtLink>
      <NuxtLink to="/contact" class="text-gray-800">How it Works</NuxtLink>
      <NuxtLink to="/about" class="text-gray-800">About</NuxtLink>
    </nav>
    <div class="hidden md:flex space-x-2 px-4">
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

    <div>
      <button
        class="md:hidden text-gray-800 focus:outline-none"
        @click="toggleMobileMenu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <!-- <div
      class="md:hidden absolute top-16 right-0 bg-white text-gray-900 w-48 py-2 px-4 rounded shadow-xl"
      :class="{ hidden: !isMobileMenuOpen }"
    >
      <NuxtLink
        to="/"
        class="block text-gray-900 hover:bg-gray-200 py-2"
        @click="closeMobileMenu"
      >
        Explore
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="block text-gray-900 hover:bg-gray-200 py-2"
        @click="closeMobileMenu"
      >
        How it Works
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="block text-gray-900 hover:bg-gray-200 py-2"
        @click="closeMobileMenu"
      >
        About
      </NuxtLink>

      <div class="space-y-2 mt-4">
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
    </div> -->
    <div
      v-if="showMobileMenu"
      class="absolute bg-white px-6 font-semibold w-48 right-0 h-52"
    >
      <NuxtLink to="/" class="block text-gray-900 hover:bg-gray-200 py-2">
        Explore
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="block text-gray-900 hover:bg-gray-200 py-2"
      >
        How it Works
      </NuxtLink>
      <NuxtLink to="/about" class="block text-gray-900 hover:bg-gray-200 py-2">
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
  </header>
</template>
