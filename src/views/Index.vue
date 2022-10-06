<template>
  <index-navbar></index-navbar>
  <Footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import Footer from "@/components/Footers/Footer.vue";

export default {
  name: "Index",
  components: {
    Footer,
    IndexNavbar,
  },
};
</script>
