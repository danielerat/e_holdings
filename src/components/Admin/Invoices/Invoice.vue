<template>
  <div class="w-full justify-center my-2">
    <div class="flex w-2/4 mx-auto">
      <input
        type="search"
        class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <button
        class="btn inline-block px-6 py-2.5 bg-site-gray-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-site-gray-2 hover:shadow-lg focus:bg-site-gray-1 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-site-gray-1 active:shadow-lg transition duration-150 ease-in-out items-center"
        type="button"
        id="button-addon2"
      >
        <fa icon="search"></fa>
      </button>
    </div>
  </div>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <!-- Table Settings -->
    <ul class="flex justify-between border-b border-site-white-3">
      <li class="flex basis-2/5 border-b-2 hover:border-site-green-1">
        <a class="relative block p-4">
          <div class="flex items-center justify-center">
            <fa icon="filter" class="h-5 w-5 flex-shrink-0 text-gray-500" />
            &nbsp;
            <!-- Filter -->

            <div class="flex gap-8">
              <div class="relative">
                <details
                  class="group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    class="flex items-center gap-2 pb-1 text-site-gray-1 transition border-b border-gray-400 cursor-pointer hover:border-gray-600 dark:text-site-yellow-4"
                  >
                    <span class="text-sm font-medium">By Device</span>

                    <span class="transition group-open:-rotate-180">
                      <fa icon="sort-up" />
                    </span>
                  </summary>

                  <div
                    class="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div
                      class="bg-white border border-gray-200 rounded w-96 dark:bg-site-gray-2"
                    >
                      <header class="flex items-center justify-between p-4">
                        <span
                          class="text-sm text-site-gray-3 dark:text-site-yellow-4"
                        >
                          0 Selected
                        </span>

                        <button
                          type="button"
                          class="text-sm text-site-gray-2 underline underline-offset-4 dark:text-site-yellow-5"
                        >
                          Reset
                        </button>
                      </header>

                      <ul
                        class="p-4 space-y-1 border-t border-gray-200 dark:text-site-yellow-4"
                      >
                        <li>
                          <label
                            for="FilterInStock"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              class="w-5 h-5 border-gray-300 rounded"
                            />

                            <span class="text-sm font-medium">Phones</span>
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
                              class="w-5 h-5 border-gray-300 rounded"
                            />

                            <span class="text-sm font-medium">Computers</span>
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
                              class="w-5 h-5 border-gray-300 rounded"
                            />

                            <span class="text-sm font-medium">Others</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div class="relative">
                <details
                  class="group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
                  >
                    <span class="text-sm font-medium">By Price</span>

                    <span class="transition group-open:-rotate-180">
                      <fa icon="sort-up" />
                    </span>
                  </summary>

                  <div
                    class="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div class="bg-white border border-gray-200 rounded w-96">
                      <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700">
                          The highest price is $600
                        </span>

                        <button
                          type="button"
                          class="text-sm text-gray-900 underline underline-offset-4"
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
                  </div>
                </details>
              </div>
            </div>

            <!-- Filter -->
          </div>
        </a>
      </li>
      <li class="flex basis-1/5 border-b-2 hover:border-site-green-1">
        <a class="relative block p-4" @click="downloadInvoice">
          <div class="flex items-center justify-center">
            <fa
              icon="download"
              class="h-3 w-3 flex-shrink-0 text-gray-500"
            ></fa>

            <span class="ml-3 text-xs font-medium text-gray-900">
              Export CSV
            </span>
          </div>
        </a>
      </li>
    </ul>
    <!-- Filters -->
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-site-gray-1 uppercase bg-site-gray-5 dark:bg-site-yellow-3 dark:text-site-gray-1"
      >
        <tr>
          <th scope="col" class="py-3 px-1">Id</th>
          <th scope="col" class="py-3 px-1">Name</th>
          <th scope="col" class="py-3 px-1 hidden lg:table-cell">Model</th>
          <th scope="col" class="py-3 px-1">Sold To</th>
          <th scope="col" class="py-3 px-1 hidden md:table-cell">Date</th>
          <th scope="col" class="py-3 px-1 hidden lg:table-cell">Price</th>
          <th scope="col" class="py-3 px-1">Actions</th>
        </tr>
      </thead>
      <tbody v-if="invoices.length">
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(invoice, index) in invoices"
          :key="index"
        >
          <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
            <div class="flex">
              <span class="">#{{ index === 0 ? index + 1 : index + 1 }}</span>
              <span
                class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1"
              >
                <fa :icon="invoice.device.category"></fa>
              </span>
            </div>
          </td>
          <th
            scope="row"
            class="py-4 px-4 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold dark:text-site-white-5">
                {{ truncateString(invoice.device.name, 40) }}
              </li>
              <li>{{ invoice.device.category }}</li>
            </ul>
          </th>
          <td class="py-4 px-2 collapse hidden lg:table-cell">
            <ul class="text-xs">
              <li>Model: {{ invoice.device.device_model }}</li>
              <li>SN/IMEI: {{ invoice.device.mac_address }}</li>
            </ul>
          </td>
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                {{ invoice.soldTo }}
              </li>
              <li class="text-xs my-1">+250783305114</li>
            </ul>
          </td>
          <td class="text-xm py-4 px-2 hidden md:table-cell">
            <span class="text-site-gray-2 px-2 rounded-full bg-site-white-4">
              {{ formatDate(invoice.dateOfCreation) }}
            </span>
            <p>
              <span
                :class="
                  invoice.hasWarranty
                    ? 'mt text-site-black-2 px-2 rounded-full bg-site-green-5'
                    : 'mt text-site-yellow-2 px-2 rounded-full bg-site-yellow-5'
                "
              >
                Warranty
                <fa
                  :icon="invoice.hasWarranty ? 'check-circle' : 'xmark-circle'"
                  :class="
                    invoice.hasWarranty
                      ? 'text-site-black-5'
                      : 'text-site-yellow-1'
                  "
                />
              </span>
            </p>
          </td>
          <td class="py-4 px-2 hidden lg:table-cell">
            {{ formatPrice(invoice.device.price) }}
          </td>
          <td class="py-4 px-2 text-right">
            <ul class="flex justify-between text-site-green-5 text-md">
              <li class="hover:text-site-green-4">
                <fa icon="eye" @click="showInvoice"></fa>
              </li>
              <li class="hover:text-site-green-4" @click="downloadInvoice">
                <fa icon="download"></fa>
              </li>
            </ul>
          </td>
        </tr>
        <!-- -------------------- -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Invoice",

  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      invoices: (state) => state.accountInvoices,
    }),
  },
  created() {
    this.$store.dispatch("fetchInvoicesPerAccount");
    this.$store.dispatch("getCurrentUser");
  },
  methods: {
    downloadInvoice() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Document Generated, Download string in a few",
      });
    },
    showInvoice() {
      this.$swal.fire({
        imageUrl:
          "https://img.freepik.com/free-vector/consent-concept-illustration_114360-8739.jpg?w=740&t=st=1670101469~exp=1670102069~hmac=71707c4078b8cac7ed325721b0679863a16202cdb50f553712b401159849dcb4",
        imageHeight: 500,
        imageAlt: "A tall image",
      });
    },
    formatDate(d) {
      const date = new Date(d);
      let year = date.getFullYear();
      let day = date.getDate();
      let month = date.toLocaleString("default", { month: "short" });
      return month + " " + day + ", " + year;
    },
    formatPrice(price) {
      let formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "RWF",
      }).format(price);
      return formatted;
    },
    truncateString(str, n) {
      return str.length > n ? str.slice(0, n - 1) + `...` : str;
    },
  },
};
</script>
