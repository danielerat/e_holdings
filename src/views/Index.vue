<template>
  <index-navbar></index-navbar>
  <hero></hero>
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Index",
  components: {
    MainFooter,
    IndexNavbar,
    Hero,
  },
};
</script>
