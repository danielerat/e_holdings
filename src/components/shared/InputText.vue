<template>
  <div class="w-full px-4" :class="[sizeClass]">
    <div class="relative w-full mb-3">
      <label
        v-if="label"
        class="block uppercase text-site-gray-1 text-xs font-bold mb-2 dark:text-site-white-5"
        :htmlFor="name"
      >
        {{ label }}
      </label>
      <input
        v-if="type != 'password'"
        :id="name"
        :type="type"
        :placeholder="placeholder"
        class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        v-model="changeValue"
        :readonly="readonly"
      />
      <input
        v-else
        :id="name"
        :type="showText ? 'text' : 'password'"
        :placeholder="placeholder"
        class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        v-model="changeValue"
        :readonly="readonly"
      />
      <fa
        v-if="type == 'password'"
        @click="showText = !showText"
        :icon="eyeIcon()"
        class="text-2xl text-site-gray-2 absolute bottom-3 right-3"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "InputText",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
      validator(value) {
        return ["text", "number", "email", "password"].includes(value);
      },
    },
    label: {
      type: String,
      required: false,
    },
    data: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },

    id: {
      type: String,
      required: false,
      default: "",
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
  },
  data() {
    return {
      showText: false,
    };
  },
  computed: {
    sizeClass() {
      return { [this.size]: true };
    },
    changeValue: {
      get() {
        return this.data;
      },
      set(newValue) {
        // Emit the update-message event when the messageChanged computed property is set
        this.$emit("update", newValue);
      },
    },
  },

  methods: {
    eyeIcon() {
      if (this.showText) return "eye";
      return "eye-slash";
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
