<template>
  <div class="mb-20 flex min-h-full flex-1 px-10">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="">
          <AppLogo class="ml-36" />
          <h2
            class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Sign in to your Nifty Account
          </h2>
        </div>

        <div class="mt-10">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="heading">Email address</label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label for="password" class="heading">Password</label>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                    class="leading-2 ml-3 mt-4 text-xs text-gray-700"
                    >By signing in, you agree to the Terms and Conditions and
                    Privacy Policy and to receive periodic updates.</label
                  >
                </div>

                <div class="leading text-xs">
                  <a
                    href="#"
                    class="font-semibold text-primary-500 hover:text-primary-900"
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

          <div class="mt-10">
            <div class="relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-200" />
              </div>
              <div
                class="relative flex justify-center text-sm font-medium leading-6"
              >
                <span class="bg-white px-6 text-gray-900">Or </span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-4">
              <button type="submit" class="btn2">Sign Up</button>
            </div>
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
