<template>
  <ol class="flex justify-center">
    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-3 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="step == 1 ? 'text-site-white-4' : ''"
        >
          <fa icon="circle-info"></fa>
        </div>
        <div
          class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
        ></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
          Your Info
        </h3>
      </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-1 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="step == 2 ? 'text-site-white-4' : ''"
        >
          <fa icon="fingerprint"></fa>
        </div>
        <div
          class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
        ></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
          Account Verification
        </h3>
      </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-1 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="step == 3 ? 'text-site-white-4' : ''"
        >
          <fa icon="lock"></fa>
        </div>
        <div
          class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
        ></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
          Password Setup
        </h3>
      </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-6 h-6 bg-site-green-4 rounded-full ring-0 ring-site-white-1 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          :class="step == 4 ? 'text-site-white-4' : ''"
        >
          <fa icon="circle-check"></fa>
        </div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
          Done
        </h3>
      </div>
    </li>
  </ol>
</template>
<script>
export default {
  name: "StepForm",
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>
