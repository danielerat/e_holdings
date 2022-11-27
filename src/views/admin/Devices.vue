<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="List of all Invoices " down="true" />

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
      <div class="w-full justify-center my-2">
        <div class="flex w-2/4 mx-auto">
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            class="btn inline-block px-6 py-2.5 bg-site-gray-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-site-gray-2 hover:shadow-lg focus:bg-site-gray-1 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-site-gray-1 active:shadow-lg transition duration-150 ease-in-out items-center"
            type="button"
            id="button-addon2"
          >
            <fa icon="search"></fa>
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-around flex-wrap">
        <device-card
          class="basis-1/4"
          name="Mappel Touch 45"
          model="Mappel45 Ht 2028"
          imei="MR2212M2111"
          type="laptop"
          text="if it was easy everyone would do it , who are you go succeed where everyone failed"
        />
        <device-card
          class="basis-1/4"
          name="Mappel Touch 45"
          model="Mappel45 Ht 2028"
          imei="MR2212M2111"
          status="lost"
          type="laptop"
          text="if it was easy everyone would do it , who are you go succeed where everyone failed"
        />
        <device-card
          class="basis-1/4"
          name="Mappel Touch 45"
          model="Mappel45 Ht 2028"
          imei="MR2212M2111"
          status="lost"
          type="laptop"
          text="if it was easy everyone would do it , who are you go succeed where everyone failed"
        />
        <device-card
          class="basis-1/4"
          name="Mappel Touch 45"
          model="Mappel45 Ht 2028"
          imei="MR2212M2111"
          status="lost"
          type="laptop"
          text="if it was easy everyone would do it , who are you go succeed where everyone failed"
        />
        <device-card
          class="basis-1/4"
          name="Mappel Touch 45"
          model="Mappel45 Ht 2028"
          imei="MR2212M2111"
          status="lost"
          type="laptop"
          text="if it was easy everyone would do it , who are you go succeed where everyone failed"
        />
        <device-card
          class="basis-1/4"
          name="Mappel Touch 45"
          model="Mappel45 Ht 2028"
          imei="MR2212M2111"
          status="active"
          type="laptop"
          text="if it was easy everyone would do it , who are you go succeed where everyone failed"
        />
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
import DeviceCard from "@/components/Admin/Cards/DeviceCard.vue";
export default {
  name: "AssignDevice",
  components: {
    DeviceCard,
    AdminNavbar,
    Sidebar,
    FooterAdmin,
    CardStats,
  },
};
</script>
