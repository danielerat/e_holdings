<template>
  <index-navbar></index-navbar>
  <hero></hero>
  <short-about-us />
  <center-img-design
    title_left="Our Story"
    sub_title_left="Lorem ipsum dolor sit amet consectetur"
    text_left="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur"
    title_right="Why choose us?"
    sub_title_right="We are your best option ...."
    text_right="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur"
  />
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import Hero from "@/components/Hero.vue";
import ShortAboutUs from "@/components/ShortAboutUs.vue";
import CenterImgDesign from "@/components/CenteredImgSideContents.vue";

export default {
  name: "Index",
  components: {
    MainFooter,
    IndexNavbar,
    Hero,
    ShortAboutUs,
    CenterImgDesign,
  },
};
</script>
