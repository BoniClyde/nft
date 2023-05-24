<!-- <template>
  <div class="px-6">
    <div class="heading mt-4 py-4 text-center">
      <h1>Discover</h1>
    </div>
    <div class="justify-between md:flex">
      <h1 class="heading mb-4">Trending</h1>
      <PrimaryButton label="See More" class="btn3 mb-6" />
    </div>
    <div class="grid grid-cols-2  gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
      <div v-for="nft in nfts" :key="nft.id" class="">
        <div class="relative rounded-md bg-white shadow-2xl">
          <div class="absolute left-0 top-4 bg-white p-2 text-xs font-bold">
            {{ nft.tag }}
          </div>
          <div class="flex   items-center justify-center">
            <img
              :src="nft.image"
              :alt="nft.name"
              class="h-60 md:h-72 lg:h-full w-full rounded-t-md object-fill "
            />
          </div>
        
          <div class="py-4 bg-red-500 h-20">
            <h2 class="px-4 text-sm font-semibold">{{ truncateText( nft.name, 18) }}</h2>
            <p class=" flex justify-between px-4 text-xs">
              Price: <span class="font-bold">{{ nft.price }} ETH</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const nfts = [
  {
    id: 1,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft1.png",
    tag: "#0001",
    price: 0.05,
  },
  {
    id: 2,
    name: "MutantDogYachtClub #2691",
    image: "/nft/nft2.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 3,
    name: "Dreadfulz #6345",
    image: "/nft/nft3.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image: "/nft/nft4.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 5,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft5.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 6,
    name: "MutantApeYachtClub #2690",
    image: "/nft/nft6.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 7,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft7.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 8,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft8.png",
    tag: "#0002",
    price: 0.08,
  },
  // Add more NFT objects here as needed
];


function truncateText(text, maxLength) {
  return text.slice(0, maxLength) + "..."
}
</script>

<style>
/* Add Tailwind CSS utility classes here if needed */
</style>
 -->

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Discover NFTs
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
        <li
          class="relative rounded-2xl bg-primary-900"
          v-for="(item, index) in nfts"
          :key="index"
        >
          <img
            class="aspect-[14/13] w-full rounded-t-2xl object-cover"
            :src="item.image"
            alt=""
          />
          <div
            class="absolute left-4 top-4 rounded-md bg-white px-6 py-2 text-xs font-bold"
          >
            {{ item.tag }}
          </div>
          <div class="p-4">
            <h3
              class="mt-6 text-lg font-semibold leading-8 tracking-tight text-red-500"
            >
              {{ truncateText(item.name, 20) }}
            </h3>
            <div class="flex justify-between">
              <p class="text-sm leading-6 text-gray-200">Price</p>
              <p class="text-base font-medium leading-6 text-gray-200">
                {{ item.price }} ETH
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="grid place-content-center">
    <PrimaryButton label="See More" class="btn2" />
  </div>
</template>

<script setup>
const nfts = [
  {
    id: 1,
    name: "MutantApeYachtClub",
    image: "/nft/nft1.png",
    tag: "#0001",
    price: 0.05,
  },
  {
    id: 2,
    name: "MutantDogYachtClub #2691",
    image: "/nft/nft2.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 3,
    name: "Dreadfulz #6345",
    image: "/nft/nft3.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 4,
    name: "DeGod #2204",
    image: "/nft/nft4.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 5,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft5.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 6,
    name: "MutantApeYachtClub #2690",
    image: "/nft/nft6.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 7,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft7.png",
    tag: "#0002",
    price: 0.08,
  },
  {
    id: 8,
    name: "MutantApeYachtClub #2691",
    image: "/nft/nft8.png",
    tag: "#0002",
    price: 0.08,
  },

  // Add more NFT objects here as needed
];

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text; // No need to truncate
  } else {
    return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
  }
}
</script>

<style lang="css"></style>
