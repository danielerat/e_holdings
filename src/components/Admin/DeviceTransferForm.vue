<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/6 md:pr-16 lg:pr-0 pr-0">
        <h1
          class="title-font font-medium text-3xl text-site-gray-3"
          v-if="device !== ''"
        >
          {{ device.name }} {{ userInfo }}
        </h1>
        <p class="leading-relaxed mt-4">
          {{ device.desc }}
        </p>
      </div>
      <div
        class="lg:w-3/6 bg-site-yellow-5 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <!-- Step -->
        <step-mark :step="step"></step-mark>
        <!-- Step -->
        <h2 class="text-site-gray-3 text-lg font-medium title-font my-5">
          Transfer the Ownsership
        </h2>
        <form @submit.prevent="checkForm" action="text.com">
          <div v-if="step === 1" class="relative my-4">
            <input-text
              type="text"
              name="id"
              label="Phone Number"
              placeholder="Phone Number"
              size="lg"
              v-bind:data="user.phone"
              v-on:update="user.phone = $event"
            ></input-text>
          </div>
          <div v-if="step === 1" class="relative mb-4">
            <input-text
              name="id"
              label="National ID"
              placeholder="ID/Passport"
              size="lg"
              v-bind:data="user.nid"
              v-on:update="user.nid = $event"
            ></input-text>
          </div>
          <div v-if="step === 2">
            <p>The transferee: {{ transferee }}...</p>
          </div>
          <div v-if="step === 3">
            <h2>Device Transfered!</h2>
          </div>
          <action-button
            type="primary"
            :isAnimated="showProgress"
            animatedType="spin"
            frontIcon="share"
            size="md"
            text="btn.confirm"
          ></action-button>
        </form>
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
import AlertMe from "@/utils/alerts";
import { mapState } from "vuex";
// // Regular Expressions
import CheckPhone from "@/utils/CheckPhone";
import CheckId from "@/utils/CheckId";
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
      deviceOwner: "",
      transferee: "",
      user: {
        phone: "",
        nid: "",
      },
      step: 1,
      showProgress: false,
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
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

    checkForm: async function (e) {
      if (CheckPhone(this.user.phone) || CheckId(this.user.nid)) {
        this.showProgress = true;
        if (this.step === 1) {
          AlertMe({
            title: "checking if user is user",
            type: "info",
          });
          // Change Step form to go to the second step
          // Get the user
          this.retrieveUser(this.user.nid);
          this.showProgress = false;
          this.step = 2;
        } else if (this.step === 2) {
          this.showProgress = true;
          await this.doTransfer();
          this.step = 3;
          this.showProgress = false;
        }
      } else {
        AlertMe({
          title: "Something wrong with the NID and/or Phone",
          type: "error",
        });
      }
      e.preventDefault();
    },
    async retrieveUser(nid) {
      if (nid) {
        await axios
          .get(`e-hold/v1/user/by/${nid}/`)
          .then((response) => {
            this.transferee = response.data.id;
          })
          .catch((error) => {
            console.log(error.response.status);
          });
      }
    },
    async doTransfer() {
      this.showProgress = true;
      await axios
        .post(
          `e-hold/v1/transfer/create/`,
          {
            device: this.device.id,
            transferor: this.userInfo.id,
            transferee: this.transferee,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          AlertMe({
            title: "Your device successfully transfered!",
            type: "success",
          });
          this.showProgress = false;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          console.log(`Error(${error.message})`);
        });
    },
  },
};
</script>
