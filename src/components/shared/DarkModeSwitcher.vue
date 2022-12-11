<template>
  <a
    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
    @click="CHANGE_DARKMODE"
  >
    <fa v-if="darkmode" icon="lightbulb" class="text-site-yellow-3 text-2xl" />
    <fa v-else icon="moon" class="text-site-gray-1 text-2xl" />
  </a>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "DarkModeSwitcher",
  computed: {
    ...mapGetters(["darkmode"]),
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },

    ...mapMutations(["CHANGE_DARKMODE"]),
  },
};
</script>

<style></style>
