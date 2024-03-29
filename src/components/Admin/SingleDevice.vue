<template>
  <div>
    <section class="py-10 text-gray-600 body-font">
      <div
        class="container px-5 mx-auto flex items-center md:flex-row flex-col"
      >
        <div
          class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
        >
          <h2
            class="text-xs text-site-yellow-3 tracking-widest font-medium title-font mb-1"
          >
            INFORM THE AUTHORITIES
          </h2>
          <h1
            class="md:text-3xl text-2xl font-medium title-font text-site-gray-1 dark:text-site-white-4"
          >
            Report Your Device For Assistence
          </h1>
          <h2
            class="w-3/4 text-sm text-center text-site-gray-4 tracking-widest font-medium title-font mb-1"
          >
            Report Your device if lost or stolen so that no one would be able to
            legally sell it anywhere
          </h2>
        </div>
        <div
          class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"
        >
          <button
            class="bg-site-yellow-5 inline-flex py-3 px-5 rounded-lg items-center hover:bg-site-yellow-4 focus:outline-none cursor-pointer"
            @click="reportOnToggle"
          >
            <fa icon="flag" class="text-site-yellow-1" />
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">Lost or Stolen</span>
              <span class="title-font font-medium">Report your Device</span>
            </span>
          </button>

          <action-button
            v-if="deviceAvailabilityStatus === 'inactive'"
            type="primary"
            size="lg"
            text="btn.reportFound"
            frontIcon="circle-check"
            :isAnimated="showProgressActive"
            animatedType="spin"
            @click="reportDevice(device, 'active')"
          />
          <action-button
            v-else
            type="yellow-clear"
            size="lg"
            text="btn.reportDead"
            frontIcon="circle-info"
            :isAnimated="showProgressDead"
            animatedType="spin"
            @click="reportDevice(device, 'inactive')"
          />
        </div>
      </div>
      <custom-modal :toggle="this.modalIsOpen" @CloseModal="CloseModal">
        <!-- The two buttons to report lost or stolen -->
        <div class="flex justify-around">
          <action-button
            type="quaternary"
            size="md"
            text="btn.reportLost"
            frontIcon="circle-check"
            :isAnimated="showProgressLost"
            animatedType="spin"
            @click="reportDevice(device, 'lost')"
          />
          <action-button
            type="yellow-clear"
            size="md"
            text="btn.reportStolen"
            frontIcon="circle-info"
            :isAnimated="showProgressStolen"
            animatedType="spin"
            @click="reportDevice(device, 'stolen')"
          />
        </div>
      </custom-modal>
    </section>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-3 py-10 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap justify-around">
          <div
            class="relative lg:w-1/2 w-full lg:p-10 lg:py-6 mb-6 lg:mb-0 bg-no-repeat place-self-center dark:bg-site-white-1"
            :style="{ backgroundImage: 'url(' + picture + ')' }"
          >
            <h2
              class="text-sm title-font text-site-gray-2 tracking-widest dark:text-site-gray-1"
            >
              Device Name
            </h2>
            <h1
              class="text-site-gray-1 text-3xl title-font font-bold mb-4 dark:text-site-yellow-3 drop-shadow-lg"
            >
              {{ device.name }}
            </h1>
            <div class="flex mb-4">
              <a
                class="flex-grow text-site-gray-1 border-b-2 border-site-gray-3 py-2 text-lg px-1 dark:text-site-white-1"
              >
                Description
              </a>
            </div>
            <p class="leading-relaxed mb-4">
              {{ device.desc }}
            </p>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-site-gray-3">Model:</span>
              <span
                class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
              >
                {{ device.device_model }}
              </span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-site-gray-3">Serial Number</span>
              <span
                class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
              >
                {{ device.serial_number }}
              </span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-site-gray-3">Mac Address</span>
              <span
                class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
              >
                {{ device.mac_address }}
              </span>
            </div>
            <!-- <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                Frw 325,000
              </span>
            </div> -->
            <span
              class="absolute bg-site-white-3 text-site-gray-1 right-0 top-0 rounded-full px-3 title-font py-1.5 text-sm font-medium dark:bg-site-gray-1 dark:text-site-yellow-3"
            >
              {{ formatPrice(device.price) }}
            </span>
            <div class="container">
              <div class="flex justify-around">
                <action-button
                  type="tertiary"
                  size="sm"
                  text="btn.ownership"
                  frontIcon="download"
                  @click="downloadOwnership(device)"
                />

                <router-link
                  :to="`/${$i18n.locale}/admin/transfer/${device.uuid}`"
                >
                  <action-button
                    type="tertiary"
                    size="sm"
                    text="btn.transfer"
                    frontIcon="share"
                  />
                </router-link>
              </div>
            </div>
          </div>
          <img
            alt="image"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            :src="device.main_image === null ? mac : device.main_image"
          />
        </div>
      </div>
    </section>

    <div class="mb-6 text-center">
      <h2
        class="text-xs text-site-yellow-3 tracking-widest font-medium title-font mb-1"
      >
        YOUR DEVICE TIMELINE
      </h2>
      <h1
        class="md:text-3xl text-2xl font-medium title-font text-site-gray-1 dark:text-site-white-4"
      >
        History of Ownership
      </h1>
    </div>
    <device-timeline :timeline="timeline"></device-timeline>
    <div ref="pdfContent"></div>
  </div>
</template>

<script>
import axios from "axios";
import CustomModal from "@/components/shared/CustomModal";
import { mapState } from "vuex";
import Alert from "@/utils/alerts";
import ownershipPdf from "@/utils/ownershipPdf";
import contractPdf from "@/utils/contractPdf";
import DeviceTimeline from "@/components/Admin/DeviceTimeline.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import mac from "@/assets/img/mac.png";
import picture from "@/assets/img/waveblue.svg";
export default {
  name: "SingleDevice",
  props: {
    device: {
      type: Object,
      required: true,
    },
    timeline: {
      type: Object,
      required: true,
    },
  },
  components: {
    DeviceTimeline,
    ActionButton,
    CustomModal,
  },
  data() {
    return {
      picture,
      mac,

      deviceOwner: "",

      //   Active and Inactive Device
      showProgressActive: false,
      showProgressDead: false,
      showProgressLost: false,
      showProgressStolen: false,
      modalIsOpen: false,
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
    // Reactive element to togle the buttons from active to inactive
    deviceAvailabilityStatus() {
      return this.device.availability;
    },
    isModalVisible() {
      return this.modalIsOpen;
    },
  },
  created() {
    this.$store.dispatch("getCurrentUser");
  },
  methods: {
    downloadContract(item) {
      let data = {
        device: {
          name: item.name,
          model: item.device_model,
          serial: item.serial_number,
        },
        owner: this.userInfo.name,
        date: this.formatDate(item.date_of_creation),
        action: "open",
      };
      contractPdf(data);
    },
    downloadOwnership(item) {
      let data = {
        device: {
          name: item.name,
          model: item.device_model,
          serial: item.serial_number,
        },
        owner: this.userInfo.name,
        date: this.formatDate(item.date_of_creation),
        action: "open",
      };
      ownershipPdf(data);
    },
    async getDeviceOwner(id) {
      await axios
        .get(`e-hold/v1/user/${id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          this.deviceOwner = response.data;
        })
        .catch((error) => {
          console.log(error.response.status);
        });
    },
    async reportDevice(item, status) {
      let formData = new FormData();

      this.showProgressActive = true;
      if (status == "active") {
        this.showProgressActive = true;
        formData.append("availability", "active");
      } else if (status == "inactive") {
        this.showProgressDead = true;
        formData.append("availability", "inactive");
      } else if (status == "lost") {
        this.showProgressLost = true;
        formData.append("availability", "lost");
      } else if (status == "stolen") {
        this.showProgressStolen = true;
        formData.append("availability", "stolen");
      }

      await axios
        .put(`e-hold/v1/device/actions/${item.id}/`, formData, {})
        .then(() => {
          setTimeout(() => {
            Alert({
              title: `Successfully added ${item.name} to Inactive devices!`,
              type: "success",
            });
            // Emits to the parent so that the device.availability can change it's status
            this.updateDeviceAvailability(formData.get("availability"));
            this.showProgressActive = false;
            this.showProgressStolen = false;
            this.showProgressDead = false;
            this.showProgressLost = false;
          }, 2500);
        })
        .catch((error) => {
          console.log(error);
          this.showProgressActive = false;
          this.showProgressStolen = false;
          this.showProgressDead = false;
          this.showProgressLost = false;
        });
    },
    formatDate(d) {
      const date = new Date(d);
      let year = date.getFullYear();
      let day = date.getDate();
      let month = date.toLocaleString("default", { month: "short" });
      return month + " " + day + ", " + year;
    },
    formatPrice(price) {
      let formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "RWF",
      }).format(price);
      return formatted;
    },
    // Method to emit status to the parent component so that the child can change
    updateDeviceAvailability(status) {
      this.$emit("updateDeviceAvailability", status);
    },

    reportOnToggle() {
      this.modalIsOpen = !this.modalIsOpen;
    },
    CloseModal() {
      this.modalIsOpen = false;
    },
  },
};
</script>
