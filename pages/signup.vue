<template>
  <div>
    <div class="flex min-h-full flex-1">
      <div
        class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div class="">
            <AppLogo class="ml-44" />
            <h2 class="label mt-8 font-bold">
              Welcome to {{ appStore.appConfigData.short_name }} Marketplace
            </h2>
          </div>

          <div class="mt-5">
            <div>
              <div class="flex space-x-4">
                <div class="w-1/2">
                  <label for="firstName" class="label">First Name</label>
                  <div class="">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autocomplete="given-name"
                      required=""
                      class="block w-full rounded-md border-0 px-5 py-1.5 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-1/2">
                  <label for="lastName" class="label">Last Name</label>
                  <div class="">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autocomplete="family-name"
                      required=""
                      class="block w-full rounded-md border-0 px-5 py-1.5 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label for="email" class="label">Email address</label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="block w-full rounded-md border-0 px-5 py-1.5 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
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

              <div class="flex items-center">
                <input
                  id="terms-conditions"
                  name="terms-conditions"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label
                  for="terms-conditions"
                  class="leading-2 theme-text ml-3 mt-4 text-xs"
                  >By signing up, you agree to the Terms and Conditions and
                  Privacy Policy and to receive periodic updates.</label
                >
              </div>

              <div class="mt-10">
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-primary-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
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
                <button type="submit" class="btn2">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative hidden flex-1 lg:block">
        <img
          class="h-full w-full object-fill"
          src="https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/appStore";
const app_store = useStore("app_store");
</script>

<style lang="scss" scoped></style>
