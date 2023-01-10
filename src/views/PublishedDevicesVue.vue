<template>
  <index-navbar></index-navbar>

  <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

  <section>
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 dark:bg-site-gray-1"
    >
      <header>
        <h2
          class="text-xl font-bold text-gray-900 dark:text-site-green-3 sm:text-3xl"
        >
          Here Are some Devices Being Sold
        </h2>

        <p class="max-w-md mt-4 text-gray-500 dark:text-site-green-4">
          You can simply look up a device and contact a seller .....ou can
          simply look up a device and contact a selleou can simply look up a
          device and contact a selle
        </p>
      </header>

      <div class="block mt-8 lg:hidden">
        <button
          class="flex items-center gap-2 pb-1 text-gray-900 dark:text-site-green-3 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
        >
          <span class="text-sm font-medium">Filters & Sorting</span>

          <fa icon="angle-right" />
        </button>
      </div>

      <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <!-- FIlters  -->
        <div class="hidden space-y-4 lg:block">
          <div>
            <label
              for="SortBy"
              class="block text-xs font-medium text-gray-700 dark:text-site-yellow-4"
            >
              Sort By
            </label>

            <select
              id="SortBy"
              class="mt-1 text-sm border-gray-300 dark:bg-site-gray-2 dark:text-site-yellow-5 rounded"
            >
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>

          <div>
            <p
              class="block text-xs font-medium text-gray-700 dark:text-site-yellow-4"
            >
              Filters
            </p>

            <div class="mt-1 space-y-2">
              <details
                class="overflow-hidden rounded border border-gray-300 dark:bg-site-gray-2 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex items-center justify-between gap-2 p-4 text-gray-900 dark:text-site-yellow-5 transition cursor-pointer"
                >
                  <span class="text-sm font-medium">Type</span>

                  <span class="transition group-open:-rotate-180">
                    <fa icon="arrow-down" />
                  </span>
                </summary>

                <div class="bg-white border-t border-gray-200">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700">0 Selected</span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 dark:text-site-green-3 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul class="p-4 space-y-1 border-t border-gray-200">
                    <li>
                      <label
                        for="FilterInStock"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          class="w-5 h-5 border-gray-300 dark:bg-site-gray-2 rounded"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Mobile Phones
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterPreOrder"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          class="w-5 h-5 border-gray-300 dark:bg-site-gray-2 rounded"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Computers
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterOutOfStock"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          class="w-5 h-5 border-gray-300 dark:bg-site-gray-2 rounded"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Electronics
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>

              <details
                class="overflow-hidden rounded border border-gray-300 dark:bg-site-gray-2 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex items-center justify-between gap-2 p-4 text-gray-900 dark:text-site-yellow-5 transition cursor-pointer"
                >
                  <span class="text-sm font-medium">Price</span>

                  <span class="transition group-open:-rotate-180">
                    <fa icon="arrow-down" />
                  </span>
                </summary>

                <div class="bg-white border-t border-gray-200">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700">
                      Set the Minimum and maximum Price
                    </span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 dark:text-site-green-3 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <div class="p-4 border-t border-gray-200">
                    <div class="flex justify-between gap-4">
                      <label
                        for="FilterPriceFrom"
                        class="flex items-center gap-2"
                      >
                        <span class="text-sm text-gray-600">$</span>

                        <input
                          type="number"
                          id="FilterPriceFrom"
                          placeholder="From"
                          class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                      </label>

                      <label
                        for="FilterPriceTo"
                        class="flex items-center gap-2"
                      >
                        <span class="text-sm text-gray-600">$</span>

                        <input
                          type="number"
                          id="FilterPriceTo"
                          placeholder="To"
                          class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </details>

              <details
                class="overflow-hidden rounded border border-gray-300 dark:bg-site-gray-2 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex items-center justify-between gap-2 p-4 text-gray-900 dark:text-site-yellow-5 transition cursor-pointer"
                >
                  <span class="text-sm font-medium">City</span>

                  <span class="transition group-open:-rotate-180">
                    <fa icon="arrow-down" />
                  </span>
                </summary>

                <div class="bg-white border-t border-gray-200">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700">0 Selected</span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 dark:text-site-green-3 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul class="p-4 space-y-1 border-t border-gray-200">
                    <li>
                      <label
                        for="FilterGreen"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterGreen"
                          class="w-5 h-5 border-gray-300 dark:bg-site-gray-2 rounded"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Kigali
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterOrange"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOrange"
                          class="w-5 h-5 border-gray-300 dark:bg-site-gray-2 rounded"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Rubavu
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterPurple"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterPurple"
                          class="w-5 h-5 border-gray-300 dark:bg-site-gray-2 rounded"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Musanze
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
        <!-- Devices -->
        <div class="lg:col-span-3">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="device in devices" :key="device">
              <router-link
                :to="`/${$i18n.locale}/selling-devices/device`"
                class="block overflow-hidden group"
              >
                <img
                  :src="sampleImage"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative pt-3 bg-white">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    {{ device.name }}
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only">Selling Price</span>

                    <span
                      class="tracking-wider text-gray-900 dark:text-site-green-3"
                    >
                      Frw {{ device.price }}
                    </span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Pagination -->

        <!-- ------------------------------ -->
      </div>

      <div class="mt-10">
        <ol class="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            >
              <span class="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              1
            </a>
          </li>

          <li
            class="block h-8 w-8 rounded border-site-green-1 bg-site-green-2 text-center leading-8 text-white"
          >
            2
          </li>

          <li>
            <a
              href="#"
              class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            >
              <span class="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import sampleImage from "@/assets/img/mac.png";
export default {
  name: "ContactView",
  components: {
    MainFooter,
    IndexNavbar,
  },
  data() {
    return {
      sampleImage,
      devices: {
        one: {
          name: "Iphone 6 plus",
          category: "phone",
          date: "January 1",
          owner: "James Harden",
          city: "kigali",
          price: "300,000",
        },
        two: {
          name: "Lenovo Johnson",
          category: "computer",
          date: "January 1",
          owner: "James Harden",
          city: "Gisenyi",
          price: "300,000",
        },
        three: {
          name: "Smart Iron",
          category: "electronic",
          date: "January 1",
          owner: "James Harden",
          city: "kigali",
          price: "300,000",
        },
        four: {
          name: "Smart Iron",
          category: "electronic",
          date: "January 1",
          owner: "James Harden",
          city: "kigali",
          price: "300,000",
        },
        five: {
          name: "Smart Iron",
          category: "electronic",
          date: "January 1",
          owner: "James Harden",
          city: "kigali",
          price: "300,000",
        },
      },
    };
  },
};
</script>
