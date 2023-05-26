<script setup>
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();
useSeoMeta({
  ogTitle: appStore.appConfigData.slogan,
  description: appStore.appConfigData.description,
  ogDescription: appStore.appConfigData.description,
  ogImage:
    "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
  twitterImage:
    "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
});
</script>

<template>
  <div>
    <div>
      <div class="relative bg-white dark:bg-primary-900">
        <div
          class="relative h-80 overflow-hidden bg-primary-500 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
        >
          <img
            class="h-full w-full object-cover"
            src="https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920"
            alt=""
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fill-opacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#776FFF" />
                <stop offset="1" stop-color="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div
            class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32"
          >
            <h2 class="theme-text text-base font-semibold leading-7">
              Award winning support
            </h2>
            <p
              class="theme-text mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              We’re here to help
            </p>
            <p class="theme-text mt-6 text-base leading-7">
              We take pride in providing top-notch support to our users. Our
              experienced team is here to assist you every step of the way,
              ensuring a smooth and enjoyable experience on our platform.
              Whether you have questions about creating listings, managing your
              collections, or navigating the marketplace, we're here to help.
              Our knowledgeable support agents are available 24/7 to address
              your inquiries and provide personalized guidance. With our
              commitment to customer satisfaction, we strive to exceed your
              expectations.
            </p>

            <div class="mt-8">
              <a href="#" class="btn1">Visit the help center</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="p-10">
        <h1 class="theme-text mb-8 text-4xl font-bold">How It Works</h1>
        <div class="flex flex-wrap">
          <div class="mb-8 w-full md:w-1/2 lg:w-1/3">
            <div class="mb-4 flex items-center">
              <div class="flex-shrink-0">
                <div
                  class="theme-text flex h-12 w-12 items-center justify-center rounded-full bg-primary-500"
                >
                  <span class="text-2xl">1</span>
                </div>
              </div>
              <div class="ml-4">
                <h2 class="theme-text text-xl font-bold">Create Your Wallet</h2>
                <p class="theme-text mt-2">
                  Sign up and create your digital wallet to securely store and
                  manage your NFTs.
                </p>
              </div>
            </div>
            <!-- Other steps -->
          </div>
          <div class="mb-8 w-full md:w-1/2 lg:w-1/3">
            <div class="mb-4 flex items-center">
              <div class="flex-shrink-0">
                <div
                  class="theme-text flex h-12 w-12 items-center justify-center rounded-full bg-primary-500"
                >
                  <span class="text-2xl">2</span>
                </div>
              </div>
              <div class="ml-4">
                <h2 class="theme-text text-xl font-bold">Browse NFTs</h2>
                <p class="theme-text mt-2">
                  Explore a vast collection of unique NFTs created by artists
                  and creators worldwide.
                </p>
              </div>
            </div>
            <!-- Other steps -->
          </div>
          <div class="mb-8 w-full md:w-1/2 lg:w-1/3">
            <div class="mb-4 flex items-center">
              <div class="flex-shrink-0">
                <div
                  class="theme-text flex h-12 w-12 items-center justify-center rounded-full bg-primary-500"
                >
                  <span class="text-2xl">3</span>
                </div>
              </div>
              <div class="ml-4">
                <h2 class="theme-text text-xl font-bold">Buy and Sell</h2>
                <p class="theme-text mt-2">
                  Purchase or sell NFTs securely using cryptocurrency. Join the
                  digital art revolution!
                </p>
              </div>
            </div>

            <!-- Other steps -->
          </div>
        </div>
      </div>
    </div>
    <!-- Other Sections -->

    <div class="bg-gray-100 py-10">
      <div class="container mx-auto">
        <h2 class="mb-8 text-center text-3xl font-bold">
          Benefits of Using Our Platform
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-4 text-xl font-bold">
              Secure and Transparent Transactions
            </h3>
            <p>
              Our platform leverages blockchain technology to ensure secure and
              transparent transactions for buying and selling NFTs.
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-4 text-xl font-bold">Wide Range of NFT Categories</h3>
            <p>
              Discover a diverse range of NFT categories including art, music,
              collectibles, virtual real estate, and more.
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-4 text-xl font-bold">
              Community and Social Features
            </h3>
            <p>
              Engage with a vibrant community of artists, collectors, and
              enthusiasts through forums, chat, and social features.
            </p>
          </div>
          <!-- Add more benefit sections -->
        </div>
      </div>
    </div>

    <div class="bg-white py-10 dark:bg-primary-900">
      <div class="container mx-auto">
        <h2 class="theme-text mb-8 text-center text-3xl font-bold">
          Start Your NFT Journey Today
        </h2>
        <div class="flex justify-center">
          <a href="#" class="theme-text btn2">Get Started</a>
        </div>
      </div>
    </div>

    <!-- Additional Sections -->
  </div>
  <Head>
    <Title>{{ appStore.appConfigData.company_name }} | How It Works </Title>
  </Head>
</template>

<style>
.bg-primary-500 {
  background-color: var(--primary-500);
}
</style>
