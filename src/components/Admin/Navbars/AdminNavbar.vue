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
        <user-dropdown />
      </ul>
    </div>
  </nav>

  <div v-if="down" class="xl:h-40 md:h-20"></div>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Admin/Dropdowns/AdminUserDropdown";
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
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>
