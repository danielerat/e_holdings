<template>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-blueGray-700">
          Devices Reported Lost
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <action-button type="tertiary" text="btn.seeAll"></action-button>
      </div>
    </div>
  </div>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-site-gray-1 uppercase bg-site-green-5 dark:bg-site-yellow-3 dark:text-site-gray-1"
    >
      <tr>
        <th scope="col" class="py-3 px-1">Id</th>
        <th scope="col" class="py-3 px-1">Name</th>
        <th scope="col" class="py-3 px-1 hidden lg:table-cell">Model</th>

        <th scope="col" class="py-3 px-1">Actions</th>
      </tr>
    </thead>
    <tbody v-if="lostDevices.length !== 0">
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        v-for="(device, index) in lostDevices"
        :key="index"
      >
        <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
          <div class="flex">
            <span class="">#{{ index === 0 ? index + 1 : index + 1 }}</span>
            <span class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1">
              <fa :icon="device.category"></fa>
            </span>
          </div>
        </td>
        <th
          scope="row"
          class="py-4 px-4 font-light whitespace-nowrap dark:text-white"
        >
          <ul>
            <li class="text-site-gray-1 font-bold dark:text-site-white-5">
              {{ device.name }}
            </li>
            <li>
              <p>Owner:{{ device.owner.name }}</p>
              <p>{{ device.owner.phone }}</p>
            </li>
          </ul>
        </th>
        <td class="py-4 px-2 collapse hidden lg:table-cell">
          <ul class="text-xs">
            <li>Model: {{ device.device_model }}</li>
            <li>SN/IMEI: {{ device.mac_address }}</li>
          </ul>
        </td>

        <td class="py-4 px-2 text-right">
          <ul class="flex justify-between text-site-green-5 text-xl">
            <li class="hover:text-site-green-4">
              <popover
                title="Alert The authorities"
                text="Were you in contact with this device? let the authorities know."
              >
                <fa icon="eye"></fa>
              </popover>
            </li>
            <li class="hover:text-site-green-4">
              <popover
                title="Message the owner"
                text="Send a whatsapp message to the owner"
              >
                <fa :icon="['fab', 'whatsapp']" />
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
import { mapState } from "vuex";
import ActionButton from "@/components/shared/ActionButton.vue";
import Popover from "@/components/shared/popover.vue";
export default {
  name: "ReportedDevice",
  components: {
    Popover,
    ActionButton,
  },
  computed: {
    ...mapState({
      lostDevices: (state) => state.lostDevices,
    }),
  },
  created() {
    this.$store.dispatch("fetchLostDevices");
  },
};
</script>

<style></style>
