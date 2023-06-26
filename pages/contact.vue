<template>
  <div class="grid bg-gray-900 py-2 lg:grid-cols-2">
    <div class="bg-gray-900 px-20 py-24 text-justify">
      <h1 class="pb-1 text-4xl">Reach out to Us.</h1>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        At {{ appStore.appConfigData.company_name }}, we know what it’s like to
        trade. With the scale of a global fintech and the agility of a start-up,
        we’re here to arm you with everything you need to take on the global
        markets with confidence.
      </p>
    </div>
  </div>
  <div class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
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
            class="text-gold-500 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Let's work together
          </h2>
          <p class="mt-4 text-lg text-gray-500 sm:mt-3">
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
                class="block text-sm font-medium text-gray-700"
                >First name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
                >Last name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block text-sm font-medium text-gray-700"
                >Company</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone</label
                >
                <span id="phone-description" class="text-sm text-gray-500"
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
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="how-can-we-help"
                  class="block text-sm font-medium text-gray-700"
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
                />
              </div>
            </div>
            <fieldset class="sm:col-span-2">
              <legend class="block text-sm font-medium text-gray-700">
                Expected budget
              </legend>
              <div class="mt-4 grid grid-cols-1 gap-y-4">
                <div class="flex items-center">
                  <input
                    id="budget-under-25k"
                    name="budget"
                    value="under_25k"
                    type="radio"
                    class="text-gold-500 focus:ring-gold-500 h-4 w-4 border-gray-300"
                  />
                  <label for="budget-under-25k" class="ml-3">
                    <span class="block text-sm text-gray-700"
                      >Less than $25K</span
                    >
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-25k-50k"
                    name="budget"
                    value="25k-50k"
                    type="radio"
                    class="text-gold-500 focus:ring-gold-500 h-4 w-4 border-gray-300"
                  />
                  <label for="budget-25k-50k" class="ml-3">
                    <span class="block text-sm text-gray-700">$25K – $50K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-50k-100k"
                    name="budget"
                    value="50k-100k"
                    type="radio"
                    class="text-gold-500 focus:ring-gold-500 h-4 w-4 border-gray-300"
                  />
                  <label for="budget-50k-100k" class="ml-3">
                    <span class="block text-sm text-gray-700"
                      >$50K – $100K</span
                    >
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="budget-over-100k"
                    name="budget"
                    value="over_100k"
                    type="radio"
                    class="text-gold-500 focus:ring-gold-500 h-4 w-4 border-gray-300"
                  />
                  <label for="budget-over-100k" class="ml-3">
                    <span class="block text-sm text-gray-700">$100K+</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <div class="sm:col-span-2">
              <label
                for="how-did-you-hear-about-us"
                class="block text-sm font-medium text-gray-700"
                >How did you hear about us?</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="how-did-you-hear-about-us"
                  id="how-did-you-hear-about-us"
                  class="focus:border-gold-500 focus:ring-gold-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div class="text-right sm:col-span-2">
              <button
                type="submit"
                class="border-transparent bg-gold-500 focus:ring-gold-500 inline-flex justify-center rounded-full border px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Submit
              </button>
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

const appStore = useAppStore();

definePageMeta({
  name: "contact",
});
</script>
