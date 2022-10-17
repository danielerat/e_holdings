<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            E-Holdings
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <fa :icon="['fa', 'bars']" class="text-site-gray-1 text-2xl" />
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center flex-row"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex justify-center items-end">
            <index-dropdown />
          </li>
          <div class="mt-4 flex justify-between items-center">
            <li class="flex">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                href=""
                target="_blank"
              >
                <fa
                  :icon="['fab', 'facebook']"
                  class="text-site-gray-1 text-2xl"
                />
                <span class="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li class="flex items-center">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                href=""
                target="_blank"
              >
                <fa
                  :icon="['fab', 'twitter']"
                  class="text-site-gray-1 text-2xl"
                />
                <span class="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li class="flex items-center">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                href=""
                target="_blank"
              >
                <fa
                  :icon="['fab', 'whatsapp']"
                  class="text-site-gray-1 text-2xl"
                />
                <span class="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>

            <li class="flex items-center">
              <router-link
                to="/admin"
                class="bg-site-gray-1 text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ease-linear transition-all duration-150"
              >
                Sign In
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <div class="h-12"></div>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown";

export default {
  name: "IndexNavbar",
  data() {
    return {
      navbarOpen: true,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
