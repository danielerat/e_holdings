<template>
  <index-navbar />

  <section class="py-24 lithopedion">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-site-white-4 border-0 dark:bg-site-gray-1"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="mb-3">
                <h6
                  class="text-site-gray-1 text-sm font-bold dark:text-site-white-4"
                >
                  Sign up with
                </h6>
              </div>
              <div class="btn-wrapper">
                <h2
                  class="font-bold text-lg mb-5 text-site-gray-1 dark:text-site-white-4"
                >
                  Let's Set your account up
                </h2>
                <step-form :step="step" />
              </div>
              <hr class="mt-4 border-b-1 text-site-gray-1" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form id="form" @submit.prevent="checkForm" action="text.com">
                <div class="relative w-full mb-3">
                  <input-text
                    id="nationalId"
                    placeholder="119..."
                    label="National Id"
                    size="lg"
                    v-on:update:data="nationalId = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.nationalId"
                  >
                    <span>{{ this.errors.nationalId }}</span>
                  </span>
                </div>

                <div class="relative w-full mb-3">
                  <input-text
                    id="phoneNumber"
                    placeholder="07...."
                    label="Phone Number"
                    size="lg"
                    v-on:update:data="phoneNumber = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.phoneNumber"
                  >
                    <span>{{ this.errors.phoneNumber }}</span>
                  </span>
                </div>

                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      checked
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      disabled
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      I agree with the
                      <a href="javascript:void(0)" class="text-site-green-3">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-site-gray-2 text-site-white-5 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-site-gray-1 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-simple />
</template>
<script>
// import nextElementInList from "@/utils/nextElementInList.js";
import AlertMe from "@/utils/alerts";
import CheckPhone from "@/utils/CheckPhone";
import CheckId from "@/utils/CheckId";
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterSimple from "@/components/Admin/Footers/AdminFooter.vue";
import StepForm from "@/components/shared/StepForm.vue";
import InputText from "@/components/shared/InputText.vue";
export default {
  name: "Index",
  components: {
    FooterSimple,
    IndexNavbar,
    StepForm,
    InputText,
  },
  data() {
    return {
      nationalId: "",
      parentMessage: "",
      phoneNumber: "",
      errors: {
        nationalId: "",
        phoneNumber: "",
      },
      step: 1,
    };
  },
  methods: {
    checkForm: function (e) {
      if (CheckPhone(this.phoneNumber) && CheckId(this.nationalId)) {
        // You are good to go
        AlertMe({ title: "Successfull Check", type: "success" });
      } else {
        AlertMe({ title: "Error Signing Up" });
        //    Set the error of the id
        if (!CheckId(this.nationalId)) {
          this.errors.nationalId = "* Ivalid Id";
          console.log(this.errors);
        } else {
          this.errors.nationalId = "";
        }
        //    Set the error of the phone Number
        if (!CheckPhone(this.phoneNumber)) {
          this.errors.phoneNumber = "* Invalid Phone Number";
        } else {
          this.errors.phoneNumber = "";
        }
      }
      e.preventDefault();
    },

    updateNationalId(newMessage) {
      this.nationalId = newMessage;
    },
    updatePhoneNumber(newMessage) {
      this.phoneNumber = newMessage;
    },
  },
};
</script>
<style scoped>
.lithopedion {
  background: #f0f4f8 url("@/assets/img/roadWave.svg") top no-repeat;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
