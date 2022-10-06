<template>
  <router-link
    to="/"
    class="hover:text-blueGray-500 px-3 py-2 flex items-center text-xs uppercase font-bold"
  >
    Home
  </router-link>
  <router-link
    to="/Contact"
    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
  >
    Contact
  </router-link>
  <router-link
    to="/About"
    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
  >
    About
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
};
</script>
