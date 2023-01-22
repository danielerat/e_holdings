<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Device Self Registration" down="small" />

      <!-- Settings -->
      <div class="flex flex-wrap mx-auto align-baseline max-w-3xl p-6">
        <add-device-form></add-device-form>
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

import AddDeviceForm from "@/components/Admin/AddDeviceForm.vue";
export default {
  name: "AssignDevice",
  components: {
    AddDeviceForm,
    AdminNavbar,
    Sidebar,
    FooterAdmin,
  },
};
</script>
