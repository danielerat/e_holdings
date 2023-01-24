<template>
  <section class="text-gray-400 body-font">
    <div class="container mx-auto">
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 flex-col"
        :class="pos ? 'sm:flex-row' : 'sm:flex-row-reverse'"
      >
        <!-- Device Category -->
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mx-10 inline-flex items-center justify-center rounded-full text-site-gray-2 bg-site-white-3 flex-shrink-0"
        >
          <fa
            v-if="type == 'computer'"
            icon="laptop"
            class="md:text-6xl text-4xl"
          />
          <fa
            v-else-if="type == 'phone'"
            icon="mobile-button"
            class="md:text-6xl text-4xl"
          />
          <fa
            v-else-if="type == 'electronic'"
            icon="plug"
            class="md:text-6xl text-4xl"
          />
        </div>
        <!-- Description -->
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-site-gray-2 font-bold text-xl title-font mb-2">
            {{ name }}
          </h2>
          <div class="flex justify-around">
            <a
              v-if="from"
              class="mt-3 text-site-gray-3 inline-flex items-center"
            >
              <span>{{ from }}&nbsp;</span>
              <fa icon="share" />
            </a>
            <a class="align-top text-xs text-site-green-2 items-center">
              <p v-if="date" class="font-bold">
                <fa icon="calendar-day" />
                &nbsp;{{ formatDate(date) }}
              </p>
              <p v-if="model">{{ model }}</p>
            </a>
          </div>
          <p class="leading-relaxed text-base mr-3">
            <slot></slot>
          </p>

          <div class="mt-5">
            <div v-if="accepted == false" class="flex justify-around">
              <!-- Base -->
              <action-button
                type="tertiary"
                size="sm"
                text="Accept Incoming Device"
                frontIcon="circle-check"
                :isAnimated="showProgressAccept"
                animatedType="spin"
                @click="approveDeviceTransfer(transfer)"
              />

              <action-button
                type="yellow-clear"
                size="sm"
                text="Decline Incoming Device"
                frontIcon="xmark-circle"
                @click="declineDeviceTransfer(transfer)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Alert from "@/utils/alerts";

import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  components: {
    ActionButton,
  },
  props: {
    transfer: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "phone",
      validator(value) {
        return ["computer", "phone", "electronic"].includes(value);
      },
    },
    pos: {
      type: Boolean,
      required: false,
      default: false,
    },
    date: {
      type: String,
      required: true,
      default: "December-25-2021",
    },
    model: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: false,
      default: "MacBook Pro 2021",
    },
    from: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      accepted: false,
      showProgressAccept: false,
      showProgressDecline: false,
    };
  },
  methods: {
    approveDeviceTransfer(item) {
      this.showProgressAccept = true;
      let formData = new FormData();
      formData.append("transfer_status", "approved");
      axios
        .put(`e-hold/v1/transfer/actions/${item.id}/`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          Alert({
            title: `Device transfer of #${item.id} approved!`,
            type: "success",
          });
          this.showProgressAccept = false;
          console.log(response.data);
          this.accepted = true;
        })
        .catch((error) => {
          Alert({
            title: `Error approving device #${item.id}!`,
            type: "error",
          });
          console.log(error);
          this.showProgressAccept = false;
        });
    },
    declineDeviceTransfer: function (item) {
      this.showProgressDecline = true;
      this.$store
        .dispatch("declineDeviceTransfer", item)
        .then(() => {
          this.$store.dispatch("fetchAllTransfers");
          Alert({
            title: `Device transfer of #${item.id} declined!`,
            type: "error",
          });
          this.showProgressDecline = false;
          this.accepted = true;
        })
        .catch((error) => {
          Alert({
            title: `Couldn't decline this transfer. Try again. Error(${error.response.status})`,
            type: "error",
          });
          this.showProgressDecline = false;
        });
    },
    formatDate(d) {
      const date = new Date(d);
      let year = date.getFullYear();
      let day = date.getDate();
      let month = date.toLocaleString("default", { month: "short" });
      return month + " " + day + ", " + year;
    },
  },
};
</script>

<style></style>
