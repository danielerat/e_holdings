<template>
  <div>
    <!-- Bind the input field to the messageChanged computed property using v-model -->
    <input v-model="messageChanged" />
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    // Define a computed property that gets and sets the value of the message prop
    messageChanged: {
      get() {
        return this.data;
      },
      set(newValue) {
        // Emit the update-message event when the messageChanged computed property is set
        this.$emit("update", newValue);
      },
    },
  },
};
</script>
