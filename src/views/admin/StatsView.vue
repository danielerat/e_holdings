<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

      <header-stats />

      <div class="flex flex-wrap -mt-6">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <BarChart />
        </div>
        <div class="w-full xl:w-6/12">
          <doughnut />
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

export default {
  name: "admin-layout",

  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
    BarChart,
    Doughnut,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
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
