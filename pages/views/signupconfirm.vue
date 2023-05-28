<template>
  <div class="flex min-h-full px-10">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <AppLogo class="ml-44" />
          <h2 class="label mt-8 font-bold">Welcome to Nifty Marketplace</h2>
        </div>
        <div class="mt-10">
          <div class="flex flex-col items-center">
            <div class="mb-4">
              <img src="confirmation_image.png" alt="Confirmation Image" />
            </div>
            <p class="text-center text-gray-700">
              A confirmation email has been sent to your registered email
              address. Please check your inbox and follow the instructions to
              complete your sign-up process.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative mt-9 hidden flex-1 lg:block">
      <NftCard
        name="MutantApeYachtClub #2691"
        src="nft/nft5.png"
        :price="0.05"
        :tokenId="2691"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
