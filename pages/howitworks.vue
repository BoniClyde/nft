<script lang="ts" setup>
import { useAppStore } from "~/store/appStore";
import { useWebsiteStore } from "~/store/data";

definePageMeta({
  name: "howItWorks",
});

const websiteStore = useWebsiteStore();

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

type HowItWorksTypes = {
  step: number;
  title: string;
  description: string;
};

type Benefits = {
  title: string;
  description: string;
};



const benefits: Benefits[] = [
  {
    title: "Secure and Transparent Transactions",
    description:
      "Our platform leverages blockchain technology to ensure secure and transparent transactions for buying and selling NFTs.",
  },

  {
    title: "Wide Range of NFT Categories",
    description:
      "Discover a diverse range of NFT categories including art, music, collectibles, virtual real estate, and more.",
  },
  {
    title: "Community and Social Features",
    description:
      "Engage with a vibrant community of artists, collectors, and enthusiasts through forums, chat, and social features.",
  },
];
</script>

<template>
  <div>
    <Head>
      <Title>{{ appStore.appConfigData.company_name }} | How It Works </Title>
    </Head>
    <div>
      <div>
        <div class="relative bg-secondary-100 shadow-sm dark:bg-secondary-900">
          <div
            class="relative h-80 overflow-hidden bg-primary-500 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
          >
            <img
              class="h-full object-fill"
              src="https://i.seadn.io/gae/vLvGrV3DUi4mo-pLXM34P_D6I589GcsfCXlONsVE59qP9FDPuhdpiCtVwfiDmuKTDqlg2u8l7oKCnwvMCRwpALYrO5DCq2Ar0k82?auto=format&dpr=1&w=1000"
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
          <div
            class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40"
          >
            <div
              class="px-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32"
            >
              <h2
                v-text="websiteStore.websiteData.howItWorks.sectionOne.title"
                class="theme-text text-base font-semibold leading-7"
              ></h2>
              <p
                v-text="websiteStore.websiteData.howItWorks.sectionOne.subtitle"
                class="theme-text mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              ></p>
              <p
                v-text="
                  websiteStore.websiteData.howItWorks.sectionOne.description
                "
                class="theme-text mt-6 text-justify text-base leading-7"
              ></p>

              <div class="mt-8">
                <a href="#" class="btn1">Visit the help center</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="mx-auto px-6 lg:container">
        <div class="pt-20">
          <div class="">
            <h1 class="theme-text mb-8 text-2xl font-bold lg:text-center">
              How It Works
            </h1>

            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div v-for="(item, index) in  websiteStore.websiteData.howItWorks.sectionTwo" :key="index">
                <div class="">
                  <div
                    class="mb-8 w-full rounded-md px-2 py-4 shadow-md dark:bg-secondary-900"
                  >
                    <div class="mb-4 flex items-center">
                      <div class="flex-shrink-0">
                        <div
                          class="theme-text flex items-center justify-center rounded-full bg-primary-500"
                        >
                          <span class="text-lg">{{ item.step }}</span>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h2 class="theme-text text-lg font-medium">
                          {{ item.title }}
                        </h2>
                        <p class="theme-text mt-2">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                    <!-- Other steps -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Other Sections -->
        <!-- Logo cloud -->
        <div class="mx-auto mt-10 max-w-7xl sm:mt-20 sm:px-6 lg:px-8">
          <div
            class="dark:gradient relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          >
            <h2
              class="theme-text3 mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Our customers love us
            </h2>
            <p v-text="websiteStore.websiteData.howItWorks.sectionThree.description " class="theme-text3 mx-auto mt-6 max-w-xl text-lg leading-8">
            
            </p>
            <div
              class="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5"
            >
              <img
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
            <div
              class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style="
                  clip-path: polygon(
                    73.6% 51.7%,
                    91.7% 11.8%,
                    100% 46.4%,
                    97.4% 82.2%,
                    92.5% 84.9%,
                    75.7% 64%,
                    55.3% 47.5%,
                    46.5% 49.4%,
                    45% 62.9%,
                    50.3% 87.2%,
                    21.3% 64.1%,
                    0.1% 100%,
                    5.4% 51.1%,
                    21.4% 63.9%,
                    58.9% 0.2%,
                    73.6% 51.7%
                  );
                "
              />
            </div>
          </div>
        </div>

        <div class="py-10">
          <div class="dark:bg-gray-900">
            <div class="px-7 py-4">
              <h2 class="mb-10 text-2xl font-bold lg:text-center">
                Benefits of Using Our Platform
              </h2>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="(item, index) in benefits"
                :key="index"
                class="rounded-lg bg-secondary-100 p-6 shadow-md dark:bg-secondary-900"
              >
                <h3 class="mb-4 text-xl font-medium">
                  {{ item.title }}
                </h3>
                <p>{{ item.description }}ff</p>
              </div>
              <!-- Add more benefit sections -->
            </div>
          </div>
        </div>
      </section>

      <div class="py-10">
        <div class="container mx-auto">
          <h2 class="theme-text mb-8 text-center text-3xl font-bold">
            Start Your NFT Journey Today
          </h2>
          <div class="flex justify-center">
            <a href="#" class="btn1 dark:text text-white">Get Started</a>
          </div>
        </div>
      </div>

      <!-- Additional Sections -->
    </div>
  </div>
</template>

<style>
.bg-primary-500 {
  background-color: var(--primary-500);
}
</style>
