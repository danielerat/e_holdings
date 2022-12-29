<template>
  <div>
    <a
      class="text-site-gray-1 block py-1 px-3 dark:text-site-yellow-3"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <fa :icon="['fa', 'bell']" class="text-lg" />
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <router-link
        :to="`/${$i18n.locale}/admin/devices/pending`"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Pending Devices
      </router-link>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <router-link
        :to="`/${$i18n.locale}/admin/devices`"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Seprated link
      </router-link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
