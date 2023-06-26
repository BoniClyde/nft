<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8"
      >
        <div>
          <h2
            class="text-gold-500 text-2xl font-bold sm:text-3xl sm:tracking-tight"
          >
            Sales Support
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>{{ appStore.appConfigData.company_number }}</p>
                <p class="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <EnvelopeIcon
                  class="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>{{ appStore.appConfigData.company_email }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2
            class="text-gold-500 text-2xl font-bold sm:text-3xl sm:tracking-tight"
          >
            Technical Support
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              repellat error corporis doloribus similique, voluptatibus numquam
              quam, quae officiis facilis.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>{{ appStore.appConfigData.company_number }}</p>
                <p class="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <EnvelopeIcon
                  class="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>{{ appStore.appConfigData.company_email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();
</script>
