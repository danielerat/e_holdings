<template>
  <div
    class="relative rounded-xl bg-site-white-5 border-site-white-3 cursor-pointer p-8 shadow-xl mx-5 my-5 bg-contain bg-no-repeat"
    :style="{ backgroundImage: 'url(' + picture + ')' }"
  >
    <span
      class="absolute top-4 rounded-full py-1.5 text-xs font-medium text-gray-1"
    >
      <p class="font-bold">{{ name }}</p>
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

          <action-button
            v-if="status.status"
            type="tertiary"
            size="sm"
            :isAnimated="animationProgress"
            animatedType="spin"
            text="Unpublish"
            frontIcon="cloud-arrow-down"
            @click="
              unPublishDevice(status.item_id), updateParent(!status.status)
            "
          ></action-button>

          <action-button
            v-else
            type="yellow-clear"
            size="sm"
            :isAnimated="animationProgress"
            animatedType="spin"
            text="publish"
            frontIcon="cloud-arrow-down"
            @click="publishDevice(status.item_id)"
          >
            <span class="text-xs font-medium">Publish&nbsp;</span>
            <fa icon="cloud-arrow-up" />
          </action-button>
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
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  components: { ActionButton },
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
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      published_waved,
      unpublished_wave,
      animationProgress: false,
    };
  },
  computed: {
    picture() {
      if (this.status.status == true) return this.published_waved;
      return this.unpublished_wave;
    },
    typeClass() {
      if (this.status.status == true) {
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
      this.animationProgress = true;
      let formData = new FormData();
      formData.append("isPublished", false);
      axios
        .put(`e-hold/v1/publish/actions/${item}/`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(() => {
          location.reload();
          AlertMe({
            title: `Successfully unpublished ${item.name} to public!`,
            type: "success",
          });
          this.animationProgress = false;
        })
        .catch((error) => {
          AlertMe({
            title: `Something went wrong. Err(${error.response.status})`,
          });
          this.animationProgress = false;
        });
    },
    publishDevice(item) {
      this.animationProgress = true;
      let formData = new FormData();
      formData.append("isPublished", true);
      axios
        .put(`e-hold/v1/publish/actions/${item}/`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(() => {
          AlertMe({
            title: `Successfully unpublished ${item.name} to public!`,
            type: "success",
          });
          this.animationProgress = false;
          location.reload();
        })
        .catch((error) => {
          AlertMe({
            title: `Something went wrong. Err(${error.response.status})`,
          });
          this.animationProgress = false;
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
