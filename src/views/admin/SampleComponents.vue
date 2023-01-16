<template>
  <index-navbar />
  <p>place to print your Element from</p>
  testcomp l this is ano
  <div class="flex flex-col md:flex-row justify-around flex-wrap">
    <device-card
      device="device"
      class="basis-1/4"
      name="device.name"
      model="device.device_model"
      imei="device.mac_address"
      date="formatDate(device.date_of_creation)"
      status="inactive"
      type="active"
      text="device.desc"
    />
  </div>
  <div class="hidden" ref="document">
    <div id="element-to-convert">
      <div class="text-center">This is another Element</div>
      <div>
        <img width="400" :src="pic" class="border" />
      </div>
    </div>
  </div>
  <button v-on:click.prevent="exportPdf()" class="button">Export to PDF</button>

  <footer-simple />
</template>

<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterSimple from "@/components/Admin/Footers/AdminFooter.vue";
import DeviceCard from "@/components/Admin/Cards/DeviceCard";
import ownership from "@/utils/ownershipPdf";
export default {
  components: {
    DeviceCard,
    IndexNavbar,
    FooterSimple,
  },
  data() {
    return {
      animals: [["Column 1", "Column 2", "Column 3", "Column 4"]],
    };
  },
  methods: {
    exportPdf() {
      ownership({
        device: {
          name: "xxxxxxxxxxxx",
          model: "xxxxxxxxxxxx",
          serial: "xxxxxxxx",
        },
        owner: "xxxxxxxxxxxx",
        date: "xxxxxxxxxx",
        action: "", //open-print-download
      });
    },
  },
};
</script>
