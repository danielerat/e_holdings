<template>
  <!-- Swtich the light and dark mode things -->
  <router-view :class="CURRENT_THEME == 'dark' ? 'dark' : 'light'" />
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["CURRENT_THEME"]),
  },
  mounted() {
    setInterval(() => {
      this.$store.dispatch("refreshToken");
    }, 1800000);
  },
  beforeCreate() {
    this.$store.commit("initStore");
    const accessToken = this.$store.state.access;
    const refreshToken = this.$store.state.refresh;
    if (accessToken && refreshToken) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
      // Get Current Authenticated user
      this.$store.dispatch("getCurrentUser");
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
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
