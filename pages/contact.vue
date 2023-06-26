<template>
  <div class="grid py-2 lg:grid-cols-2">
    <div v-if="false" class="bg-gray-900 px-20 py-24 text-justify">
      <h1 class="pb-1 text-4xl">Reach out to Us.</h1>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        At {{ appStore.appConfigData.company_name }}, we know what it’s like to
        trade. With the scale of a global fintech and the agility of a start-up,
        we’re here to arm you with everything you need to take on the global
        markets with confidence.
      </p>
    </div>
  </div>
  <div class="relative">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-96 w-full object-cover lg:absolute lg:h-full"
          src="https://i.seadn.io/gcs/files/f96030a43c07aa4310b6194f184ee353.png?auto=format&dpr=1&w=1920"
          alt=""
        />
      </div>
    </div>
    <div
      class="relative px-4 py-16 sm:px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32"
    >
      <div class="lg:pr-8">
        <div class="mx-auto max-w-md sm:max-w-lg lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl"
          >
            Let's work together
          </h2>
          <p class="theme-text mt-4 text-lg sm:mt-3">
            We’d love to hear from you! Send us a message using the form
            opposite, or email us. We’d love to hear from you! Send us a message
            using the form opposite, or email us.
          </p>
          <form
            action="#"
            method="POST"
            class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                for="first-name"
                class="theme-text block text-sm font-medium"
                >First name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="theme-text block text-sm font-medium"
                >Last name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="theme-text block text-sm font-medium"
                >Email</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="theme-text block text-sm font-medium"
                >Company</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  class="block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="phone" class="theme-text block text-sm font-medium"
                  >Phone</label
                >
                <span id="phone-description" class="text-xs text-gray-500"
                  >Optional</span
                >
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  aria-describedby="phone-description"
                  class="block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="how-can-we-help"
                  class="theme-text block text-sm font-medium"
                  >How can we help you?</label
                >
                <span
                  id="how-can-we-help-description"
                  class="text-sm text-gray-500"
                  >Max. 500 characters</span
                >
              </div>
              <div class="mt-1">
                <textarea
                  id="how-can-we-help"
                  name="how-can-we-help"
                  aria-describedby="how-can-we-help-description"
                  rows="4"
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                ></textarea>
              </div>
            </div>
            <fieldset class="sm:col-span-2">
              <legend class="theme-text block text-sm font-medium">
                Expected budget
              </legend>
              <div class="mt-4 grid grid-cols-1 gap-y-4">
                <div class="flex items-center">
                  <input
                    id="budget-under-10k"
                    name="budget"
                    value="under_10k"
                    type="radio"
                    class="text-gold-500 focus:ring-gold-500 h-4 w-4 border-gray-300"
                  />
                  <label for="budget-under-10k" class="ml-3">
                    <span class="theme-text block text-sm">Less than $10K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-10k-25k"
                    name="budget"
                    value="10k-25k"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500"
                  />
                  <label for="budget-10k-25k" class="ml-3">
                    <span class="theme-text block text-sm">$10K – $25K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-25k-50k"
                    name="budget"
                    value="25k-50k"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500"
                  />
                  <label for="budget-25k-50k" class="ml-3">
                    <span class="theme-text block text-sm">$25K – $50K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-50k-100k"
                    name="budget"
                    value="50k-100k"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500"
                  />
                  <label for="budget-50k-100k" class="ml-3">
                    <span class="theme-text block text-sm">$50K – $100K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-over-100k"
                    name="budget"
                    value="over_100k"
                    type="radio"
                    class="text-gold-500 h-4 w-4 border-gray-300 focus:ring-primary-500"
                  />
                  <label for="budget-over-100k" class="ml-3">
                    <span class="theme-text block text-sm">$100K+</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <div class="sm:col-span-2">
              <label
                for="how-did-you-hear-about-us"
                class="theme-text block text-sm font-medium"
                >How did you hear about us?</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="how-did-you-hear-about-us"
                  id="how-did-you-hear-about-us"
                  class="block w-full rounded-md border-gray-300 py-4 text-black shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="text-right sm:col-span-2">
              <button type="submit" class="btn1">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <ContactForm />
</template>
<script setup lang="ts">
import ContactForm from "~/components/ContactForm.vue";
import { useAppStore } from "~/store/appStore";
import NftSimpleSlider from "./section/NftSimpleSlider.vue";

const appStore = useAppStore();

definePageMeta({
  name: "contact",
});
</script>
