<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-emerald-600 bg-white': openTab !== 1,
              'text-white bg-emerald-600': openTab === 1,
            }"
          >
            <fa icon="spinner" />
            Pending Devices
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-emerald-600 bg-white': openTab !== 2,
              'text-white bg-emerald-600': openTab === 2,
            }"
          >
            <fa icon="file-contract" />
            Proof of ownsership
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'text-emerald-600 bg-white': openTab !== 3,
              'text-white bg-emerald-600': openTab === 3,
            }"
          >
            <fa icon="circle-info" />
            Reported Devices
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="px-1 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <!-- Pending devices table -->
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    Pending devices
                  </h3>
                </div>
                <div
                  class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                >
                  <action-button
                    type="tertiary"
                    text="btn.seeAll"
                  ></action-button>
                </div>
              </div>
              <incoming-device
                v-for="(device, cnt) in devices"
                :key="device"
                :name="device.name"
                :type="device.type"
                :date="device.date"
                :model="device.model"
                :pos="cnt % 2 == 1"
              ></incoming-device>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <owned-device-proof />
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <!-- Proof of my devices belonging to me! -->
              <reported-device />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import IncomingDevice from "@/components/Admin/Cards/IncomingDevice.vue";
import ReportedDevice from "@/components/Admin/ReportedDevices.vue";
import OwnedDeviceProof from "@/components/Admin/OwnedDeviceProof.vue";
export default {
  name: "TableDeviceOverview",
  components: {
    ReportedDevice,
    OwnedDeviceProof,
    IncomingDevice,
    ActionButton,
  },
  data() {
    return {
      openTab: 1,
      devices: {
        1: {
          type: "computer",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
        2: {
          type: "phone",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
        3: {
          type: "electronic",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
      },
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
