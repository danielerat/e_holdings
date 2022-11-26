<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 lithopedion"
  >
    <div class="rounded-t bg-site-green-5 mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-site-gray-1 text-xl font-bold">My account</h6>
        <button
          class="bg-site-green-1 hover:bg-site-green-2 text-white active:bg-site-green-3 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit-Settings
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
        <div class="flex flex-wrap">
          <input-text
            placeholder="088..."
            label="Phone Number"
            name="phone"
            value=""
            readonly="true"
          />
          <input-text
            placeholder="119.."
            label="National Id"
            name="national_id"
            value=""
            readonly="true"
          />

          <input-text
            placeholder="119.."
            label="First Name"
            name="first_name"
            value=""
            readonly="true"
          />
          <input-text
            placeholder="119.."
            label="Last Name"
            name="last_name"
            value=""
            readonly="true"
          />
        </div>

        <hr class="mt-6 border-b-1 border-site-white-2" />

        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <input-text
              placeholder="KN 123 Str Mumbere Mosque House 1"
              label="Address"
              name="address"
              value=""
              size="lg"
              readonly="true"
            />
          </div>

          <div class="flex flex-nowrap">
            <input-text
              placeholder=".."
              label="Province"
              name="province"
              value=""
              readonly="true"
            />
            <input-text
              placeholder=" .."
              label="District"
              name="province"
              value=""
              readonly="true"
            />
            <input-text
              placeholder=" .."
              label="Sector"
              name="province"
              value=""
              readonly="true"
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
                readonly
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
import InputText from "@/components/shared/InputText.vue";
export default {
  name: "UserSettings",
  components: {
    InputText,
  },
};
</script>
<style scoped>
.lithopedion {
  background: #f0f4f8 url("@/assets/img/wavelayer.svg") top no-repeat;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
