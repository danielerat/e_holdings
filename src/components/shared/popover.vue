<template>
  <div class="flex flex-wrap">
    <div class="w-full text-center">
      <a
        ref="btnRef"
        v-on:mouseenter="toggleTooltip()"
        v-on:mouseleave="toggleTooltip()"
        class="ease-linear transition-all duration-150"
      >
        <slot></slot>
      </a>
      <div
        ref="popoverRef"
        v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
        class="bg-site-green-5 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
      >
        <div>
          <div
            class="bg-site-green-2 text-site-green-5 opacity-75 font-semibold p-2 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
          >
            {{ title }}
          </div>
          <div class="p-2 text-site-green-1">
            {{ text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "left-emerald-tooltip",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      popoverShow: false,
    };
  },
  methods: {
    toggleTooltip: function () {
      if (this.popoverShow) {
        this.popoverShow = false;
      } else {
        this.popoverShow = true;
        createPopper(this.$refs.btnRef, this.$refs.popoverRef, {
          placement: "left",
        });
      }
    },
  },
};
</script>
