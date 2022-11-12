<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Id</th>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6 hidden md:inline-block">Model</th>
          <th scope="col" class="py-3 px-6">Sold To</th>
          <th scope="col" class="py-3 px-6">Date</th>
          <th scope="col" class="py-3 px-6">Price</th>
          <th scope="col" class="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="py-4 px-6 text-site-gray-1">
            #568
            <span class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1">
              <fa icon="laptop"></fa>
            </span>
          </td>
          <th
            scope="row"
            class="py-4 px-6 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold">Apple MacBook Pro 17"</li>
              <li>Computer</li>
            </ul>
          </th>
          <td class="py-4 px-6 hidden md:inline-block">
            <ul class="text-xs">
              <li>Model: MacBookPro18,3</li>
              <li>SN/IMEI: S14525MKGP3572</li>
            </ul>
          </td>
          <td class="py-4 px-6">
            <ul class="text-xs">
              <li class="text-site-gray-1 font-bold">Mumbere Carlos</li>
              <li class="my-1">+250783305114</li>
            </ul>
          </td>
          <td class="py-4 px-6">
            <span class="mt text-site-gray-2 px-2 rounded-full bg-site-white-4">
              July/22/2022
            </span>
            <p>
              <span
                class="mt text-site-yellow-2 px-2 rounded-full bg-site-yellow-5"
              >
                Expired Warranty
              </span>
            </p>
          </td>
          <td class="py-4 px-6">Frw 200,000</td>
          <td class="py-4 px-6 text-right">
            <ul class="flex justify-between text-site-green-5 text-md">
              <router-link to="/admin/invoice/single">
                <li class="hover:text-site-green-4"><fa icon="eye"></fa></li>
              </router-link>
              <li class="hover:text-site-green-4">
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
};
</script>
