<template>
  <!-- Swtich the light and dark mode things -->
  <router-view :class="CURRENT_THEME == 'dark' ? 'dark' : 'light'" />
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["CURRENT_THEME"]),
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
