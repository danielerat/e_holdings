<template>
  <index-navbar />
  <section class="py-24 lithopedion">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-site-white-4 border-0"
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
              <form>
                <div class="relative w-full mb-3">
                  <label
                    class="block text-site-gray-1 text-xs font-bold mb-2"
                    htmlFor="national_id"
                  >
                    Phone Number
                  </label>
                  <input
                    id="national_id"
                    type="text"
                    required
                    class="border-0 px-3 py-3 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Your phone number"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block text-site-gray-1 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    :type="show ? 'password' : 'text'"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Your password"
                    required
                  />
                  <fa
                    @click="show = !show"
                    :icon="eyeIcon()"
                    class="text-2xl text-site-gray-2 absolute bottom-3 right-3"
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
                        Sign up
                      </router-link>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <input
                    type="submit"
                    value="Login"
                    @click="Authentication"
                    class="bg-site-gray-2 text-site-white-5 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-site-gray-1 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  />
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
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterSimple from "@/components/Admin/Footers/AdminFooter.vue";

export default {
  name: "Index",
  data() {
    return {
      show: true,
    };
  },
  components: {
    FooterSimple,
    IndexNavbar,
  },
  methods: {
    eyeIcon() {
      if (this.show) return "eye";
      return "eye-slash";
    },
    Authentication() {
      const Toast = this.$swal.mixin({
        toast: true,
        timer: 5000,
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "Unknwon username or password",
        // text: "Something went wrong!",
      });
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
