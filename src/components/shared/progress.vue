<template>
  <div class="relative w-full">
    <div class="overflow-hidden h-2 text-xs flex rounded" :class="percentColor">
      <div
        :style="widthclass"
        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
        :class="subPercentColor"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress",
  props: {
    percent: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "green",
      validator(value) {
        return ["green", "yellow", "gray"].includes(value);
      },
    },
  },
  computed: {
    widthclass() {
      return "width:" + this.percent + "%";
    },
    percentColor() {
      return "bg-site-" + this.color + "-5";
    },
    subPercentColor() {
      return "bg-site-" + this.color + "-4";
    },
  },
};
</script>

<style></style>
