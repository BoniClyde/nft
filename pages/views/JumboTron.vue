<template>
  <div class="bg-white">
    <div class="relative isolate overflow-hidden">
      <div
        class="flex gap-y-8 flex-col-reverse mx-auto max-w-7xl items-center space-y-8 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
      >
        <div class="lg:flex">
          <NftCard
            name="MutantApeYachtClub #2691"
            src="https://nft-cdn.alchemy.com/eth-mainnet/6a0765f512c341d2dc9bcc752a96e80b"
            :price=0.05
            :tokenId="2691"
          />
        </div>
        <div class="lg:px-0 lg:pt-4 px-6 ">
          <div class="mx-auto max-w-2xl">
            <div class="">
              <img
                class="h-11"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
                alt="Your Company"
              />
              <div class="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" class="inline-flex space-x-6">
                  <span
                    class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10"
                    >What's new</span
                  >
                  <span
                    class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
                  >
                  </span>
                </a>
              </div>
              <h1
                class="mt-10 text-3xl font-semibold tracking-tight lg:text-left lg:text-5xl"
              >
                Become a Publisher/Creator
              </h1>
              <p class="mt-6 text-justify text-lg leading-8 text-gray-600">
                Unleash your creativity with NFT Collective. Join our platform
                as a publisher/creator, showcase your unique NFT creations to a
                global audience, and monetize your talent. Start your journey as
                a recognized name in the NFT space today.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Create Art</a
                >
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-gray-900"
                  >Sign Up<span aria-hidden="true">→</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
