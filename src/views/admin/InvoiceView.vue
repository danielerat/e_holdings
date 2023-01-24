<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="List of all Invoices " down="medium" />

      <div class="flex justify-around flex-wrap mb-6">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Devices"
            :statTitle="devices.length"
            :statArrow="devices.length !== 0 ? 'up' : 'down'"
            :statPercent="devices.length !== 0 ? '0.4' : '0.4'"
            statPercentColor="text-red-500"
            statDescripiron="This week"
            statIconName="chart-bar"
            statIconColor="bg-site-yellow-1"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Invoices"
            :statTitle="invoices.length"
            :statArrow="invoices.length !== 0 ? 'up' : 'down'"
            statPercent="0.48"
            :statPercentColor="
              invoices.length !== 0 ? 'text-emerald-500' : 'text-red-500'
            "
            statDescripiron="Since last week"
            statIconName="chart-pie"
            statIconColor="bg-site-gray-2"
          />
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Declared Lost"
            :statTitle="lost.length"
            :statArrow="lost.length !== 0 ? 'up' : 'down'"
            statPercent="1"
            :statPercentColor="
              lost.length !== 0 ? 'text-emerald-500' : 'text-orange-500'
            "
            statDescripiron="Yesterday"
            statIconName="users"
            statIconColor="bg-site-yellow-2"
          />
        </div>
      </div>
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
import { mapState } from "vuex";
import AdminNavbar from "@/components/Admin/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar/AdminSidebar.vue";
import FooterAdmin from "@/components/Admin/Footers/AdminFooter.vue";
import CardStats from "@/components/Cards/CardStats.vue";
import Invoice from "@/components/Admin/Invoices/Invoice.vue";
export default {
  name: "AssignDevice",
  components: {
    Invoice,
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    CardStats,
  },
  computed: {
    ...mapState({
      devices: (state) => state.accountDevices,
      invoices: (state) => state.accountInvoices,
      lost: (state) => state.lostDevices,
    }),
  },
  created() {
    this.$store.dispatch("fetchDevicesPerAccount");
    this.$store.dispatch("fetchInvoices");
    this.$store.dispatch("fetchLostDevices");
  },
};
</script>
