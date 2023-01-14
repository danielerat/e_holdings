<template>
  <div
    class="relative rounded-xl bg-site-white-5 border-site-white-3 cursor-pointer p-8 shadow-xl mx-5 my-5 bg-contain bg-no-repeat"
    :style="{ backgroundImage: 'url(' + picture + ')' }"
  >
    <span
      class="absolute top-4 rounded-full py-1.5 text-xs font-medium text-gray-1"
    >
      Since: {{ date }}
    </span>
    <span
      class="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium"
      :class="[typeClass]"
    >
      {{ status }}
    </span>

    <div class="mt-4 text-gray-500">
      <div class="flex justify-around">
        <p>
          <fa :icon="type" class="text-xl" />
        </p>
        <p class="text-xs">SN/IMEI: {{ imei }}</p>
      </div>

      <h3 class="mt-4 text-sm text-site-gray-1">
        <p class="font-bold">{{ name }}</p>

        <p class="text-xs text-site-gray-3">Model: {{ model }}</p>
        <p></p>
      </h3>

      <p class="mt-2 hidden text-xs text-gray-4 sm:block">
        {{ text }}
      </p>

      <div class="flex mt-5 text-lg sm:block">
        <div class="flex">
          <div
            class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1"
          >
            <router-link :to="`/${$i18n.locale}/admin/device/${device.uuid}`">
              <popover
                title="Check out device"
                text="View your device for further actions"
              >
                <fa icon="eye" />
              </popover>
            </router-link>
          </div>
          <div
            class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1"
          >
            <fa icon="gauge" />
          </div>
          <router-link :to="`/${$i18n.locale}/admin/device`">
            <div class="px-2 text-site-green-3 hover:text-site-green-1">
              <popover
                title="Report lost or Stolen"
                text="Did you lose this device? report it as lost."
              >
                <fa icon="circle-info"></fa>
              </popover>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popover from "@/components/shared/popover.vue";
import waveblue from "@/assets/img/wave.svg";
import waveyellow from "@/assets/img/waveyellow.svg";
export default {
  name: "DeviceCard",
  components: {
    Popover,
  },
  props: {
    device: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    imei: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
      default: "xx-xx-xx",
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "mobile-button",
      validator(value) {
        return ["mobile-button", "laptop", "plug"].includes(value);
      },
    },
    status: {
      type: String,
      required: false,
      default: "active",
      validator(value) {
        return ["active", "lost"].includes(value);
      },
    },
  },
  data() {
    return {
      waveblue,
      waveyellow,
    };
  },
  computed: {
    picture() {
      if (this.status == "active") return this.waveblue;
      return this.waveyellow;
    },
    typeClass() {
      return { [this.status]: true };
    },
  },
};
</script>
<style scoped>
.lost {
  @apply bg-site-yellow-4 text-site-yellow-1;
}
.active {
  @apply bg-green-100 text-green-600;
}
</style>
<style scoped>
.lithopedion {
  background: #fff3c4 url("@/assets/img/wavecard.svg") top no-repeat;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
