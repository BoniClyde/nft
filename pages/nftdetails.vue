<script setup>
import CollectionSlider from "~/pages/section/CollectionSlider.vue";
import Image from "~/components/utils/Image.vue";
import LatestActivity from "~/components/LatestActivity.vue";
import InfiniteScrollBase from "~/components/InfiniteScrollBase.vue";

const bids = [
  {
    user: "John Doe",
    amount: 1.5,
    date: "June 10, 2023",
    datetime: "2023-06-10",
    icon: "fa-sun fa-solid",
  },
  {
    user: "Jane Smith",
    amount: 1.8,
    date: "June 9, 2023",
    datetime: "2023-06-09",
  },
  {
    user: "Mike Johnson",
    amount: 1.2,
    date: "June 8, 2023",
    datetime: "2023-06-08",
  },
  // Add more bids here...
];

const faqs = [
  {
    question: "How Can You Buy NFTs Through Websites?",
    answer:
      "To buy NFTs through websites, you can follow these steps:\n\n1. Create an account on an NFT marketplace platform.\n2. Connect your digital wallet (e.g., MetaMask) to the marketplace.\n3. Browse the available NFT collections and select the one you want to purchase.\n4. Place a bid or choose the 'Buy Now' option if available.\n5. Confirm the transaction and complete the payment using cryptocurrency.",
    open: true,
  },
  {
    question: "How NFT Library Helps You To Find All Recent NFT Collections?",
    answer:
      "An NFT library is a platform or website that curates and displays a collection of NFTs. It helps you find all recent NFT collections by providing a centralized place to discover and explore various NFT artworks and projects. You can browse through different categories, artists, or collections to stay updated with the latest trends in the NFT space.",
    open: true,
  },
  {
    question: "Why Are NFTs Famous Among People?",
    answer:
      "NFTs (Non-Fungible Tokens) have gained popularity among people for several reasons:\n\n1. Unique digital ownership: NFTs allow individuals to own and trade unique digital assets, such as artworks, music, collectibles, and more, providing a sense of ownership and exclusivity.\n2. Digital scarcity: NFTs utilize blockchain technology to create scarcity and provable authenticity, making them valuable in the digital realm.\n3. Artist empowerment: NFTs enable artists to monetize their digital creations directly, without relying on traditional intermediaries.\n4. Community engagement: NFTs often come with access to exclusive communities, events, or perks, fostering engagement and connection among collectors and creators.",
    open: true,
  },
  {
    question: "Can You Own Someone Else’s Artwork Through NFT Trade?",
    answer:
      "When you purchase an NFT, you acquire ownership of the associated digital asset. However, it's important to note that owning an NFT doesn't grant you ownership of the underlying copyright or intellectual property rights of the artwork. The artist or creator still retains those rights. NFT ownership is primarily about owning a unique digital item and participating in the NFT marketplace ecosystem.",
    open: false,
  },
  // Add more FAQs here...
];
</script>
<template>
  <div class="container mx-auto px-4 py-8">
    <div>
      <h1 class="theme-text heading mb-4 mt-10">Collection Name</h1>

      <h2 class="theme-text text-3xl">NFT 8 - Death of a Salesman</h2>
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="space-y-2 py-4">
        <div
          class="image-container relative overflow-hidden rounded-2xl border shadow dark:border-secondary-900"
        >
          <Image
            class="h-[600px] w-full rounded-2xl object-cover"
            url="https://nft-cdn.alchemy.com/eth-mainnet/f636c57563436a94055d3c186c1ac50d"
          />

          <div
            class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
          >
            <div class="flex justify-between">
              <div>
                <i class="fa-light fa-link cursor-pointer"></i>
              </div>
              <div>
                <i
                  class="fa-sharp fa-regular fa-heart cursor-pointer hover:text-secondary-700"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:py-10">
        <div class="mb-6 text-3xl">Death of a Salesman</div>
        <div class="mb-6 flex flex-row gap-x-4">
          <button class="btn2">1.49ETH</button>
          <button class="btn1">$3,500</button>
        </div>
        <div class="mb-6">
          A masterpiece built with vibrant colors that represents the freedom of
          womanhood. This art also represents intersectional self as well. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </div>
        <div class="mb-6 flex gap-x-4">
          <img class="h-14 w-14 rounded-full" src="nft/nft3.png" alt="" />
          <div class="">
            <h1>Adem Smith</h1>
            <p>By Owner</p>
          </div>
        </div>
        <div class="mb-6">
          <div>
            <div class="mb-4">
              <h1>Latest Bids</h1>
            </div>

            <InfiniteScrollBase/>
            <!-- <LatestActivity/> -->

            <div class="flow-root">
              <ul>
                <li v-for="(bid, index) in bids" :key="index">
                  <div class="relative pb-8">
                    <div class="relative flex space-x-6">
                      <div>
                        <span
                          class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500"
                        >
                          <i class="{fa-duotone fa-user} h-5 w-5"></i>
                        </span>
                      </div>
                      <div
                        class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                      >
                        <div>
                          <p class="theme-text text-sm">
                            {{ bid.user }} placed a bid of
                            <span class="font-medium text-gray-900"
                              >{{ bid.amount }} ETH</span
                            >
                          </p>
                        </div>
                        <div
                          class="whitespace-nowrap text-right text-sm text-gray-500"
                        >
                          <time :datetime="bid.datetime">{{ bid.date }}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mb-6 flex flex-row gap-x-4">
          <button class="btn1">Place a bid</button>
          <button class="btn2">Purchase Now</button>
        </div>
      </div>
    </div>

    <div class="py-6">
      <h3 class="text-lg font-semibold">Frequently Asked Questions</h3>
      <div class="mt-4 space-y-2">
        <div v-for="(faq, index) in faqs" :key="index">
          <div class="flex items-center justify-between">
            <button class="flex items-center focus:outline-none">
              <i
                class="fa-solid fa-plus-circle mr-2 text-primary-600"
                :class="{ 'fa-rotate-45': faq.open }"
              ></i>
              <h4 class="text-base font-medium">{{ faq.question }}</h4>
            </button>
          </div>
          <div v-if="faq.open" class="mt-2">
            <p class="text-sm">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-10">
      <!-- <CollectionSlider /> -->
    </div>
  </div>
</template>

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
