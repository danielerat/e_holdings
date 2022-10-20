<template>
  <section
    class="flex relative pt-1 items-center bg-no-repeat md:bg-auto bg-fixed"
    :class="type"
    :style="{ backgroundImage: 'url(' + bg + ')' }"
  >
    <div class="md:mx-0 mx-auto my-32 w-3/4 md:w-1/2">
      <div class="">
        <div class="py-16 px-5 bg-site-white-2 bg-opacity-60 rounded-r-3xl">
          <h2 class="font-extrabold text-5xl text-site-gray-1">
            {{ title }}
          </h2>
          <p
            class="font-medium text-left px-5 mt-4 text-lg leading-relaxed ld:text-site-gray-1 text-site-gray-1"
          >
            <slot name="default"></slot>
          </p>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import alloneplace from "@/assets/img/alloneplace.png";
export default {
  name: "Hero",
  components: {},
  props: {
    bg: {
      type: String,
      required: false,
      default: alloneplace,
    },
    type: {
      type: String,
      required: false,
      default: "right",
      validator(value) {
        return ["left", "right"].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
      default: "Welcome",
    },
  },
};
</script>

<style scoped>
.left {
  @apply bg-left justify-end text-left;
}
.right {
  @apply bg-right justify-start text-right;
}
</style>
