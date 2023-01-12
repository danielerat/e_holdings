<template>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-blueGray-700">
          My Proof Of ownership
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <button
          class="bg-site-green-2 text-white active:bg-site-green-2 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          See all
        </button>
      </div>
    </div>
  </div>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-site-gray-1 uppercase bg-site-yellow-3 dark:bg-site-yellow-3 dark:text-site-gray-1"
    >
      <tr>
        <th scope="col" class="py-3 px-1">Id</th>
        <th scope="col" class="py-3 px-1">Name</th>
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
            <span class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1">
              <fa icon="laptop"></fa>
            </span>
          </div>
        </td>
        <th
          scope="row"
          class="py-4 px-4 font-light whitespace-nowrap dark:text-white"
        >
          <ul>
            <li class="text-site-gray-1 font-bold dark:text-site-white-5">
              Apple MacBook Pro 17"
            </li>
            <li>
              <p>Model: MacBookPro18,3</p>
              <p>SN/IMEI: S14525MKGP3572</p>
            </li>
          </ul>
        </th>

        <td class="py-4 px-2 text-right">
          <ul class="flex justify-between text-site-yellow-3 text-xl">
            <li class="hover:text-site-yellow-4">
              <popover
                title="View Proof"
                text="View a proof that proves this device belongs to me."
              >
                <fa icon="eye"></fa>
              </popover>
            </li>
            <li class="hover:text-site-yellow-4">
              <popover
                title="Download a proof"
                text="Download a Written proof, that shows that this device belongs to me."
              >
                <fa icon="download"></fa>
              </popover>
            </li>
            <li class="hover:text-site-yellow-4">
              <popover
                title="Transfer The ownership"
                text="Did you sell of give the item away? transfer the ownership now."
              >
                <fa icon="share"></fa>
              </popover>
            </li>
            <li class="hover:text-site-yellow-4">
              <popover
                title="Report lost or Stolen"
                text="Did you lose this device? report it as lost."
              >
                <fa icon="circle-info"></fa>
              </popover>
            </li>
          </ul>
        </td>
      </tr>
      <!-- -------------------- -->
    </tbody>
  </table>
</template>

<script>
import Popover from "@/components/shared/popover.vue";
export default {
  name: "ProofOfOwnserhip",
  components: {
    Popover,
  },
};
</script>

<style></style>
