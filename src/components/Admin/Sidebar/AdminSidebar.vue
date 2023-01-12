<template>
  <nav
    class="md:left-0 text-left md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-site-white-5 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 dark:bg-site-gray-2"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-site-gray-1 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-solid border-transparent"
        type="button"
        v-on:click="
          toggleCollapseShow(
            'bg-site-white-4 dark:bg-site-gray-2 m-2 py-3 px-6'
          )
        "
      >
        <fa
          :icon="['fa', 'bars']"
          class="text-site-gray-1 text-2xl dark:text-site-yellow-3"
        />
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-site-green-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 dark:text-site-white-5"
        to="/"
      >
        E-Holdings
        <p v-if="userInfo !== null">{{ userInfo.account_type }}</p>
      </router-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <dark-mode-switcher />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-site-yellow-2"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-site-green-2"
                to="/"
              >
                E-Holdings
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <fa
                  :icon="['fa', 'times']"
                  class="text-site-green-1 text-xl dark:text-site-yellow-3"
                />
              </button>
            </div>
          </div>
        </div>

        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Admin Layout Pages
        </h6>
        <!-- Navigation -->

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
        >
          <li class="items-start">
            <router-link
              :to="`/${$i18n.locale}/admin`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'gauge']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Dashboard
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/admin/settings`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'gears']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Settings
              </a>
            </router-link>
          </li>
        </ul>
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Device Management
        </h6>
        <!-- Navigation -->

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
        >
          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/admin/devices`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'mobile-button']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Devices
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/admin/invoice`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'file-contract']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Invoices
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/admin/add-device`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'circle-plus']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Add Device
              </a>
            </router-link>
          </li>
        </ul>

        <hr
          class="my-4 md:min-w-full"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        >
          Business
        </h6>
        <!-- Navigation -->

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        >
          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/admin/assign-device`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'share-nodes']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Assign New Device
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/admin/publish-device`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'file-contract']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Publish Device
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Authentication
        </h6>
        <!-- Navigation -->

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
          v-if="isAuthenticated"
        >
          <li class="items-center">
            <router-link
              :to="`/${$i18n.locale}/logout`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-site-yellow-2 hover:text-site-yellow-3'
                    : 'text-site-gray-4 hover:text-site-gray-3',
                ]"
              >
                <fa
                  :icon="['fa', 'right-from-bracket']"
                  class="text-xl"
                  :class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Logout
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import NotificationDropdown from "@/components/Admin/Dropdowns/AdminNotificationDropdown";
import UserDropdown from "@/components/Admin/Dropdowns/AdminUserDropdown.vue";
import DarkModeSwitcher from "@/components/shared/DarkModeSwitcher.vue";
export default {
  components: {
    NotificationDropdown,
    UserDropdown,
    DarkModeSwitcher,
  },
  data() {
    return {
      //   collapseShow: "bg-white m-2 py-3 px-6",
      collapseShow: "hidden",
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
};
</script>
