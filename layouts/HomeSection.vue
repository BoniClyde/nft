<template>
  <div class="rounded-lg  ">
    <div class="relative isolate overflow-hidden">
      <div
        class="mx-auto flex max-w-7xl flex-col pt-10 lg:pt-0 items-center gap-y-8 space-y-8 pb-24  sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10"
      >
      <div class="px-6 lg:px-0 lg:pt-4">
        <div>
      <div
        class="mb-4 space-y-2 text-center text-3xl font-semibold lg:text-left lg:text-5xl"
      >
        <h1 class="">Sell, Buy, discover</h1>
        <h1>and collect NFT arts</h1>
      </div>

      <p
        class="py-4 text-center font-semibold text-primary-500 dark:text-primary-400 tracking-wider underline lg:text-left"
      >
        Find it, Buy it, Flip it
      </p>
      <div class="mb-4 flex justify-center gap-x-2 lg:justify-start">
        <PrimaryButton label="Create Art" class="btn1" />
        <div class="w-2 py-2 lg:block"></div>
        <!-- <PrimaryButton label="Marketplace" class="btn2" /> -->
        <a
          href="#"
          class="rounded-md px-2 text-sm font-semibold leading-10  hover:bg-gray-700 hover:text-white"
          >Marketplace<span aria-hidden="  true"> →</span></a
        >
      </div>
    </div>
        </div>
        <div class="lg:flex justify-end">
          <NftCard
            name="MutantApeYachtClub #2691"
            src="/nft/nft10.png"
            :price="0.05"
            :tokenId="2691"
          />
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup></script>
