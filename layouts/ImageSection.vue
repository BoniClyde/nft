<template>
  <div class="grid lg:grid-cols-4 px-6">
    <div class="col-span-2">
      <h1 class="font-semibold text-4xl mb-1">
        The Premier Marketplace
        <h2 class="text-4xl font-semibold mb-2">for NFTs</h2>
      </h1>
      <p class="p mb-2">
        Experience the epitome of NFT trading on our premier marketplace, where
        digital art and collectibles find their true value. Discover, collect,
        and trade the future of digital assets today.
      </p>
      <PrimaryButton label="Learn More " class="btn1 mb-4" />
    </div>
    <div class="col-span-2 shadow-xl">
      <div class="justify-between lg:flex">
        <div>
          <NftCard />
        </div>
        <div class="gap-x-2">
          <div>
            <img class="rounded-xl mb-1" src="/nft/nft10.png" alt="" />
          </div>
          <div><img class="rounded-xl mb-1" src="/nft/nft12.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NftCard from '~/components/NftCard.vue';
</script>
