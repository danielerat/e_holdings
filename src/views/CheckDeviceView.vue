<template>
  <index-navbar></index-navbar>
  <safety-check class="lithopedion"></safety-check>
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import safetyCheck from "@/components/shared/SafetyCheck.vue";
export default {
  name: "ContactView",
  components: {
    MainFooter,
    IndexNavbar,
    safetyCheck,
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
