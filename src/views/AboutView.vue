<template>
  <index-navbar></index-navbar>
  <about />
  <main-footer></main-footer>
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import About from "@/components/About.vue";

export default {
  name: "Abouts",
  components: {
    IndexNavbar,
    MainFooter,
    About,
  },
};
</script>
