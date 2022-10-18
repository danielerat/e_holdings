<template>
  <div class="container mx-auto my-24">
    <short-about-us />
  </div>
</template>

<script>
import ShortAboutUs from "@/components/ShortAboutUs.vue";
export default {
  name: "About",
  mounted() {
    // this.submit();
  },
  components: {
    ShortAboutUs,
  },
};
</script>
