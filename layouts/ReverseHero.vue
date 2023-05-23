<template>
  <div class="bg-white">
    <div class="relative isolate overflow-hidden">
      <div
        class="mx-auto flex max-w-7xl flex-col-reverse items-center gap-y-8 space-y-8 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
      >
        <div class="lg:flex">
          <NftCard
            name="MutantApeYachtClub #2691"
            src="/nft/nft11.png"
            :price="0.05"
            :tokenId="2691"
          />
        </div>
        <div class="px-6 lg:px-0 lg:pt-4">
          <div class="mx-auto max-w-2xl">
            <div class="">
              <div class="mt-24 sm:mt-32 lg:mt-16">
                <div class="inline-flex space-x-6">
                  <span
                    class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10"
                    >What's new</span
                  >
                </div>
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
                <a href="#" class="btn1">Create Art</a>
                <a href="#" class="btn2"
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
