<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-site-gray-1 text-sm uppercase hidden lg:inline-block font-semibold dark:text-site-white-5"
        href="javascript:void(0)"
      >
        {{ path }}
      </a>

      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
            @click="CHANGE_DARKMODE"
          >
            <fa
              v-if="darkmode"
              icon="moon"
              class="text-site-yellow-4 text-2xl"
            />
            <fa v-else icon="lightbulb" class="text-site-yellow-4 text-2xl" />
          </a>
        </li>
        <user-dropdown />
      </ul>
    </div>
  </nav>

  <div v-if="down" :class="[down]"></div>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Admin/Dropdowns/AdminUserDropdown";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    UserDropdown,
  },
  props: {
    path: {
      type: String,
      default: "Dashboard",
      required: false,
    },
    down: {
      type: String,
      default: "",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  computed: {
    ...mapGetters(["darkmode"]),
  },
  methods: {
    ...mapMutations(["CHANGE_DARKMODE"]),
  },
};
</script>

<style scoped>
.small {
  @apply xl:h-20 md:h-10;
}
.medium {
  @apply xl:h-28 md:h-16;
}
.large {
  @apply xl:h-40 md:h-20;
}
</style>
