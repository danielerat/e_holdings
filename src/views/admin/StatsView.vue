<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

      <header-stats />

      <div class="flex justify-around flex-wrap">
        <div class="basis-2/5 border box-border">
          <div class="box-border">
            <BarChart :data="BarData" :options="BarOptions" />
          </div>
          <div class="w-full">
            <div class="text-xl font-bold text-site-gray-1 indent-5 mb-3">
              <p>Stolen Devices Per Area</p>
            </div>
            <div class="box-border">
              <pieChart :data="pieData" :options="PieOptions" />
            </div>
          </div>
        </div>
        <div class="basis-2/5 border box-border">
          <div class="w-full">
            <div class="text-xl font-bold text-site-gray-1 indent-5 mb-3">
              <p>Stolen Devices Per Area</p>
            </div>
            <div class="w-3/4 mx-auto">
              <doughnut :data="DoughnutData" :options="DoughnutOptions" />
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
// Doughtnut
import {
  chartData as DoughnutData,
  chartOptions as DoughnutOptions,
} from "@/utils/charts/DoughnutStolenPerArea.js";

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
