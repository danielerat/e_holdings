<template>
  <ol class="items-center justify-center flex flex-col sm:flex-row waveLines">
    <li
      v-for="(device, key, index) in timeline"
      :key="key"
      class="relative mb-6 sm:mb-0 sm:w-auto w-1/2 text-center"
    >
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-16 h-16 bg-site-gray-4 rounded-full ring-site-gray-5 dark:bg-site-yellow-4 ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <fa
            icon="calendar-day"
            class="text-2xl text-site-gray-2 dark:text-site-yellow-2"
          />
        </div>
        <div
          v-if="index != Object.keys(timeline).length - 1"
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3
          v-if="index != Object.keys(timeline).length - 1"
          class="text-sm md:text-base font-semibold text-site-gray-2 dark:text-site-white-4"
        >
          {{ index }}{{ device.name }}
        </h3>
        <a
          v-if="index == Object.keys(timeline).length - 1"
          href="#"
          class="text-xs inline-flex items-center p-2 mb-1 font-medium text-site-gray-2 rounded-lg border border-site-gray-4 hover:bg-site-green-5 dark:hover:text-site-gray-1 dark:hover:bg-site-green-5"
        >
          <fa
            icon="download"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Contract
        </a>
        <time
          class="text-xs md:text-sm block mb-2 text-center font-bold leading-none text-site-green-3"
        >
          On {{ device.date }}
        </time>
      </div>
    </li>
  </ol>
</template>
<script>
import image from "@/assets/img/wavelightvertical.svg";
export default {
  name: "DeviceTimeline",
  props: {
    timeline: {
      tupe: Object,
      required: true,
    },
  },
  data() {
    return {
      image,
    };
  },
};
</script>
<style scoped>
@media (max-width: 640px) {
  .waveLines {
    background-image: url("@/assets/img/wavelightvertical.svg");
    background-repeat: no-repeat;
    background-size: 10% contain;
    background-position-x: 100px;
  }
}
</style>
