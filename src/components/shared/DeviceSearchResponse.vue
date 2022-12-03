<template>
  <div
    v-if="type == 'negative'"
    class="flex flex-col sm:flex-row mt-5 bg-site-yellow-5 px-10 rounded-full"
  >
    <div class="flex flex-row w-1/2 mx-auto my-5 sm:my-0">
      <div class="self-center">
        <h1 class="font-bold text-2xl text-site-yellow-1">
          Oups! Device Reported
        </h1>
        <h2 class="text-sm">
          Looks like the device you have has been reported as lost or stolen,
          please reach out to the nearest police station for assitance
          <br />
        </h2>
        <h2
          class="text-xs text-site-yellow-1 bg-site-white-5 inline-block p-2 hover:bg-site-white-3 rounded-full p-"
        >
          Learn More >
        </h2>
      </div>
    </div>
    <div class="w-1/2">
      <div class="relative">
        <img :src="error" class="absolute sm:static -right-60 bottom-0" />
      </div>
    </div>
  </div>

  <div
    v-if="type == 'positive'"
    class="flex flex-col sm:flex-row mt-5 bg-site-green-5 px-10 rounded-full"
  >
    <div class="flex flex-row w-1/2 mx-auto my-5 sm:my-0">
      <div class="self-center">
        <h1 class="font-bold text-2xl text-site-green-2">Great! Looks good</h1>
        <h2 class="text-sm">
          the device looks good, it's not report in our system to be stolen or
          to have any issue.
          <br />
          If you want to buy the device make sure to sign the suitable contract
          with the user
        </h2>
        <h2
          class="text-xs text-site-green-4 bg-site-white-5 inline-block p-2 hover:bg-site-white-3 rounded-full p-"
        >
          Learn More >
        </h2>
      </div>
    </div>
    <div class="w-1/2">
      <div class="relative">
        <img :src="good" class="absolute sm:static -right-60 bottom-0" />
      </div>
    </div>
  </div>
</template>
<script>
import good from "@/assets/img/good.png";
import error from "@/assets/img/error.png";
export default {
  name: "DeviceSearchResponse",
  props: {
    type: {
      type: String,
      required: false,
      default: "negative",
      validator(value) {
        return ["negative", "positive"].includes(value);
      },
    },
  },
  data() {
    return {
      good,
      error,
    };
  },
};
</script>
