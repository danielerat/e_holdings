<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-4">
      <admin-navbar path="Assign Device To a User" down="true" />

      <!-- Settings -->
      <div class="flex flex-wrap justify-center align-baseline">
        <invoice></invoice>
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

import Invoice from "@/components/Admin/Invoices/Invoice.vue";
export default {
  name: "AssignDevice",
  components: {
    Invoice,
    AdminNavbar,
    Sidebar,
    FooterAdmin,
  },
};
</script>
