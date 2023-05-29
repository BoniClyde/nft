<template>
  <div class="mb-20 flex min-h-full flex-1 px-10">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="">
          <AppLogo class="ml-44" />
          <h2 class="label mt-8 font-bold">Sign in to your Nifty Account</h2>
        </div>
        <!-- <span class="relative whitespace-nowrap text-blue-600">
          <svg
            width="374"
            height="130"
            viewBox="0 0 374 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.7918 1.7146C66.1939 2.85892 52.5625 20.8248 40.0963 34.6761C36.0375 39.1858 32.922 42.5946 29.1091 46.8841C24.7722 51.7631 27.9449 58.1057 24.2259 62.7545C20.1347 67.8685 23.6155 88.4373 23.6155 95.1057C23.6155 111.033 25.5485 109.442 37.9599 117.08C62.2199 132.009 105.424 119.602 132.877 124.71C158.076 129.398 188.609 128.067 214.06 128.067C240.452 128.067 266.631 128.725 292.649 125.473C310.305 123.266 372.459 117.022 372.459 90.9855C372.459 54.1832 301.394 56.6505 275.71 56.6505C215.44 56.6505 154.362 60.8091 95.3374 49.9361C79.9547 47.1025 59.3895 45.6633 44.2164 45.6633C35.3536 45.6633 31.3783 37.8887 23.7681 33.6079C16.8367 29.709 9.33735 29.1826 1.64111 29.1826"
              stroke="#D09D18"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <span class="relative">made simple</span></span> -->
        <div class="mt-5">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="label">Email address</label>
                <div class="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="block w-full rounded-md border-0 px-5 py-1.5 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label for="password" class="label">Password</label>
                <div class="relative flex items-center">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    class="block w-full rounded-md border-0 px-5 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div class="absolute inset-y-0 right-0 flex py-2 pr-1.5">
                    <i class="fa-solid fa-eye-slash"></i>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="terms-conditions"
                    name="terms-conditions"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label
                    for="terms-conditions"
                    class="leading-2 theme-text ml-3  text-xs"
                    >i agree to terms and condition</label
                  >
                </div>

                <div class="leading text-xs">
                  <a href="#" class="theme-text hover:text-primary-900"
                    >Forgot password?</a
                  >
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div class="mt-2">
            <div class="mt-6 grid grid-cols-1 gap-4">
              <button type="submit" class="btn2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative mt-9 hidden flex-1 lg:block">
      <NftCard
        name="MutantApeYachtClub"
        src="nft/nft5.png"
        :price="0.05"
        :tokenId="2691"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
