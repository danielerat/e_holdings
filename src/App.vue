<template>
  <!-- Swtich the light and dark mode things -->
  <router-view :class="darkmode ? 'dark' : ''" />
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["darkmode"]),
  },
};
</script>

<style scopped>
nav a {
  @apply text-site-gray-1;
}

nav a.router-link-exact-active {
  @apply text-site-green-3 font-extrabold;
}
</style>
