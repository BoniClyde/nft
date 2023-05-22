<template>
  <div>
    <div>
      <div v-for="nft in nfts" :key="nft.id" class="w-56">
        <div class="relative bg-white rounded-md shadow-2xl -z-10">
          <div class="flex justify-center items-center w-52 h-56">
            <img
              :src="nft.image"
              :alt="nft.name"
              class="w-full h-full object-contain rounded-t-md"
            />
          </div>
          <div class="absolute z-10 top-0 left-0 p-2 bg-white text-xs font-bold">
            {{ nft.tag }}
          </div>
          <div class="py-4">
            <h2 class="text-sm font-semibold px-4">{{ nft.name }}</h2>
            <p class="text-xs flex justify-between px-4 mt-2">
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
  //   {
  //     id: 2,
  //     name: "MutantDogYachtClub #2691",
  //     image: "/nft/nft2.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  //   {
  //     id: 3,
  //     name: "Dreadfulz #6345",
  //     image: "/nft/nft3.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  //   {
  //     id: 4,
  //     name: "DeGod #2204",
  //     image: "/nft/nft4.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  //   {
  //     id: 5,
  //     name: "MutantApeYachtClub #2691",
  //     image: "/nft/nft5.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  //   {
  //     id: 6,
  //     name: "MutantApeYachtClub #2690",
  //     image: "/nft/nft6.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  //   {
  //     id: 7,
  //     name: "MutantApeYachtClub #2691",
  //     image: "/nft/nft7.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  //   {
  //     id: 8,
  //     name: "MutantApeYachtClub #2691",
  //     image: "/nft/nft8.png",
  //     tag: "#0002",
  //     price: 0.08,
  //   },
  // Add more NFT objects here as needed
];
</script>

<style lang="scss" scoped></style>
