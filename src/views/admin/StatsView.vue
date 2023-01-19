<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

      <header-stats />

      <div
        class="flex flex-col md:flex-row justify-around flex-nowrap text-site-gray-1 dark:text-site-yellow-4"
      >
        <div class="md:basis-3/5 border">
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>My Devices Stats</p>
            </div>
            <div class="h-60">
              <line-chart :data="LineData" :options="LineOptions" />
            </div>
          </div>
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>My Devices Stats</p>
            </div>
            <div class="h-60">
              <BarChart :data="BarData" :options="BarOptions" />
            </div>
          </div>
        </div>
        <div class="md:basis-2/5 border">
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>Stolen Devices Per Area</p>
            </div>
            <div class="w-3/4 mx-auto">
              <doughnut :data="DoughnutData" :options="DoughnutOptions" />
            </div>
          </div>
          <!--  -->
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>Stolen Devices Per Category</p>
            </div>
            <div class="">
              <pieChart :data="pieData" :options="PieOptions" />
            </div>
          </div>
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

import BarChart from "@/components/Admin/stats/BarChart";
import Doughnut from "@/components/Admin/stats/Doughnut.vue";
import PieChart from "@/components/Admin/stats/PieChart.vue";
import LineChart from "@/components/Admin/stats/LineChart.vue";

// Chart Data
// Bar Charts
import {
  chartData as BarData,
  chartOptions as BarOptions,
} from "@/utils/charts/BarSoldCategoryDevices.js";
// Pie Chart
import {
  chartData as pieData,
  chartOptions as PieOptions,
} from "@/utils/charts/DoughnutStolenPerArea.js";
// Doughtnut Chart
import {
  chartData as DoughnutData,
  chartOptions as DoughnutOptions,
} from "@/utils/charts/DoughnutStolenPerArea.js";

// Line Chart
import {
  chartData as LineData,
  chartOptions as LineOptions,
} from "@/utils/charts/LineDevicesSale.js";

export default {
  name: "admin-layout",

  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
    BarChart,
    Doughnut,
    PieChart,
    LineChart,
  },
  data() {
    return {
      //   Bar Data
      BarData,
      BarOptions,

      // Pie Data
      pieData,
      PieOptions,
      //   Doughnut Data
      DoughnutData,
      DoughnutOptions,
      //   Line Chart
      LineData,
      LineOptions,
    };
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
};
</script>
