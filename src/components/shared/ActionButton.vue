<template>
  <button :class="[buttonClass, sizeClass]">
    <fa v-if="icon != ''" :icon="frontIcon"></fa>
    {{ $t(text) }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "tertiary", "quaternary"].includes(
          value
        );
      },
    },
    size: {
      type: String,
      required: false,
      default: "sm",
      validator(value) {
        return ["sm", "md", "lg"].includes(value);
      },
    },
    frontIcon: {
      type: String,
      required: false,
      default: "",
    },
  },

  computed: {
    buttonClass() {
      return { [this.type]: true };
    },
    sizeClass() {
      return { [this.size]: true };
    },
  },
};
</script>
<style scoped>
button {
  @apply font-bold  rounded-lg outline-none focus:outline-none  text-sm shadow hover:shadow-lg ease-linear transition-all duration-150;
}
.primary {
  @apply text-white bg-site-green-1 hover:bg-site-green-2 active:bg-site-green-3;
}
.secondary {
  @apply text-white bg-site-gray-1 hover:bg-site-gray-2 active:bg-site-gray-3 dark:bg-site-gray-2 dark:hover:bg-site-gray-3;
}
.tertiary {
  @apply bg-site-white-5 text-site-green-1 border-2 border-site-green-1 hover:bg-site-green-2 hover:text-site-white-5 active:bg-site-green-3;
}
.quaternary {
  @apply bg-site-white-5 text-site-gray-1 border-2 border-site-gray-1 hover:bg-site-gray-2 hover:text-site-white-5 active:bg-site-gray-3;
}
.sm {
  @apply px-4 py-2 text-xs;
}
.md {
  @apply px-5 py-4;
}
.lg {
  @apply px-7 py-4 text-lg;
}
.xl {
  @apply px-11 py-6 text-lg;
}
</style>
