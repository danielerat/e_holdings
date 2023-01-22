<template>
  <transition name="fade" class="">
    <div v-if="isModalVisible">
      <div
        @click="reportOnToggle"
        class="absolute bg-black opacity-70 inset-0 z-10"
      ></div>
      <div
        class="w-full max-w-lg p-3 fixed right-0 my-auto rounded-xl shadow-lg bg-white z-50"
      >
        <fa icon="times" class="absolute right-3" @click="reportOnToggle"></fa>
        <div>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    isModalVisible() {
      return this.toggle;
    },
  },
  methods: {
    reportOnToggle() {
      this.$emit("CloseModal", false);
    },
  },
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
