<template>
  <index-navbar></index-navbar>
  <check-device class="lithopedion"></check-device>
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import CheckDevice from "@/components/shared/SafetyCheck.vue";
export default {
  name: "ContactView",
  components: {
    MainFooter,
    IndexNavbar,
    CheckDevice,
  },
};
</script>
<style scoped>
.lithopedion {
  background: #fff url("@/assets/img/waveyellowgreen.svg") top no-repeat;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
