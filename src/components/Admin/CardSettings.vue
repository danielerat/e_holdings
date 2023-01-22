<template>
  <div
    class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 lithopedion"
  >
    <div class="rounded-t bg-site-yellow-4 mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-site-gray-1 text-xl font-bold">My account</h6>
        <button
          class="bg-site-green-1 hover:bg-site-green-2 text-white active:bg-site-green-3 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="editPersonalSettings"
        >
          Edit Settings
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
        <div class="flex flex-wrap">
          <input-text placeholder="078..." label="Phone Number" name="phone" />
          <input-text
            type="number"
            placeholder="National ID"
            label="National Id"
            name="national_id"
            v-bind:data="info.nid"
            v-on:update="info.nid = $event"
          />

          <input-text
            type="text"
            placeholder="First Name"
            label="First Name"
            name="first_name"
            v-bind:data="info.first_name"
            v-on:update="info.first_name = $event"
          />
          <input-text
            type="text"
            placeholder="Last Name"
            label="Last Name"
            name="last_name"
            v-bind:data="info.last_name"
            v-on:update="info.last_name = $event"
          />
        </div>

        <hr class="mt-6 border-b-1 border-site-white-2" />

        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <input type="text" v-model="name" />
            <input-text
              type="text"
              placeholder="KN 123 St 132"
              label="Address"
              name="address"
              size="lg"
              v-bind:data="contact.address"
              v-on:update="contact.address = $event"
            />
          </div>

          <div class="flex flex-nowrap">
            <input-text
              type="text"
              placeholder="Province"
              label="Province"
              name="province"
              v-bind:data="contact.province"
              v-on:update="contact.province = $event"
            />
            <input-text
              type="text"
              placeholder="Disctrict"
              label="District"
              name="province"
              v-bind:data="contact.district"
              v-on:update="contact.district = $event"
            />
            <input-text
              type="text"
              placeholder="Sector"
              label="Sector"
              name="province"
              v-bind:data="contact.sector"
              v-on:update="contact.sector = $event"
            />
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-site-white-2" />

        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">About Me</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                About me
              </label>
              <textarea
                type="text"
                class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                v-model="info.about"
              >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ipsam saepe voluptatibus reiciendis fugit numquam.
                      </textarea
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState, mapGetters } from "vuex";
import InputText from "@/components/shared/InputText.vue";
export default {
  name: "UserSettings",
  data() {
    return {
      info: {
        first_name: "",
        last_name: "",
        phone: "",
        about: "",
        nid: "",
      },
      contact: {
        address: "",
        province: "",
        district: "",
        sector: "",
      },
      name: "",
    };
  },
  components: {
    InputText,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
  created() {
    // this.name = "Not the samething";
  },
  methods: {
    editPersonalSettings() {
      console.log("editPersonalSettings...");
    },
    editBusinessSettings() {
      console.log("editBusinessSettings...");
    },
  },
};
</script>
<style scoped>
.lithopedion {
  background: #f0f4f8 url("@/assets/img/wavelayergreen.svg");
  background-position: right center;
  background-size: cover;
}
</style>
