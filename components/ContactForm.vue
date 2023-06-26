<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8"
      >
        <div>
          <h2
            class="theme-text text-2xl font-bold sm:text-3xl sm:tracking-tight"
          >
            Sales Support
          </h2>
          <div class="mt-3">
            <p class="theme-text text-lg">
              Need assistance with your purchase or have any sales-related
              questions? Reach out to our Sales Support team.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="theme-text ml-3 text-base">
                <p>{{ appStore.appConfigData.company_number }}</p>
                <p class="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <EnvelopeIcon class="theme-text h-6 w-6" aria-hidden="true" />
              </div>
              <div class="theme-text ml-3 text-base">
                <p>{{ appStore.appConfigData.company_email }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2
            class="theme-text text-2xl font-bold sm:text-3xl sm:tracking-tight"
          >
            Technical Support
          </h2>
          <div class="mt-3">
            <p class="theme-text text-lg">
              Need assistance with technical issues or have questions about
              using our platform? Contact our Technical Support team.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="theme-text ml-3 text-base">
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
              <div class="theme-text ml-3 text-base">
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
