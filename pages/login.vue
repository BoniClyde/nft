<template>
  <div class="flex min-h-full flex-1">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="">
          <AppLogo class="ml-44" />
          <h2 class="label mt-8 font-bold">Sign in to your Nifty Account</h2>
        </div>

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
                    class="leading-2 theme-text ml-3 text-xs"
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
    <div class="relative hidden flex-1 lg:block">
      <img
        class=""
        src="https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
