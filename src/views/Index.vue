<template>
  <index-navbar></index-navbar>
  <div>
    <h2 class="text-4xl">Hello it's me</h2>
  </div>
  <div>
    <h2 class="text-4xl">Hello it's me</h2>
  </div>
  <div>
    <h2 class="text-4xl">Hello it's me</h2>
  </div>
  <div>
    <h2 class="text-4xl">Hello it's me</h2>
  </div>
  <div>
    <h2 class="text-4xl">Hello it's me</h2>
  </div>
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
