<template>
  <div id="app">
    <div class="flex flex-col items-center justify-center p-3 min-h-full">
      <button
        @click="onToggle"
        class="bg-site-gray-1 border border-site-gray-2 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-site-gray-2"
      >
        Open
      </button>
    </div>
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <fa icon="times" class="absolute right-3"></fa>
          <div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <!-- Buttons here -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isOpen: true,
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
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
