<template>
  <div class="py-8">
    <div class="rounded-lg bg-secondary-100 shadow-sm dark:bg-secondary-900">
      <div class="relative isolate overflow-hidden">
        <div
          class="mx-auto flex max-w-7xl flex-col-reverse items-center gap-y-8 space-y-8 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
        >
          <div class="lg:flex">
            <Image
              class="h-[500px] w-full object-cover"
              sizes=""
              url="https://lh3.googleusercontent.com/kdjhflVRNcbx0Vc6jPz2F4-E6B60QXOwEVYCN06sXbMX6PboLiJtRtlXRWO9-WBeQcRZhCVbXfrMehGygwjY6Hl8MjSEh1mHKBDQ_Q=s1000"
            />
          </div>
          <div class="px-6 lg:px-0 lg:pt-4">
            <div class="mx-auto max-w-2xl">
              <div>
                <div class="mt-24 text-center sm:mt-3 lg:mt-1 lg:text-start">
                  <div class="py-4">
                    <span
                      class="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10 dark:bg-secondary-600 dark:text-white"
                      >{{ appStore.appConfigData.company_name
                      }}<i class="fa-sharp fa-solid fa-brush"></i
                    ></span>
                  </div>
                </div>
                <div class="theme-text">
                  <h1
                    class="mt-10 text-center text-3xl font-semibold tracking-tight lg:text-left lg:text-5xl"
                  >
                    Become a Publisher/Creator
                  </h1>
                  <p class="mt-6 text-justify text-lg leading-8">
                    Unleash your creativity with NFT Collective. Join our
                    platform as a publisher/creator, showcase your unique NFT
                    creations to a global audience, and monetize your talent.
                    Start your journey as a recognized name in the NFT space
                    today.
                  </p>
                </div>
                <div class="grid place-content-center lg:place-content-start">
                  <div class="mt-10 flex items-center gap-x-6">
                    <a :href="appStore.appConfigData.login_url" class="btn1"
                      >Create Art</a
                    >
                    <a
                      href="https://secure.theniftycollective.com/register"
                      class="rounded-md px-2 text-sm font-semibold leading-10 hover:bg-gray-700 hover:text-white"
                      >Sign Up<span aria-hidden="true">→</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Image from "~/components/utils/Image.vue";
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();
</script>
