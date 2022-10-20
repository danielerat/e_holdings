<template>
  <div class="border-b-2 border-site-white-4 border-solid my-2">
    <div
      class="py-1 h-full items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="flex flex-row text-base font-semibold">
        <span>{{ header }}</span>
        <span class="ml-4 text-site-gray-2 rounded-full">
          <fa :icon="caratIcon" />
        </span>
      </h3>

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
