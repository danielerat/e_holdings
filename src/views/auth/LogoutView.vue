<template>
  <div></div>
</template>
<script>
export default {
  name: "LogoutView",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("userSignOut").then(() => {
      this.$router.push("/");
    });
  },
  methods: {},
};
</script>
