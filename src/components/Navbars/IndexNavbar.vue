<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow bg-white dark:bg-site-gray-1"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-site-gray-1 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase dark:text-site-green-5"
          >
            E-Holdings
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <fa
            :icon="['fa', 'bars']"
            class="text-site-gray-1 text-2xl dark:text-site-yellow-3"
          />
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
                  class="text-site-gray-1 text-2xl dark:text-site-yellow-5"
                />
                <span
                  class="lg:hidden inline-block ml-2 dark:text-site-yellow-5"
                >
                  Share
                </span>
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
                  class="text-site-gray-1 text-2xl dark:text-site-yellow-5"
                />
                <span
                  class="lg:hidden inline-block ml-2 dark:text-site-yellow-5"
                >
                  Tweet
                </span>
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
                  class="text-site-gray-1 text-2xl dark:text-site-yellow-5"
                />
                <span
                  class="lg:hidden inline-block ml-2 dark:text-site-yellow-5"
                >
                  Chat
                </span>
              </a>
            </li>

            <li class="flex items-center"><dark-mode-switcher /></li>

            <li class="flex items-center" v-if="isAuthenticated">
              <router-link :to="`/${$i18n.locale}/logout`">
                <action-button
                  type="secondary"
                  size="sm"
                  text="btn.signOut"
                  class="dark:bg-site-gray-2"
                />
              </router-link>
              <router-link :to="`/${$i18n.locale}/admin`">
                <fa icon="right-from-bracket" class="mx-2" />
              </router-link>
            </li>
            <li class="flex items-center" v-else>
              <router-link :to="`/${$i18n.locale}/login`">
                <action-button
                  type="secondary"
                  size="sm"
                  text="btn.signIn"
                  class="dark:bg-site-gray-2"
                />
              </router-link>
            </li>
            <li class="flex justify-center items-end">
              <drop></drop>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <div class="h-20 mb-0 dark:bg-site-gray-1">000</div>
</template>

<script>
import { mapGetters } from "vuex";
import DarkModeSwitcher from "@/components/shared/DarkModeSwitcher";
import IndexDropdown from "@/components/Dropdowns/IndexDropdown";
import ActionButton from "@/components/shared/ActionButton";
import drop from "@/components/shared/DropdownLanguage";

export default {
  name: "IndexNavbar",
  components: {
    ActionButton,
    IndexDropdown,
    DarkModeSwitcher,
    drop,
  },
  data() {
    return {
      navbarOpen: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },

  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
};
</script>
