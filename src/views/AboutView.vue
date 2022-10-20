<template>
  <index-navbar></index-navbar>
  <all-you-need />
  <fixed-image-scroll-layout type="left" title="Something really else">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam
    incidunt id voluptatibus vitae, architecto ut nostrum ratione porro quod
    dolorum autem natus repellat voluptatem similique, assumenda ipsum
    cupiditate molestias?
  </fixed-image-scroll-layout>
  <main-footer></main-footer>
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import AllYouNeed from "@/components/About/AllYouNeedToKnow.vue";
import FixedImageScrollLayout from "@/components/shared/FixedImageScrollLayout.vue";

import allYouNeed from "@/assets/img/allyouneed.png";
export default {
  name: "Abouts",
  components: {
    IndexNavbar,
    MainFooter,
    AllYouNeed,

    FixedImageScrollLayout,
  },
  data() {
    return { allYouNeed };
  },
};
</script>
