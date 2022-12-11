<template>
  <footer class="relative bg-site-white-5 dark:bg-site-gray-1 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full {icabsolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-site-gray-1 fill-current dark:text-site-yellow-3"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div
          class="w-full lg:w-6/12 px-4 text-site-gray-1 dark:text-site-yellow-4"
        >
          <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2">
            Find us on any of these platforms, we respond within 24 hours.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
              class="bg-site-green-5 text-site-gray-1 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <fa :icon="['fab', 'youtube']" />
            </button>
            <button
              class="bg-site-green-5 text-site-gray-1 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <fa :icon="['fab', 'twitter']" />
            </button>
            <button
              class="bg-site-green-5 text-site-gray-1 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <fa :icon="['fab', 'facebook']" />
            </button>
            <button
              class="bg-site-green-5 text-site-gray-1 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <fa :icon="['fab', 'whatsapp']" />
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-site-gray-3 dark:text-site-yellow-2 text-sm font-semibold mb-2"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    :to="`/${$i18n.locale}/about`"
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                  >
                    About Us
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="`/${$i18n.locale}/support`"
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                  >
                    FAQ
                  </router-link>
                </li>
                <li>
                  <a
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                    href=""
                  >
                    Location
                  </a>
                </li>
                <li>
                  <router-link
                    :to="`/${$i18n.locale}/check-device`"
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                  >
                    Check Device
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-site-gray-3 dark:text-site-yellow-2 text-sm font-semibold mb-2"
              >
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                    href=""
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                    href=""
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <router-link
                    :to="`/${$i18n.locale}/contact`"
                    class="text-site-gray-1 hover:text-site-gray-2 font-semibold block pb-2 text-sm dark:text-site-yellow-4 dark:hover:text-site-yellow-3"
                  >
                    Contact Us
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div
            class="text-sm text-site-gray-1 dark:text-site-yellow-4 font-semibold py-1"
          >
            Copyright © {{ date }} E-Holdings.
            <!-- <a href="#" class="text-site-gray-1 dark:text-site-yellow-4 hover:text-site-gray-2" dark:hover:text-site-yellow-3>
              Enforcement
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
