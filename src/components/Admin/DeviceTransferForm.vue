<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/6 md:pr-16 lg:pr-0 pr-0">
        <h1
          class="title-font font-medium text-3xl text-site-gray-3"
          v-if="device !== ''"
        >
          {{ device.name }}
        </h1>
        <p class="leading-relaxed mt-4">
          {{ device.desc }}
        </p>
      </div>
      <div
        class="lg:w-3/6 bg-site-yellow-5 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <!-- Step -->
        <step-mark></step-mark>
        <!-- Step -->
        <h2 class="text-site-gray-3 text-lg font-medium title-font my-5">
          Transfer the Ownsership
        </h2>
        <div class="relative my-4">
          <input-text
            type="text"
            name="id"
            label="Phone Number"
            placeholder="Phone Number"
            size="lg"
            v-model="user.phone"
          ></input-text>
        </div>
        <div class="relative mb-4">
          <input-text
            name="id"
            label="National ID"
            placeholder="ID/Passport"
            size="lg"
            v-model="user.nid"
          ></input-text>
        </div>
        <action-button
          type="primary"
          frontIcon="share"
          size="md"
          text="btn.confirm"
        ></action-button>
        <p class="text-xs text-site-yellow-2 mt-3">
          You are about to give the ownership of this device, you won't be able
          to revert this action.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import ActionButton from "@/components/shared/ActionButton.vue";
import InputText from "@/components/shared/InputText.vue";
import StepMark from "@/components/shared/StepMark.vue";
export default {
  name: "DeviceTransferForm",
  components: {
    ActionButton,
    InputText,
    StepMark,
  },
  data() {
    return {
      device: "",
      user: {
        phone: "",
        nid: "",
      },
    };
  },
  created() {
    this.getDevice(this.$route.params.uuid);
    this.$store.dispatch("getCurrentUser");
  },
  methods: {
    getDevice(uuid) {
      axios
        .get(`e-hold/v1/device/${uuid}/`)
        .then((response) => {
          this.device = response.data;
        })
        .catch((error) => {
          console.log(error.response.status);
        });
    },
  },
};
</script>
