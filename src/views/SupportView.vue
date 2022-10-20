<template>
  <index-navbar></index-navbar>
  <faq></faq>

  <main-footer />
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";

import MainFooter from "@/components/Footers/Footer.vue";
import Faq from "@/components/Faq";
export default {
  name: "FaqView",
  components: {
    IndexNavbar,
    MainFooter,
    Faq,
  },
};
</script>
