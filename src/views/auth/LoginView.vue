<template>
  <index-navbar />
  <section class="py-24 lithopedion">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-site-white-4 border-0 dark:bg-site-white-2"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="mb-3">
                <h6 class="text-site-gray-1 text-sm font-bold">
                  <fa icon="fingerprint" class="text-3xl"></fa>
                </h6>
              </div>
              <div class="btn-wrapper">
                <h2 class="font-bold text-lg mb-5 text-site-gray-1">
                  Login to your account
                </h2>
              </div>
              <hr class="mt-4 border-b-1 text-site-gray-1" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form id="form" @submit.prevent="checkForm" method="post">
                <span
                  class="text-xs text-site-yellow-1"
                  v-if="this.errors.length"
                >
                  <span v-for="error in errors" :key="error">{{ error }}</span>
                </span>
                <div class="relative w-full mb-3">
                  <field
                    id="phoneNumber"
                    placeholder="07.."
                    size="lg"
                    type="text"
                    label="Your Phone"
                    v-bind:data="phoneNumber"
                    v-on:update="phoneNumber = $event"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <field
                    id="password"
                    placeholder="What is your password?"
                    size="lg"
                    type="password"
                    label="Your password"
                    v-bind:data="password"
                    v-on:update="password = $event"
                  />
                </div>

                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      Don't have an account?
                      <router-link
                        :to="`/${$i18n.locale}/register`"
                        class="text-site-green-3"
                      >
                        {{ $t("btn.signUp") }}
                      </router-link>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-site-gray-2 text-site-white-5 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-site-gray-1 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Login
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
import AlertMe from "@/utils/alerts";
import CheckPhone from "@/utils/CheckPhone";
// import CheckPassword from "@/utils/CheckPassword";
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterSimple from "@/components/Admin/Footers/AdminFooter.vue";
import Field from "@/components/shared/InputText.vue";

export default {
  name: "Index",
  data() {
    return {
      showPassword: false,
      password: "",
      phoneNumber: "",
      errors: "",
    };
  },
  components: {
    FooterSimple,
    IndexNavbar,
    Field,
  },
  methods: {
    checkForm: function (e) {
      if (CheckPhone(this.phoneNumber)) {
        this.$store
          .dispatch("userSignIn", {
            phone: this.phoneNumber,
            password: this.password,
          })
          .then(() => {
            AlertMe({ title: "Successful Authentication.", type: "success" });
            this.$router.push("/");
            window.location.href = "/";
          })
          .catch((error) => {
            AlertMe({
              title: `Unknown phone number or password. Error(${error.response.status})`,
            });
            console.log(error);
          });
      } else {
        this.errors = "* Error Authenticating";
        AlertMe({ title: "Unknown phone number or password" });
      }
      e.preventDefault();
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
