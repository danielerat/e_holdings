<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="List of all Invoices " down="medium" />
      <!-- Card Devices -->
      <div class="flex justify-around flex-wrap mb-6">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Devices"
            :statTitle="devices.length"
            :statArrow="devices.length !== 0 ? 'up' : 'down'"
            statPercent="0.4"
            :statPercentColor="
              devices.length !== 0 ? 'text-emerald-500' : 'text-red-500'
            "
            statDescripiron="This week"
            statIconName="chart-bar"
            statIconColor="bg-site-yellow-1"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Invoices"
            :statTitle="invoices.length"
            :statArrow="invoices.length !== 0 ? 'up' : 'down'"
            statPercent="0.48"
            :statPercentColor="
              invoices.length !== 0 ? 'text-emerald-500' : 'text-red-500'
            "
            statDescripiron="Since last week"
            statIconName="chart-pie"
            statIconColor="bg-site-gray-2"
          />
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Declared Lost"
            :statTitle="lost.length"
            :statArrow="lost.length !== 0 ? 'up' : 'down'"
            statPercent="1"
            :statPercentColor="
              lost.length !== 0 ? 'text-emerald-500' : 'text-orange-500'
            "
            statDescripiron="Yesterday"
            statIconName="users"
            statIconColor="bg-site-yellow-2"
          />
        </div>
        <div class="self-center w-full lg:w-6/12 xl:w-3/12 px-4">
          <router-link
            :to="`/${$i18n.locale}/admin/devices/pending`"
            class="cursor-pointer group flex items-center basis-2/5 justify-between rounded-lg border border-current px-5 py-3 text-site-green-2 transition-colors hover:bg-site-green-1 focus:outline-none focus:ring active:bg-site-green-3"
          >
            <span class="font-medium transition-colors group-hover:text-white">
              My Pending Device
            </span>

            <span
              class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-site-green-2 group-active:text-site-green-1"
            >
              <fa icon="arrow-right" class="h-5 w-6" />
            </span>
          </router-link>
        </div>
      </div>

      <!-- Devices -->
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
            class="btn inline-block px-6 py-2.5 bg-site-gray-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-site-gray-2 hover:shadow-lg focus:bg-site-gray-1 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-site-gray-1 active:shadow-lg transition duration-150 ease-in-out items-center dark:bg-site-yellow-3"
            type="button"
            id="button-addon2"
          >
            <fa icon="search"></fa>
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-around flex-wrap">
        <device-card
          v-for="(device, index) in devices"
          :key="index"
          :device="device"
          class="basis-1/4"
          :name="device.name"
          :model="device.device_model"
          :imei="device.mac_address"
          :date="formatDate(device.date_of_creation)"
          :status="device.availability"
          :type="device.category"
          :text="device.desc"
        />
      </div>
      <!-- ---- -->
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import AdminNavbar from "@/components/Admin/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar/AdminSidebar.vue";
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";
import CardStats from "@/components/Cards/CardStats.vue";
import DeviceCard from "@/components/Admin/Cards/DeviceCard.vue";

export default {
  name: "AssignDevice",
  components: {
    DeviceCard,
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    CardStats,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      devices: (state) => state.accountDevices,
      invoices: (state) => state.accountInvoices,
      lost: (state) => state.lostDevices,
    }),
  },
  created() {
    this.$store.dispatch("fetchDevicesPerAccount");
    this.$store.dispatch("fetchInvoices");
    this.$store.dispatch("fetchLostDevices");
  },
  methods: {
    formatDate(d) {
      const date = new Date(d);
      let year = date.getFullYear();
      let day = date.getDate();
      let month = date.toLocaleString("default", { month: "short" });
      return month + " " + day + ", " + year;
    },
  },
};
</script>
