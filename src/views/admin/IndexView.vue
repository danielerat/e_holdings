<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />
      <header-stats />
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
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
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
