<template>
  <div
    class="relative rounded-xl bg-site-white-5 border-site-white-3 cursor-pointer p-8 shadow-xl mx-5 my-5 bg-contain bg-no-repeat"
    :style="{ backgroundImage: 'url(' + picture + ')' }"
  >
    <span
      class="absolute top-4 rounded-full py-1.5 text-xs font-medium text-gray-1"
    >
      <p class="font-bold">{{ truncate_name }}</p>
      <p class="text-xs text-site-gray-3">Model: {{ model }}</p>
    </span>
    <span
      class="absolute right-0 top-1 rounded-full px-3 py-1.5 text-xs font-medium"
      :class="[typeClass]"
    >
      <fa icon="cloud" />
    </span>

    <div class="mt-5 text-gray-500">
      <div class="flex justify-around">
        <p>
          <fa :icon="type" class="text-xl" />
        </p>
        <p class="text-xs">SN/IMEI: {{ imei }}</p>
      </div>

      <div class="flex mt-5 text-lg sm:block">
        <div class="flex">
          <div
            class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1"
          >
            <router-link :to="`/${$i18n.locale}/admin/device/${device.uuid}`">
              <fa icon="eye" />
            </router-link>
          </div>

          <router-link :to="`/${$i18n.locale}/admin/device/${device.uuid}`">
            <div class="px-2 text-site-green-3 hover:text-site-green-1">
              <fa icon="share" />
            </div>
          </router-link>

          <a
            v-if="status"
            class="inline-flex items-center px-1 rounded border border-site-yellow-1 text-site-yellow-1 hover:bg-transparent hover:text-site-yellow-2 focus:outline-none focus:ring active:text-site-yellow-2 active:bg-site-yellow-5"
            @click="unPublishDevice(device)"
          >
            <span class="text-xs font-medium">Unpublish&nbsp;</span>
            <fa icon="cloud-arrow-down" />
          </a>

          <a
            v-else
            class="inline-flex items-center px-1 rounded border border-site-green-5 text-site-green-1 hover:bg-transparent hover:text-site-green-2 focus:outline-none focus:ring active:text-site-green-2 active:bg-site-green-5"
            @click="publishDevice(device)"
          >
            <span class="text-xs font-medium">Publish&nbsp;</span>
            <fa icon="cloud-arrow-up" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AlertMe from "@/utils/alerts";
import published_waved from "@/assets/img/wave.svg";
import unpublished_wave from "@/assets/img/waveyellow.svg";
import truncateString from "@/utils/truncateString";
export default {
  name: "DeviceCardPublish",
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
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return [true, false].includes(value);
      },
    },
  },
  data() {
    return {
      published_waved,
      unpublished_wave,
    };
  },
  computed: {
    picture() {
      if (this.status == true) return this.published_waved;
      return this.unpublished_wave;
    },
    typeClass() {
      if (this.status == true) {
        return "online";
      } else {
        return "offline";
      }
    },
    // Truncated
    truncate_name() {
      return truncateString(this.name, 30);
    },
  },
  methods: {
    unPublishDevice(item) {
      console.log(item);
    },
    publishDevice(item) {
      let formData = new FormData();
      formData.append("device", item.id);
      axios
        .post(`e-hold/v1/publish/create/`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(() => {
          setTimeout(() => {
            // this.status = true;
            AlertMe({
              title: `Successfully published ${item.name} to public!`,
              type: "success",
            });
          }, 2000);
        })
        .catch((error) => {
          AlertMe({
            title: `Something went wrong. Err(${error.response.status})`,
          });
        });
    },
  },
};
</script>
<style scoped>
.offline {
  @apply bg-site-yellow-5 text-site-yellow-1;
}
.online {
  @apply bg-site-gray-5 text-site-green-1;
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
