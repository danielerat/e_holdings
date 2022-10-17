<template>
  <index-navbar></index-navbar>
  <hero></hero>
  <short-about-us />
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import Hero from "@/components/Hero.vue";
import ShortAboutUs from "@/components/ShortAboutUs.vue";

export default {
  name: "Index",
  components: {
    MainFooter,
    IndexNavbar,
    Hero,
    ShortAboutUs,
  },
};
</script>
