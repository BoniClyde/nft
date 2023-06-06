<template>
  <div class="rounded-lg lg:mb-10">
    <div class="relative isolate overflow-hidden">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-y-8 space-y-8 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10 lg:pt-0"
      >
        <div class="px-6 lg:px-0 lg:pt-4">
          <div>
            <div
              class="mb-4 space-y-2 text-center text-3xl font-semibold lg:text-left lg:text-5xl"
            >
              <h1 class="">Sell, Buy, discover</h1>
              <h1>and collect NFT arts</h1>
            </div>

            <p
              class="text-primary-500 dark:text-primary-400 py-4 text-center font-semibold tracking-wider underline lg:text-left"
            >
              Find it, Buy it, Flip it
            </p>
            <div class="mb-4 flex justify-center gap-x-2 lg:justify-start">
              <PrimaryButton label="Create Art" class="btn1" />
              <div class="w-2 py-2 lg:block"></div>
              <!-- <PrimaryButton label="Marketplace" class="btn2" /> -->
              <a
                href="#"
                class="hover:text-primary-200 rounded-md px-2 text-sm font-semibold leading-10"
                >Marketplace<span aria-hidden="  true"> →</span></a
              >
            </div>
          </div>
        </div>
        <div class="justify-end lg:flex">
          <img
            class="h-full w-full rounded-md object-cover"
            src="https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY="
            alt=""
          />
          <!-- <ImageSection /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
