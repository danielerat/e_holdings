<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Assign Device To a User" down="small" />

      <div
        class="flex flex-col text-center w-full mb-10 text-gray-900 dark:text-site-green-3"
      >
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">
          Assign A New Device To A User
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          You can Assign a new device to a user
        </p>
      </div>
      <!-- Settings -->
      <div class="flex flex-wrap mx-auto align-baseline max-w-3xl p-6">
        <assign-device-form></assign-device-form>
      </div>
      <!-- ---- -->
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import AdminNavbar from "@/components/Admin/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar/AdminSidebar.vue";
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";

import AssignDeviceForm from "@/components/Admin/AssignDeviceForm.vue";
export default {
  name: "AssignDevice",
  components: {
    AssignDeviceForm,
    AdminNavbar,
    Sidebar,
    FooterAdmin,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
  created() {
    // Get Current Authenticated user
    this.$store.dispatch("getCurrentUser");
  },
  methods: {},
};
</script>
