<template>
  <div>
    <div
      class="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200"
    >
      <ol class="grid grid-cols-3 text-sm font-medium">
        <li class="relative text-left">
          <span
            class="absolute left-0 -bottom-[1.75rem] rounded-full border-2 border-site-green-2 bg-site-green-3 text-white"
            :class="step == 1 ? 'text-site-white-4' : ''"
          >
            <fa icon="check" class="px-1" />
          </span>

          <span class="font-bold hidden sm:block">Device</span>

          <fa
            icon="mobile-button"
            class="ml-auto h-6 w-6 sm:hidden text-site-green-3"
          />
        </li>
        <!--------------------------------- -->

        <li class="relative text-center">
          <span
            class="absolute left-1/2 -bottom-[1.75rem] -translate-x-1/2 rounded-full border-2 border-site-green-2 bg-site-green-2 text-white"
          >
            <fa v-if="step <= 2" icon="xmark-circle" class="px-1" />
            <fa v-else icon="check" class="px-1" />
          </span>
          <span class="font-bold hidden sm:block">Owner</span>
          <fa
            icon="fingerpr"
            class="ml-auto h-6 w-6 sm:hidden text-site-green-3"
          />
        </li>

        <li class="relative text-right">
          <span
            v-if="step == 3"
            class="absolute left-2/2 -bottom-[1.75rem] rounded-full border-2 border-site-green-4 bg-site-green-3 text-site-green-1"
          >
            <fa icon="check" class="px-1" />
          </span>
          <span
            v-else
            class="absolute left-2/2 -bottom-[1.75rem] rounded-full border-2 border-site-gray-4 bg-site-gray-3 text-site-gray-4"
          >
            <fa icon="check" class="px-1" />
          </span>
          <span class="font-bold hidden sm:block">Sent</span>

          <fa icon="certificate" class="ml-auto h-6 w-6 sm:hidden"></fa>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: "StepMark",
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>
