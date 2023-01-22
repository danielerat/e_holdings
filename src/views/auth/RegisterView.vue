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
              <form id="form" @submit.prevent="checkForm2" action="text.com">
                <!-- Basic Information of the User National Id Phone number -->
                <div v-if="step == 1" class="relative w-full mb-3">
                  <input-text
                    id="nationalId"
                    placeholder="119..."
                    label="National Id"
                    size="lg"
                    v-bind:data="nationalId"
                    v-on:update="nationalId = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.nationalId"
                  >
                    <span>{{ this.errors.nationalId }}</span>
                  </span>
                </div>

                <div v-if="step == 1" class="relative w-full mb-3">
                  <input-text
                    id="phoneNumber"
                    placeholder="07...."
                    label="Phone Number"
                    size="lg"
                    v-bind:data="phoneNumber"
                    v-on:update="phoneNumber = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.phoneNumber"
                  >
                    <span>{{ this.errors.phoneNumber }}</span>
                  </span>
                </div>

                <!-- Account Verification We send some Kind of code to the user -->
                <div v-if="step == 2" class="relative w-full mb-3">
                  <input-text
                    id="verificationCode"
                    placeholder="Your Verification Code"
                    size="lg"
                    :label="'Enter Code Send to: ' + phoneNumber"
                    v-bind:data="verificationCode"
                    v-on:update="verificationCode = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.verificationCode"
                  >
                    <span>{{ this.errors.verificationCode }}</span>
                  </span>
                </div>

                <!-- Password Setup -->
                <div v-if="step == 3" class="relative w-full mb-3">
                  <input-text
                    id="password"
                    placeholder="Create Your password"
                    size="lg"
                    type="password"
                    label="Create Your password "
                    v-bind:data="password"
                    v-on:update="password = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.password"
                  >
                    <span>{{ this.errors.password }}</span>
                  </span>
                </div>
                <!-- Accound Successfully Created -->
                <div v-if="step == 4">
                  <div class="w-2/3 mx-auto">
                    <h3
                      class="font-bold text-lg mb-3 leading-5 text-site-gray-1 dark:text-site-yellow-3"
                    >
                      Account Successfully Created!
                      <router-link
                        :to="`/${$i18n.locale}/login`"
                        class="text-site-green-3"
                      >
                        {{ $t("btn.signIn") }}
                      </router-link>
                    </h3>
                    <img
                      class="w-2/3 mx-20"
                      :src="accountCreationSuccessPicture"
                    />
                  </div>
                </div>

                <div v-if="step == 1">
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

                <div v-if="step !== 4" class="text-center mt-6">
                  <button
                    class="bg-site-gray-2 text-site-white-5 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-site-gray-1 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Create Account
                  </button>
                  <button @click="checkForm2">Testing</button>
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
import axios from "axios";
// import nextElementInList from "@/utils/nextElementInList.js";
import AlertMe from "@/utils/alerts";
import generateVerificationCode from "@/utils/generateVerificationCode.js";
import FilterUserInfo from "@/utils/FilterUserInfo.js";
import getUserInfo from "@/api/getUserInfo.js";
import createUser from "@/api/createUser.js";
// Regular Expressions
import CheckPhone from "@/utils/CheckPhone";
import CheckId from "@/utils/CheckId";
import CheckPassword from "@/utils/CheckPassword";

import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterSimple from "@/components/Admin/Footers/AdminFooter.vue";
import StepForm from "@/components/shared/StepForm.vue";
import InputText from "@/components/shared/InputText.vue";
import accountCreationSuccessPicture from "@/assets/img/account_success_creation.svg";

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
      nationalId: "1199880049682119",
      phoneNumber: "0786186876",
      verificationCode: "",
      password: "",
      errors: {
        nationalId: "",
        phoneNumber: "",
        verificationCode: "",
        password: "",
      },
      accountCreationSuccessPicture,
      step: 1,
      inTouchUsername: "danielerat",
      inTouchPassword: "GUcR@.xY59VypWh",
<<<<<<< HEAD
      users: "",
      code: null,
=======
      inTouchVerifCode: "",
      code: [],
>>>>>>> f073a85f70df81d49f22fe9e1c5042dbec2f5961
    };
  },
  computed: {},

  methods: {
<<<<<<< HEAD
    testingIntouch() {
      //   let data = {
      //     recipients: this.phoneNumber,
      //     message: `From E-holdings. Hello, this is your verification code: ${this.code}`,
      //     sender: "25228",
      //     username: this.inTouchUsername,
      //     password: this.inTouchPassword,
      //   };
=======
    createVerificationCode() {
      for (let i = 0; i < 6; i++) {
        this.inTouchVerifCode = Math.floor(Math.random() * 9) + 1;
        this.code.push(this.inTouchVerifCode);
      }
    },
    verifyWithIntouch(phone) {
      let data = {
        recipients: phone,
        message: `Hello, this is your verification code: ${this.code}`,
        sender: "E-Holdings",
        username: this.inTouchUsername,
        password: this.inTouchPassword,
      };
>>>>>>> f073a85f70df81d49f22fe9e1c5042dbec2f5961
      axios
        .post(
          `https://www.intouchsms.co.rw/api/sendsms/.json?username=danielerat&password=GUcR@.xY59VypWh&senderid=25228&recipients=0736186836&message=this is the dark night`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
<<<<<<< HEAD

    async createAccount(data) {
      return await createUser(data, this.password);
    },
=======
    // checkForm2: async function () {
    //   let formData = new FormData();
    //   formData.append("email", "rukaraRwa@gmail.com");
    //   formData.append("nid", "1199980046040099");
    //   formData.append("password", "rukaraRwa@gmail.com");
    //   formData.append("phone", "0783307211");
    //   formData.append("name", "Rukara rwa Bishingwe");

    //   await axios
    //     .post("e-hold/v1/register/", formData)
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error.response.status);
    //     });
    // },
>>>>>>> f073a85f70df81d49f22fe9e1c5042dbec2f5961
    checkForm: function (e) {
      if (CheckPhone(this.phoneNumber) && CheckId(this.nationalId)) {
        // Your Phone Number and ID are Good
        if (this.step == 1) {
<<<<<<< HEAD
          // Check if they exists to NIDA DB
          let matchingUser = FilterUserInfo(
            this.users,
            this.phoneNumber,
            this.nationalId
          );
          if (matchingUser.length > 0) {
            // matchingUser.add({ password: this.password });

            axios
              .get(`e-hold/v1/user/by/${this.nationalId}`)
              .then((response) => {
                if (response.status === 200) {
                  AlertMe({
                    title:
                      "User Having this account already exists, Try logging in",
                    type: "info",
                  });
                } else {
                  AlertMe({
                    title: "Enter The verification code you received below",
                    type: "info",
                  });
                  // Change Step form to go to the second step
                  this.step = 2;
                }
                console.log(response.data);
              })
              .catch(() => {
                AlertMe({
                  title: "Enter The verification code you received below",
                  type: "info",
                });
                // Change Step form to go to the second step
                this.step = 2;
              });
          } else {
            // User Does not Exists to NIDA DB
            AlertMe({
              title: "User Does not exist to nida",
              type: "error",
            });
          }
=======
          this.verifyWithIntouch(this.phoneNumber);
          setTimeout(() => {
            AlertMe({
              title: "Enter The verification code you received below",
              type: "info",
            });
          }, 2500);
          // Change Step form to go to the second step
          this.step = 2;
>>>>>>> f073a85f70df81d49f22fe9e1c5042dbec2f5961
        }

        //Check verification code and change step
        if (this.step == 2) {
          //   Send the code to message here

          if (this.verificationCode === this.code && this.step == 2) {
            // Change Step form to go to the second step
            this.step = 3;
            AlertMe({
              title: "Enther Your Password :)",
              type: "success",
            });
          } else if (this.verificationCode != "") {
            this.errors.verificationCode = "* Invalid verification code.";
            AlertMe({
              title: "Enter A verification code send to your phone",
              type: "error",
            });
          }
        }

        //Create Password
        if (this.step == 3) {
          if (CheckPassword(this.password)) {
            // Correct password, accound can be created
            let matchingUser = FilterUserInfo(
              this.users,
              this.phoneNumber,
              this.nationalId
            );
            this.createAccount(matchingUser[0]);
            this.step = 4;
            AlertMe({
              title: "Account Successfully Created",
              type: "success",
            });
          } else if (this.password != "") {
            this.errors.password =
              "* Must include:( Special character,letter,number) ";
            AlertMe({
              title: "Password Not Strong Enough",
              type: "error",
            });
          }
        }
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
  },
  async mounted() {
    this.users = await getUserInfo();
    this.code = generateVerificationCode();
    this.testingIntouch();
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
