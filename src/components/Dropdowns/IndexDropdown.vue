<template>
  <router-link
    :to="`/${$i18n.locale}`"
    class="hover:text-blueGray-500 px-3 py-2 flex items-center text-xs uppercase font-bold dark:hover:text-site-green-5 dark:text-site-green-3"
  >
    Home
  </router-link>
  <router-link
    :to="`/${$i18n.locale}/contact`"
    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold dark:hover:text-site-green-5 dark:text-site-green-3"
  >
    Contact
  </router-link>
  <router-link
    :to="`/${$i18n.locale}/about`"
    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold dark:hover:text-site-green-5 dark:text-site-green-3"
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
