<template>
  <index-navbar />
  <section class="mt-24">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="mb-3">
                <h6 class="text-site-gray-1 text-sm font-bold">Sign up with</h6>
              </div>
              <div class="btn-wrapper">
                <h2 class="font-bold text-lg mb-5 text-site-gray-1">
                  Let's Set your account up
                </h2>
                <ol class="flex justify-center">
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class="flex z-10 justify-center items-center w-6 h-6 text-site-white-5 bg-site-green-4 rounded-full ring-0 ring-site-white-3 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                      >
                        <fa icon="circle-info"></fa>
                      </div>
                      <div
                        class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                      ></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3
                        class="text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Your Info
                      </h3>
                    </div>
                  </li>
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                      >
                        <fa icon="fingerprint"></fa>
                      </div>
                      <div
                        class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                      ></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3
                        class="text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Account Verification
                      </h3>
                    </div>
                  </li>
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                      >
                        <fa icon="lock"></fa>
                      </div>
                      <div
                        class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                      ></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3
                        class="text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Password Setup
                      </h3>
                    </div>
                  </li>
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                      >
                        <fa icon="circle-check"></fa>
                      </div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3
                        class="text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Done
                      </h3>
                    </div>
                  </li>
                </ol>
              </div>
              <hr class="mt-4 border-b-1 text-site-gray-1" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div class="relative w-full mb-3">
                  <label
                    class="block text-site-gray-1 text-xs font-bold mb-2"
                    htmlFor="national_id"
                  >
                    NATIONAL ID
                  </label>
                  <input
                    id="national_id"
                    type="text"
                    class="border-0 px-3 py-3 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Your National ID Number"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block text-site-gray-1 text-xs font-bold mb-2"
                    htmlFor="phone_number"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone_number"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="+2507..."
                  />
                </div>

                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      I agree with the
                      <a href="javascript:void(0)" class="text-site-green-3">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-site-gray-1 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <footer></footer> -->
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
// import Footer from "@/components/Footers/Footer.vue";

export default {
  name: "Index",
  components: {
    // Footer,
    IndexNavbar,
  },
};
</script>
