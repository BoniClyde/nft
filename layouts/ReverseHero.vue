<template>
  <div
    class="flex flex-col items-center justify-between gap-y-4 px-4 py-10 md:flex-row"
  >
    <div class="mb-4 space-y-2">
      <NftCard
        name="MutantApeYachtClub #2691"
        src="https://nft-cdn.alchemy.com/eth-mainnet/6a0765f512c341d2dc9bcc752a96e80b"
        :price="0.05"
        :tokenId="2691"
      />
    </div>
    <div class="">
      <div
        class="mb-4 space-y-2 text-center text-3xl font-semibold lg:text-left lg:text-5xl"
      >
        <h1>Sell, Buy, discover</h1>
        <h1>and collect NFT arts</h1>
      </div>

      <p
        class="py-4 text-center font-semibold text-primary-500 underline lg:text-left"
      >
        Unleash your creativity with NFT Collective. Join our platform as a
        publisher/creator, showcase your unique NFT creations to a global
        audience, and monetize your talent. Start your journey as a recognized
        name in the NFT space today.
      </p>
      <div class="mb-4 flex justify-center gap-x-2 lg:justify-start">
        <PrimaryButton label="Create Art" class="btn1" />
        <div class="w-2 py-2 lg:block"></div>
        <PrimaryButton label="Marketplace" class="btn2" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
