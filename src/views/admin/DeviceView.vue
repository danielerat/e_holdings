<template>
  <div>
    <sidebar />
    <div
      class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1 lithopedion"
    >
      <admin-navbar path="My Device " down="true" />

      <!-- Settpings -->
      <single-device :timeline="timeline" />
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
import SingleDevice from "@/components/Admin/SingleDevice.vue";

export default {
  name: "AssignDevice",
  components: {
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    SingleDevice,
  },
  data() {
    return {
      timeline: {
        one: {
          name: "Mumbere Electronics",
          date: "December 31, 2021",
        },
        two: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
        three: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
        four: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
      },
    };
  },
};
</script>
<style scoped>
.lithopedion {
  background: #f0f4f8 url("@/assets/img/wave_top_light_green.svg") no-repeat;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
</style>
