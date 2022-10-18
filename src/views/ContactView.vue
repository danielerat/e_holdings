<template>
  <index-navbar></index-navbar>
  <contact />
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "ContactView",
  components: {
    MainFooter,
    IndexNavbar,
    Contact,
  },
};
</script>
