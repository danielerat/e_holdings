<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

      <header-stats />

      <div class="flex flex-wrap">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <table-latest-transaction />
        </div>
        <div class="w-full xl:w-4/12">
          <!-- Chart -->
          <div class="w-full">
            <div class="font-bold text-site-gray-1 indent-5 mb-3">
              <p>My Devices Under Warranty</p>
            </div>
            <div class="box-border my-2">
              <pieChart :data="chartData" :options="chartOptions" />
            </div>
          </div>
          <!-- Chart -->
          <table-device-overview />
        </div>
      </div>

      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import AdminNavbar from "@/components/Admin/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar/AdminSidebar.vue";
import HeaderStats from "@/components/Admin/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";

// Charts

import PieChart from "@/components/Admin/stats/PieChart.vue";

import TableLatestTransaction from "@/components/Admin/Cards/TableTransaction.vue";
import TableDeviceOverview from "@/components/Admin/Cards/TableOverview.vue";
import { chartData, chartOptions } from "@/utils/charts/PieDeviceWarranty.js";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
    TableLatestTransaction,
    TableDeviceOverview,
    PieChart,
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
      devices: (state) => state.devices,
      invoices: (state) => state.invoices,
    }),
  },
  mounted() {
    // get all the items
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("fetchAllDevices");
    this.$store.dispatch("fetchAllInvoices");
  },
  methods: {},
  data() {
    return {
      chartData: chartData,
      chartOptions: chartOptions,
    };
  },
};
</script>
