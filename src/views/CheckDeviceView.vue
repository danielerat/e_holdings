<template>
  <check-device-view></check-device-view>
  <index-navbar></index-navbar>
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import CheckDeviceView from "@/components/shared/SearchInput.vue";
export default {
  name: "ContactView",
  components: {
    MainFooter,
    IndexNavbar,
    CheckDeviceView,
  },
};
</script>
