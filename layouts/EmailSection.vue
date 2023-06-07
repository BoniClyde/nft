<template>
  <div class="mt-16 flex flex-col items-center py-12">
    <h1 class="text-center text-3xl font-bold">Never Miss a Drop!</h1>
    <p class="mt-4 text-center">
      Stay Connected. Discover Exclusive Drops. Embrace the World of NFTs. Never
      Miss a Single Opportunity.
    </p>
    <div class="mb-6 mt-8">
      <div>
        <FormKit
          type="email"
          validation="required|email|"
          placeholder="john@email.com"
          :classes="{
            input:
              'my-input text-secondary-800  w-full py-2 px-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent',
            help: {
              'text-red-200': true,
            },
            label: 'text-sm',
          }"
        />
        <!-- <label for="email" class="label">Email address</label>
                <div class=" ">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="my-input"
                  />
                </div> -->
        <div class="mt-5 flex place-content-center">
          <button class="btn1 w-full">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
/* Add Tailwind CSS utility classes here if needed */
</style>
