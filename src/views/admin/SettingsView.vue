<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64">
      <admin-navbar path="Account Settings" down="true" />

      <!-- Settings -->
      <div class="flex flex-wrap align-baseline">
        <div class="w-full xl:w-8/12 px-4">
          <card-settings />
        </div>
        <div class="w-full xl:w-4/12 px-4 xl:mt-0 mt-20">
          <card-profile />
        </div>
      </div>
      <!-- ---- -->
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Admin/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar/AdminSidebar.vue";
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";

import CardSettings from "@/components/Admin/CardSettings.vue";
import CardProfile from "@/components/Admin/CardProfile.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    CardSettings,
    CardProfile,
  },
};
</script>
