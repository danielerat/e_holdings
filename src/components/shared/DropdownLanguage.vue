<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="..."
            class="w-10 rounded-xl align-middle border-none shadow-lg"
            :src="country"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        @click="changeLocale('kin')"
      >
        Kinyarwanda
      </a>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        @click="changeLocale('en')"
      >
        English
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import rwanda from "@/assets/img/rwanda.svg";
import usa from "@/assets/img/usa.svg";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      rwanda,
      usa,
    };
  },
  computed: {
    country() {
      if (this.$i18n.locale == "en") {
        return this.rwanda;
      }
      return this.usa;
    },
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
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
