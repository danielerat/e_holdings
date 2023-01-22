<template>
  <div class="relative">
    <button :class="[buttonClass, sizeClass]" class="cursor-pointer">
      <fa v-if="frontIcon != ''" :icon="frontIcon"></fa>
      {{ $t(text) }}
      <fa
        v-if="isAnimated && animatedType == 'spin'"
        icon="spinner"
        class="animate-spin"
      />
    </button>
    <span v-if="isAnimated">
      <span
        v-if="animatedType == 'ping'"
        class="absolute -bottom-0 -left-0 flex h-4 w-4"
      >
        <span
          class="animate-ping absolute inline-flex top-0 left-0 h-4 w-4 rounded-full bg-site-green-5 opacity-75"
        ></span>
        <span
          class="absolute top-1 left-1 rounded-full h-2 w-2 bg-site-green-2"
        ></span>
      </span>

      <span
        v-if="animatedType == 'pulse'"
        class="absolute top-0 -right-0 flex h-4 w-4"
      >
        <span class="animate-pulse h-4 w-4 rounded-full bg-site-green-5"></span>
      </span>
    </span>
  </div>
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
        return ["sm", "md", "lg", "xl"].includes(value);
      },
    },
    frontIcon: {
      type: String,
      required: false,
      default: "",
    },
    isAnimated: {
      type: Boolean,
      required: false,
      default: false,
    },
    animatedType: {
      type: String,
      required: false,
      default: "ping",
      validator(value) {
        return ["spin", "ping", "pulse"].includes(value);
      },
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
.yellow {
  @apply text-site-yellow-5 bg-site-yellow-3 hover:bg-site-yellow-4 active:bg-site-yellow-2 active:text-site-white-4;
}
.yellow-clear {
  @apply bg-site-white-5 text-site-yellow-3 border-2 border-site-yellow-3 hover:bg-site-yellow-4 hover:text-site-gray-1 active:bg-site-yellow-5;
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
