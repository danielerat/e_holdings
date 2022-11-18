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
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
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
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
            <div class="flex">
              <span class="">#568</span>
              <span
                class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1"
              >
                <fa icon="laptop"></fa>
              </span>
            </div>
          </td>
          <th
            scope="row"
            class="py-4 px-4 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold dark:text-site-white-5">
                Apple MacBook Pro 17"
              </li>
              <li>Computer</li>
            </ul>
          </th>
          <td class="py-4 px-2 collapse hidden lg:table-cell">
            <ul class="text-xs">
              <li>Model: MacBookPro18,3</li>
              <li>SN/IMEI: S14525MKGP3572</li>
            </ul>
          </td>
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                Mumbere Carlos
              </li>
              <li class="text-xs my-1">+250783305114</li>
            </ul>
          </td>
          <td class="text-xm py-4 px-2 hidden md:table-cell">
            <span class="text-site-gray-2 px-2 rounded-full bg-site-white-4">
              July/22/2022
            </span>
            <p>
              <span
                class="mt text-site-yellow-2 px-2 rounded-full bg-site-yellow-5"
              >
                Warranty
                <fa icon="times" class="text-site-yellow-1" />
              </span>
            </p>
          </td>
          <td class="py-4 px-2 hidden lg:table-cell">Frw 200,000</td>
          <td class="py-4 px-2 text-right">
            <ul class="flex justify-between text-site-green-5 text-md">
              <li class="hover:text-site-green-4">
                <fa icon="eye"></fa>
              </li>
              <li class="hover:text-site-green-4" @click="donloadInvoice">
                <fa icon="download"></fa>
              </li>
            </ul>
          </td>
        </tr>
        <!-- -------------------- -->
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
            <div class="flex">
              <span class="">#568</span>
              <span
                class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1"
              >
                <fa icon="laptop"></fa>
              </span>
            </div>
          </td>
          <th
            scope="row"
            class="py-4 px-4 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold dark:text-site-white-5">
                Apple MacBook Pro 17"
              </li>
              <li>Computer</li>
            </ul>
          </th>
          <td class="py-4 px-2 collapse hidden lg:table-cell">
            <ul class="text-xs">
              <li>Model: MacBookPro18,3</li>
              <li>SN/IMEI: S14525MKGP3572</li>
            </ul>
          </td>
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                Mumbere Carlos
              </li>
              <li class="text-xs my-1">+250783305114</li>
            </ul>
          </td>
          <td class="text-xm py-4 px-2 hidden md:table-cell">
            <span class="text-site-gray-2 px-2 rounded-full bg-site-white-4">
              July/22/2022
            </span>
            <p>
              <span
                class="mt text-site-yellow-2 px-2 rounded-full bg-site-yellow-5"
              >
                Warranty
                <fa icon="times" class="text-site-yellow-1" />
              </span>
            </p>
          </td>
          <td class="py-4 px-2 hidden lg:table-cell">Frw 200,000</td>
          <td class="py-4 px-2 text-right">
            <ul class="flex justify-between text-site-green-5 text-md">
              <li class="hover:text-site-green-4">
                <fa icon="eye"></fa>
              </li>
              <li class="hover:text-site-green-4" @click="donloadInvoice">
                <fa icon="download"></fa>
              </li>
            </ul>
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
            <div class="flex">
              <span class="">#568</span>
              <span
                class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1"
              >
                <fa icon="mobile-button"></fa>
              </span>
            </div>
          </td>
          <th
            scope="row"
            class="py-4 px-4 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold dark:text-site-white-5">
                Apple MacBook Pro 17"
              </li>
              <li>Computer</li>
            </ul>
          </th>
          <td class="py-4 px-2 collapse hidden lg:table-cell">
            <ul class="text-xs">
              <li>Model: MacBookPro18,3</li>
              <li>SN/IMEI: S14525MKGP3572</li>
            </ul>
          </td>
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                Mumbere Carlos
              </li>
              <li class="text-xs my-1">+250783305114</li>
            </ul>
          </td>
          <td class="text-xm py-4 px-2 hidden md:table-cell">
            <span class="text-site-gray-2 px-2 rounded-full bg-site-white-4">
              July/22/2022
            </span>
            <p>
              <span
                class="mt text-site-green-2 px-2 rounded-full bg-site-green-5"
              >
                Warranty
                <fa icon="check" class="text-site-green-1" />
              </span>
            </p>
          </td>
          <td class="py-4 px-2 hidden lg:table-cell">Frw 200,000</td>
          <td class="py-4 px-2 text-right">
            <ul class="flex justify-between text-site-green-5 text-md">
              <li class="hover:text-site-green-4">
                <fa icon="eye"></fa>
              </li>
              <li class="hover:text-site-green-4" @click="donloadInvoice">
                <fa icon="download"></fa>
              </li>
            </ul>
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
            <div class="flex">
              <span class="">#568</span>
              <span
                class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1"
              >
                <fa icon="plug"></fa>
              </span>
            </div>
          </td>
          <th
            scope="row"
            class="py-4 px-4 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold dark:text-site-white-5">
                Apple MacBook Pro 17"
              </li>
              <li>Computer</li>
            </ul>
          </th>
          <td class="py-4 px-2 collapse hidden lg:table-cell">
            <ul class="text-xs">
              <li>Model: MacBookPro18,3</li>
              <li>SN/IMEI: S14525MKGP3572</li>
            </ul>
          </td>
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                Mumbere Carlos
              </li>
              <li class="text-xs my-1">+250783305114</li>
            </ul>
          </td>
          <td class="text-xm py-4 px-2 hidden md:table-cell">
            <span class="text-site-gray-2 px-2 rounded-full bg-site-white-4">
              July/22/2022
            </span>
            <p>
              <span
                class="mt text-site-yellow-2 px-2 rounded-full bg-site-yellow-5"
              >
                Warranty
                <fa icon="times" class="text-site-yellow-1" />
              </span>
            </p>
          </td>
          <td class="py-4 px-2 hidden lg:table-cell">Frw 200,000</td>
          <td class="py-4 px-2 text-right">
            <ul class="flex justify-between text-site-green-5 text-md">
              <li class="hover:text-site-green-4">
                <fa icon="eye"></fa>
              </li>
              <li class="hover:text-site-green-4" @click="donloadInvoice">
                <fa icon="download"></fa>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Invoice",
  methods: {
    donloadInvoice() {
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
  },
};
</script>
