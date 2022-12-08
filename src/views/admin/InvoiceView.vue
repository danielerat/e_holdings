<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="List of all Invoices " down="medium" />

      <div class="flex justify-around flex-wrap mb-6">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Sample"
            statTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="chart-bar"
            statIconColor="bg-site-yellow-1"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Sample USERS"
            statTitle="2,356"
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Since last week"
            statIconName="chart-pie"
            statIconColor="bg-site-gray-2"
          />
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <card-stats
            statSubtitle="Sample"
            statTitle="49,65%"
            statArrow="up"
            statPercent="12"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="percent"
            statIconColor="bg-site-green-2"
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
};
</script>
