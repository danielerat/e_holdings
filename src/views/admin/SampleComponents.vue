<template>
  <p>place to print your Element from</p>
  <div class="hidden" ref="document">
    <div id="element-to-convert">
      <div class="text-center">This is another Element</div>
      <div>
        <img width="400" :src="pic" class="border" />
      </div>
    </div>
  </div>
  <button v-on:click.prevent="exportPdf()" class="button">Export to PDF</button>
</template>

<script>
import ownership from "@/utils/ownershipPdf";
export default {
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
