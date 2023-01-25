<template>
  <custom-modal :toggle="this.modalIsOpen" @CloseModal="CloseModal">
    <!-- The two buttons to report lost or stolen -->
    <div class="text-left">
      <p class="text-site-gray-1 font-bold mb-5">
        Terms of Use for Device Registration and Tracking:
      </p>
      <ul class="list-disc text-sm">
        <li>
          By registering a device with our system, you confirm that the device
          is your property and you have the legal right to register it.
        </li>

        <li>
          You understand and agree that you will be solely responsible for any
          use or misuse of the registered device, and that you will not deny any
          implication or responsibility related to the device.
        </li>

        <li>
          You agree that the device is not stolen and that you will not use it
          for any illegal activities.
        </li>

        <li>
          You acknowledge that our system is provided "as is" and we do not
          guarantee the accuracy or completeness of the information provided
          through the system.
        </li>

        <li>
          We reserve the right to terminate your use of the system or remove any
          registered device from the system at any time, without notice, and for
          any reason, including but not limited to violation of these terms.
        </li>

        <li>
          By using our system, you agree to be bound by these terms and any
          future modifications to them. If you do not agree to these terms, you
          may not use our system.
        </li>
      </ul>
    </div>
  </custom-modal>
  <div class="w-full py-5 bg-site-green-4 rounded-t-lg">
    <div class="flex justify-around">
      <div
        class="flex w-14 hover:bg-site-green-3 h-14 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <fa icon="mobile-button" class="text-3xl text-site-gray-1"></fa>
        </button>
      </div>
      <div
        class="flex w-14 hover:bg-site-green-3 h-14 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <fa icon="laptop" class="text-3xl text-site-gray-1"></fa>
        </button>
      </div>
      <div
        class="flex w-14 hover:bg-site-green-3 h-14 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <fa icon="plug" class="text-3xl text-site-gray-1"></fa>
        </button>
      </div>
    </div>
  </div>

  <div class="lithopedion p-4 rounded-b-lg bg-site-gray-1">
    <form>
      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
      <div class="flex flex-wrap">
        <input-text
          v-if="userInfo"
          placeholder="078..."
          type="text"
          label="Phone Number"
          name="phone"
          v-bind:data="user.phone"
          v-on:update="user.phone = $event"
          :readonly="userInfo.account_type === 'business' ? false : true"
        />
        <input-text
          placeholder="119.."
          label="National ID"
          name="national_id"
          type="number"
          v-bind:data="user.nid"
          v-on:update="user.nid = $event"
        />
      </div>

      <hr class="mt-6 border-b-1 border-site-white-2" />

      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">Device Information</h6>
      <div class="flex flex-wrap">
        <input-select-list
          label="Category"
          name="category"
          :options="options"
          v-model="device.category"
        />

        <input-text
          id="name"
          placeholder="Product Name"
          size="md"
          type="text"
          label="Product Name"
          v-bind:data="device.name"
          v-on:update="device.name = $event"
        />
        <input-text
          type="text"
          placeholder="Model of the device"
          label="Model "
          name="model"
          v-bind:data="device.model"
          v-on:update="device.model = $event"
        />
        <input-text
          type="text"
          placeholder="Serial Number of the device"
          label="Serial Number"
          name="serial_number"
          v-bind:data="device.serial_number"
          v-on:update="device.serial_number = $event"
        />
        <input-text
          placeholder="IMEI / MAC ADDRESS"
          type="text"
          label="imei "
          name="imei"
          v-bind:data="device.imei"
          v-on:update="device.imei = $event"
        />
        <input-select-list
          label="Warranty"
          name="category"
          :options="warranty"
          v-model="device.warranty"
        />

        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Device Status
            </label>
            <div class="flex flex-row">
              <div class="flex items-center pl-4 rounded dark:border-gray-700">
                <input
                  id="new"
                  type="radio"
                  name="bordered-radio"
                  class="w-4 h-4 accent-site-green-1 bg-gray-100 border-gray-300 focus:ring-site-green-1 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-bind:data="device.status"
                  v-on:update="device.status = $event"
                />
                <label
                  for="new"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  New Device
                </label>
              </div>
              <div class="flex items-center pl-4 rounded">
                <input
                  id="second_hand"
                  type="radio"
                  name="bordered-radio"
                  class="w-4 h-4 accent-site-green-1 bg-gray-100 border-gray-300 focus:ring-site-green-1 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-bind:data="device.status"
                  v-on:update="device.status = $event"
                />
                <label
                  for="second_hand"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Second Hand
                </label>
              </div>
            </div>
          </div>
        </div>

        <input-text
          placeholder="Price in RWf"
          label="Estimated Price"
          name="price"
          type="number"
          v-bind:data="device.price"
          v-on:update="device.price = $event"
        />
      </div>
      <input
        type="file"
        ref="fileInput"
        @change="onImageUpload"
        accept="image/*"
      />
      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">Description</h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Additional Description related to the device
            </label>
            <textarea
              type="text"
              class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
              v-model="device.desc"
            ></textarea>
          </div>
        </div>
      </div>
      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">
        Terms And Conditions
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              I accept All consequences behind this self registration
            </label>

            <div class="flex items-center">
              <input
                v-model="selfRegistrationTerms"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the
                <i
                  class="text-site-green-3 dark:text-site-green-4 hover:underline"
                  @click="openOnClick"
                >
                  self registration terms and conditions
                </i>
                .
              </label>
            </div>
          </div>
        </div>
      </div>

      <action-button
        v-if="selfRegistrationTerms"
        text="btn.giveOwnership"
        type="primary"
        size="md"
        class="table m-auto"
        @click.prevent="createDevice"
      ></action-button>
      <hr class="mt-6 border-b-1 border-site-white-2" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import AlertMe from "@/utils/alerts";
import UploadableFiles from "@/utils/uploadableFiles";
import CustomModal from "@/components/shared/CustomModal";
import { mapState, mapGetters } from "vuex";
import InputSelectList from "@/components/shared/InputSelectList.vue";
import InputText from "@/components/shared/InputText.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  name: "AssignDeviceForm",
  components: {
    InputText,
    ActionButton,
    InputSelectList,
    CustomModal,
  },
  data() {
    return {
      user: {
        phone: "",
        nid: "",
      },
      device: {
        name: "",
        price: "",
        status: "",
        model: "",
        serial_number: "",
        imei: "",
        category: "",
        desc: "",
        warranty: "",
      },
      deviceImage: "",
      selfRegistrationTerms: true,
      fileArray: [],

      options: ["Phone", "Computer", "Tablet", "Whatever"],
      warranty: ["1 Week", "1 Month", "3Months", "6 Months", "9 Months"],
      //Category of item to assign

      //modal Related Codes
      modalIsOpen: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
  created() {
    // Get Current Authenticated user
    this.$store.dispatch("getCurrentUser");
    if (this.userInfo !== null) {
      this.user.phone = this.userInfo.phone;
      this.user.nid = this.userInfo.nid;
    }
  },
  methods: {
    // Uploading the Image
    onImageUpload(e) {
      this.addSingleFile(e.target.files);
      e.target.value = null;
    },
    singleFileExists(otherId) {
      return this.fileArray.some(({ id }) => id === otherId);
    },
    addSingleFile(newFile) {
      let newUploadableFiles = [...newFile]
        .map((file) => new UploadableFiles(file))
        .filter((file) => !this.singleFileExists(file.id));
      if (this.fileArray.length <= 0) {
        this.fileArray = this.fileArray.concat(newUploadableFiles);
      }
    },

    async createDevice() {
      let formData = new FormData();
      formData.append("name", this.device.name);
      formData.append("price", this.device.price);
      formData.append("device_model", this.device.model);
      formData.append("serial_number", this.device.serial_number);
      formData.append("mac_address", this.device.imei);
      formData.append("desc", this.device.desc);
      // Image - Main Image, can be null
      this.fileArray.forEach((file) => {
        formData.append("main_image", file.file);
      });
      await axios
        .post("e-hold/v1/device/create/", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(() => {
          this.resetForm();
          AlertMe({
            title: "Successfully added your device!",
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error);
          AlertMe({
            title: `Something went wrong. Err(${error.response.status})`,
          });
        });
    },
    resetForm() {
      this.device.name = "";
      this.device.price = "";
      this.device.model = "";
      this.device.imei = "";
      this.device.serial_number = "";
      this.device.desc = "";
    },
    // Modal Related Codes
    openOnClick() {
      this.modalIsOpen = !this.modalIsOpen;
    },
    CloseModal() {
      this.modalIsOpen = false;
    },
  },
};
</script>
<style scoped>
.lithopedion {
  background: #cbefc3 url("@/assets/img/wavelayergreen.svg") top no-repeat;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
