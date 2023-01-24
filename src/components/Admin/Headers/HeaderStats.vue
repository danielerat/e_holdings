<template>
  <!-- Header -->
  <div
    class="relative md:pt-32 pb-32 pt-5 bg-site-yellow-5 dark:bg-site-gray-1"
  >
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Devices"
              :statTitle="devices.length"
              statArrow="down"
              statPercent="1.48"
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
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Transfers"
              :statTitle="pendingTransfers.length"
              :statArrow="pendingTransfers.length !== 0 ? 'up' : 'down'"
              statPercent="2"
              :statPercentColor="
                pendingTransfers.length !== 0
                  ? 'text-emerald-500'
                  : 'text-red-500'
              "
              statDescripiron="Since last month"
              statIconName="percent"
              statIconColor="bg-site-green-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
  computed: {
    ...mapState({
      devices: (state) => state.accountDevices,
      invoices: (state) => state.accountInvoices,
      lost: (state) => state.lostDevices,
      pendingTransfers: (state) => state.pendingTransfers,
    }),
  },
  created() {
    this.$store.dispatch("fetchInvoices");
    this.$store.dispatch("fetchDevicesPerAccount");
    this.$store.dispatch("fetchLostDevices");
  },
};
</script>
