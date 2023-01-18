<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-2 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="basis-2/3 relative w-full max-w-full flex-grow flex-1">
          <p class="font-semibold text-site-gray-2">Devices Under warranty</p>
        </div>
        <div
          class="basis-1/3 relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <action-button type="tertiary" text="btn.seeAll"></action-button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead class="thead-light">
          <tr>
            <th
              class="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Device Name
            </th>
            <th
              class="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Ending Date
            </th>
            <th
              class="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="text border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
            >
              <p>Iphone 6 Plus GOld</p>
              <p class="text-xs font-bold">To:Ilunga Gisa Daniel</p>
            </th>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <span class="font-bold">Ending: December-25-2021</span>

              <progress-bar percent="60"></progress-bar>
            </td>
          </tr>
          <tr>
            <th
              class="text border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
            >
              <p>Smark Iron</p>
              <p class="text-xs font-bold">To:Carl junk</p>
            </th>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <span class="font-bold">Ending: December-25-2021</span>
              <progress-bar color="yellow" percent="20"></progress-bar>
            </td>
          </tr>

          <tr>
            <th
              class="text border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
            >
              <p>MacBook Air 32</p>
              <p class="text-xs font-bold">To:Ilunga Gisa Daniel</p>
            </th>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <span class="font-bold">Ending: December-25-2021</span>
              <progress-bar color="gray" percent="20"></progress-bar>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProgressBar from "@/components/shared/progress.vue";
export default {
  name: "TableDeviceOverview",
  components: {
    ProgressBar,
    ActionButton,
  },
};
</script>
