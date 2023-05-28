<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="theme-text">
    <main class="isolate">
      <!-- Hero section -->
      <div
        class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14"
      >
        <div
          class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] shadow-xl ring-1 ring-indigo-50"
          aria-hidden="true"
        />
        <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div
            class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
          >
            <h1
              class="theme-text2 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto"
            >
              Welcome to {{ appStore.appConfigData.company_name }}
              - an innovative NFT marketplace powered by a passionate global
              team.
            </h1>
            <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p class="theme-text text-lg leading-8">
                We firmly believe in the transformative potential of NFTs
                (Non-Fungible Tokens) to revolutionize art, culture, and digital
                assets. With this belief in mind, our team has come together to
                create an extraordinary platform.

                {{ appStore.appConfigData.company_name }}
                strives to be a cutting-edge marketplace, empowering artists,
                collectors, and enthusiasts. Our curated collection showcases
                exceptional digital art, rare collectibles, and exclusive
                experiences, each chosen with meticulous attention to quality
                and originality.
              </p>
            </div>
            <img
              src="nft/nft1.png"
              alt=""
              class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32" />
      </div>

      <!-- Timeline section -->
      <div class="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          <div v-for="item in timeline" :key="item.name">
            <time
              :datetime="item.dateTime"
              class="theme-text flex items-center text-sm font-semibold leading-6"
            >
              <svg
                viewBox="0 0 4 4"
                class="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </svg>
              {{ item.date }}
              <div
                class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p
              class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
            >
              {{ item.name }}
            </p>
            <p class="theme-text mt-1 text-base leading-7">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
        <div
          class="dark:gradient relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2
            class="theme-text3 mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our customers love us
          </h2>
          <p class="theme-text3 mx-auto mt-6 max-w-xl text-lg leading-8">
            At {{ appStore.appConfigData.company_name }}, we pride ourselves on
            delivering exceptional customer experiences. With personalized
            service, a vibrant community, curated collections, secure
            transactions, and a commitment to mutual growth, we are dedicated to
            exceeding your expectations.
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

      <!-- Content section -->
      <div class="mt-32 overflow-hidden sm:mt-40">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
          >
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2
                class="theme-text text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Our People
              </h2>
              <p class="theme-text mt-6 text-xl leading-8">
                At {{ appStore.appConfigData.company_name }}, our people are the
                heart and soul of our organization. We value their unique
                perspectives, diverse backgrounds, and unwavering dedication.
                Together, we strive to create a supportive and inclusive
                environment where everyone can thrive and make a meaningful
                impact.
              </p>
              <p class="theme-text mt-6 text-base leading-7">
                Our team is comprised of talented individuals who bring passion,
                creativity, and expertise to everything they do. We foster a
                culture of collaboration, continuous learning, and personal
                growth, ensuring that our people have the tools and
                opportunities to reach their full potential. With their
                exceptional skills and commitment, our people are the driving
                force behind our success.
              </p>
            </div>

            <div
              class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
            >
              <div
                class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
              >
                <img
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  alt=""
                  class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div
                class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
              >
                <div
                  class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
                >
                  <img
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div
                  class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
                >
                  <img
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    alt=""
                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div
                  class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
                >
                  <img
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="theme-text text-3xl font-bold tracking-tight sm:text-4xl">
            We approach the workplace as something that adds to our lives and
            adds value to world.
          </h2>
          <p class="theme-text mt-6 text-base leading-7">
            At {{ appStore.appConfigData.company_name }}, we believe that the
            workplace should be more than just a job. We see it as an
            opportunity to enhance our lives and make a positive impact on the
            world. By fostering a collaborative and inclusive environment,
            encouraging personal growth, and promoting work-life balance, we
            strive to create a fulfilling and meaningful experience for our team
            members. We believe that when individuals are empowered and
            inspired, they can truly make a difference in the work they do and
            the value they bring to the world.
          </p>
        </div>
        <div
          class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
        >
          <div
            class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
          >
            <p
              class="flex-none text-3xl font-bold tracking-tight text-gray-900"
            >
              250k
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-gray-900">
                Users on the platform
              </p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                Experience the Power of our Platform with Over 250,000 Satisfied
                Users and Growing! Join our Vibrant Community and Discover the
                Value We Bring to Workplaces and Lives.Vel labore deleniti
                veniam consequuntur sunt nobis.
              </p>
            </div>
          </div>
          <div
            class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44"
          >
            <p class="theme-text3 flex-none text-3xl font-bold tracking-tight">
              $8.9 billion
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="theme-text3 text-lg font-semibold tracking-tight">
                We’re proud that our customers have made over $8 billion in
                total revenue.
              </p>
              <p class="mt-2 text-base leading-7 text-gray-400">
                With a track record of generating over $8 billion in total
                revenue for our customers, we provide a trusted and profitable
                ecosystem. Discover the value of your digital assets, connect
                with a global community, and be part of the lucrative NFT
                revolution. Experience the future of commerce with Nift
                Collective.
              </p>
            </div>
          </div>
          <div
            class="gradient mb-44 flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
          >
            <p class="flex-none text-3xl font-bold tracking-tight text-white">
              401,093
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-white">
                Transactions this year
              </p>
              <p class="mt-2 text-base leading-7 text-indigo-200">
                Join {{ appStore.appConfigData.company_name }} and be a part of
                the growing digital economy. With over 401,093 transactions this
                year alone, our platform connects buyers and sellers from around
                the world. Discover unique NFTs, engage with talented creators,
                and experience the thrill of owning digital assets.
              </p>
            </div>
          </div>
        </div>
        <div class="py-10">
          <EmailSection />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import EmailSection from "~/layouts/EmailSection.vue";
import { useAppStore } from "~/store/appStore";
const appStore = useAppStore();

const timeline = [
  {
    name: "Founded company",
    description:
      "Nifty Collective was founded with a pioneering spirit and a shared vision to revolutionize the world of NFTs. Inspired by the limitless possibilities of blockchain technology and digital art, our diverse team of passionate individuals came together from different corners of the world. ",
    date: "Aug 2021",
    dateTime: "2021-08",
  },

  {
    name: "Secured $65m in funding",
    description:
      "We achieved a major milestone by securing a remarkable $65 million in funding. This significant investment not only validates our vision and potential but also provides us with the resources to further enhance our platform and services. ",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Released beta",
    description:
      "After months of dedicated development and rigorous testing, we are thrilled to announce the release of our beta version. This marks an important milestone in our journey to deliver a seamless and user-friendly NFT marketplace experience.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Global launch of product",
    description:
      "We are excited to announce the global launch of our groundbreaking NFT marketplace. This marks a significant step in our mission to empower artists, collectors, and enthusiasts worldwide. Our platform offers a diverse range of digital assets, from art and music to virtual real estate and gaming items.  ",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

const mobileMenuOpen = ref(false);
</script>

<style>
.gradient {
  background: rgb(18, 48, 204);
  background: linear-gradient(
    90deg,
    rgba(18, 48, 204, 1) 1%,
    rgba(9, 50, 121, 1) 53%,
    rgba(14, 94, 152, 1) 100%
  );
}
</style>
