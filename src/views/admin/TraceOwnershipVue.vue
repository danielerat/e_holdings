<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar
        path="Trace the a device path from it's origins up to now"
        down="medium"
      />
      <section class="lithopedion">
        <safety-check-timeline></safety-check-timeline>
      </section>
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
import SafetyCheckTimeline from "@/components/shared/SafetyCheckTimeline.vue";
export default {
  name: "AssignDevice",
  components: {
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    SafetyCheckTimeline,
  },
};
</script>

<style scoped>
.lithopedion {
  background: #fff url("@/assets/img/waveyellowgreen.svg") top no-repeat;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
