<template>
  <footer
    class="block py-4 text-site-gray-1 dark:bg-site-gray-1 dark:text-site-white-5"
  >
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-blueGray-200" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm font-semibold py-1 text-center md:text-left">
            Copyright © {{ date }}
            <router-link
              to="#"
              class="text-site-green-3 hover:text-site-gray-3 text-sm font-semibold py-1"
            >
              E-Holdings
            </router-link>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <router-link
                :to="`/${$i18n.locale}/`"
                class="text-sm font-semibold block py-1 px-3"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                :to="`/${$i18n.locale}/about`"
                class="text-sm font-semibold block py-1 px-3"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                :to="`/${$i18n.locale}/contact`"
                class="text-sm font-semibold block py-1 px-3"
              >
                Contact
              </router-link>
            </li>
            <li>
              <router-link
                :to="`/${$i18n.locale}/login`"
                href="#"
                class="text-sm font-semibold block py-1 px-3"
              >
                Sign Out
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
