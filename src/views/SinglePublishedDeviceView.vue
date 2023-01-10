<template>
  <index-navbar></index-navbar>

  <single-published-device></single-published-device>

  <main-footer />
</template>

<script>
import SinglePublishedDevice from "@/components/SinglePublishedDevice.vue";
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";

export default {
  components: {
    IndexNavbar,
    MainFooter,
    SinglePublishedDevice,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
