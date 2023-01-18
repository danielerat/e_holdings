<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

      <header-stats />

      <div class="flex flex-wrap">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 -mt-7 z-10">
          <div class="box-border">
            <div
              class="font-bold text-site-gray-1 indent-5 mb-3 dark:text-site-yellow-4"
            >
              <p>Sold Device By Category</p>
            </div>
            <div class="h-64 my-4">
              <bar-chart :data="BarData" :options="BarOptions" />
            </div>
          </div>
          <table-latest-transaction />
        </div>
        <div class="w-full xl:w-4/12 -mt-7 z-10">
          <!-- Chart -->
          <div class="w-full">
            <div
              class="font-bold text-site-gray-1 indent-5 mb-3 dark:text-site-yellow-4"
            >
              <p>My Devices Under Warranty</p>
            </div>
            <div class="box-border my-2">
              <pieChart :data="pieData" :options="pieOptions" />
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
import BarChart from "@/components/Admin/stats/BarChart.vue";

import TableLatestTransaction from "@/components/Admin/TableTransaction.vue";
import TableDeviceOverview from "@/components/Admin/TableOverview.vue";

// Charts
// Bar Charts
import {
  chartData as BarData,
  chartOptions as BarOptions,
} from "@/utils/charts/BarSoldCategoryDevices.js";
// Pie Chart
import {
  chartData as pieData,
  chartOptions as pieOptions,
} from "@/utils/charts/PieDeviceWarranty.js";
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
    BarChart,
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
      pieData,
      pieOptions,
      BarData,
      BarOptions,
    };
  },
};
</script>
