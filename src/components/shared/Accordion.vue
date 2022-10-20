<template>
  <div class="border-b-2 border-site-gray-5 border-solid">
    <div
      class="py-1 flex h-full flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <span
        class="ml-4 text-site-white-4 bg-site-green-2 p-2 px-3 rounded-full"
      >
        <fa :icon="caratIcon" />
      </span>
      <div v-if="isOpen" class="">
        <div class="block p-2">
          <slot class="">
            <p>Whoops, Somebody forgot to populate me yo !</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",

  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    caratIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      return (this.isOpen = !this.isOpen);
    },
  },
};
</script>
