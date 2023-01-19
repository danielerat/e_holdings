<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Your Devices User Warranty" down="medium" />

      <!-- My pending devices -->
      <section class="text-site-gray-1">
        <div class="container p-5 mx-auto">
          <div
            class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
          >
            <h1
              class="flex-grow basis-1/2 sm:pr-16 text-2xl font-light title-font"
            >
              All the sold devices under warranty
            </h1>
          </div>
        </div>
      </section>
      <!-- ------ -->
      <section>
        <div class="flex flex-wrap justify-center align-baseline">
          <devices-warranty />
        </div>
      </section>
      <!-- ---- -->
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
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";
import DevicesWarranty from "@/components/Admin/Invoices/DevicesUnderWarranty.vue";
export default {
  name: "AssignDevice",
  components: {
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    DevicesWarranty,
  },
  data() {
    return {
      devices: {
        1: {
          type: "computer",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
        2: {
          type: "computer",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
        3: {
          type: "computer",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
        4: {
          type: "computer",
          date: "December-23-2021",
          model: "Bionic Beaver 32",
          name: "Mac Book Pro",
          from: "James Harden",
        },
      },
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
      transfers: (state) => state.transfers,
    }),
  },
  created() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("fetchAllTransfers");
  },
  methods: {},
};
</script>
