<template>
  <div class="w-full py-5 bg-site-yellow-4 rounded-t-lg">
    <div class="flex justify-around">
      <div
        class="flex w-20 hover:bg-site-green-3 h-20 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <fa icon="mobile-button" class="text-5xl text-site-gray-1"></fa>
        </button>
      </div>
      <div
        class="flex w-20 hover:bg-site-green-3 h-20 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <fa icon="laptop" class="text-5xl text-site-gray-1"></fa>
        </button>
      </div>
      <div
        class="flex w-20 hover:bg-site-green-3 h-20 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <fa icon="plug" class="text-5xl text-site-gray-1"></fa>
        </button>
      </div>
    </div>
  </div>

  <div class="lithopedion p-4 rounded-b-lg">
    <form>
      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
      <div class="flex flex-wrap">
        <input-text
          placeholder="088..."
          label="Phone Number"
          name="phone"
          value=""
        />
        <input-text
          placeholder="119.."
          label="National ID"
          name="national_id"
          value=""
          type="number"
        />
      </div>

      <hr class="mt-6 border-b-1 border-site-white-2" />

      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">Device Information</h6>
      <div class="flex flex-wrap">
        <input-select-list
          label="Category"
          name="category"
          :options="options"
        />

        <input-text
          placeholder="Name of your device"
          label="Device Name"
          name="device_name"
          value=""
        />

        <input-text
          placeholder="Model of the device"
          label="Model "
          name="model"
          value=""
        />
        <input-text
          placeholder="Serial Number of the device"
          label="Serial Number"
          name="serial_number"
          value=""
        />
        <input-text
          placeholder="IMEI / MAC ADDRESS"
          label="imei "
          name="imei"
          value=""
        />
        <input-select-list
          label="Category"
          name="category"
          :options="warranty"
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
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 accent-site-green-1 bg-gray-100 border-gray-300 focus:ring-site-green-1 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 accent-site-green-1 bg-gray-100 border-gray-300 focus:ring-site-green-1 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
          placeholder="price: RWf"
          label="Estimated Price"
          name="price"
          value=""
          type="number"
        />
      </div>
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
              readonly
            ></textarea>
          </div>
        </div>
      </div>
      <action-button
        text="btn.giveOwnership"
        type="primary"
        size="md"
        class="table m-auto"
      ></action-button>
      <hr class="mt-6 border-b-1 border-site-white-2" />
    </form>
  </div>
</template>
<script>
import InputSelectList from "@/components/shared/InputSelectList.vue";
import InputText from "@/components/shared/InputText.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  name: "AssignDeviceForm",
  components: {
    InputText,
    ActionButton,
    InputSelectList,
  },
  data() {
    return {
      options: ["Phone", "Computer", "Tablet", "Whatever"],
      warranty: ["1 Week", "1 Month", "3Months", "6 Months", "9 Months"],
      //Category of item to assign
    };
  },
};
</script>
<style scoped>
.lithopedion {
  background: #f0f4f8 url("@/assets/img/wavelayergreen.svg") top no-repeat;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
