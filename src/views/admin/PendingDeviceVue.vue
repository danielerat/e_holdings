<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Your Pending Devices" down="medium" />

      <!-- My pending devices -->
      <section class="text-site-gray-1">
        <div class="container p-5 mx-auto">
          <div
            class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
          >
            <h1
              class="flex-grow basis-1/2 sm:pr-16 text-2xl font-light title-font"
            >
              All My pending Devices
            </h1>
            <a
              class="cursor-pointer text-xs group flex items-center basis-2/5 justify-between rounded-lg border border-current p-2 text-site-white-1 transition-colors bg-site-green-1 hover:bg-site-green-2 focus:outline-none focus:ring active:bg-site-green-3"
            >
              <span
                class="font-medium transition-colors group-hover:text-white"
              >
                Accept All Pending Devices
              </span>

              <span
                class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-site-green-2 group-active:text-indigo-500"
              >
                <fa icon="check" class="h-3 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <!-- ------ -->
      <div v-for="(trans, index) in pendingTransfers" :key="index">
        <ul>
          <li>
            <incoming-device
              :key="index"
              :transfer="trans"
              :name="trans.device.name"
              :type="trans.device.category"
              :date="trans.device.date_of_creation"
              :model="trans.device.device_model"
              :from="trans.transferor.name"
              :pos="index % 2 == 1"
            >
              {{ trans.device.desc }}
            </incoming-device>
          </li>
        </ul>
      </div>
      <!-- ---- -->
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import IncomingDevice from "@/components/Admin/Cards/IncomingDevice.vue";
import AdminNavbar from "@/components/Admin/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar/AdminSidebar.vue";
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";

export default {
  name: "AssignDevice",
  components: {
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    IncomingDevice,
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
      pendingTransfers: (state) => state.pendingTransfers,
    }),
  },
  created() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("fetchPendingTransfers");
  },
  methods: {},
};
</script>
