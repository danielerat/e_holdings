<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="My Device " down="small" />

      <single-device
        :timeline="timeline"
        :device="device"
        @updateDeviceAvailability="updateDeviceAvailability"
      />

      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
      device: "",
      deviceOwner: "",
      timeline: {
        one: {
          name: "Mumbere Electronics",
          date: "December 31, 2021",
        },
        two: {
          name: "New Owner",
          date: "December 31, 2021",
        },
        three: {
          name: "New Owner",
          date: "December 31, 2021",
        },
        four: {
          name: "New Owner",
          date: "December 31, 2021",
        },
      },
    };
  },
  created() {
    this.getDevice(this.$route.params.uuid);
    this.$store.dispatch("getCurrentUser");
  },
  methods: {
    getDevice(uuid) {
      axios
        .get(`e-hold/v1/device/${uuid}/`)
        .then((response) => {
          this.device = response.data;
        })
        .catch((error) => {
          console.log(error.response.status);
        });
    },
    updateDeviceAvailability(status) {
      this.device.availability = status;
    },
  },
};
</script>
<style scoped></style>
