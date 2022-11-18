<template>
  <div class="w-full px-4" :class="[sizeClass]">
    <div class="relative w-full mb-3">
      <label
        class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
        :htmlFor="name"
      >
        {{ label }}
      </label>

      <select
        :id="name"
        class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      >
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputText",
  props: {
    label: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "md",
      validator(value) {
        return ["md", "lg"].includes(value);
      },
    },
    options: {
      type: [],
      required: true,
    },
  },
  computed: {
    sizeClass() {
      return { [this.size]: true };
    },
  },
};
</script>
<style scoped>
.sm {
  @apply lg:w-4/12;
}
.md {
  @apply lg:w-6/12;
}
.lg {
  @apply lg:w-full;
}
</style>
