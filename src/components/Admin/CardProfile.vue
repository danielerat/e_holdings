<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16 lithopedion"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4">
          <div class="relative w-full">
            <img
              alt="..."
              :src="team2"
              class="mx-auto -mt-20 -top-52 md:w-80 w-1/2 shadow-xl rounded-full border-4"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-5">
          <div class="flex justify-center py-4 lg:pt-4<pt-8></pt-8>">
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                v-if="devices"
              >
                {{ devices.length }}
              </span>
              <span class="text-sm text-blueGray-400">Devices</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span
                class="flex flex-row justify-center tracking-wide text-site-gray-2"
              >
                <fa icon="star"></fa>
                <fa icon="star"></fa>
                <fa icon="star"></fa>
                <fa icon="star"></fa>
              </span>
              <span class="text-sm text-blueGray-400">Rating</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              >
                89
              </span>
              <span class="text-sm text-blueGray-400">Deals</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <h3
          class="text-xl font-semibold leading-normal text-blueGray-700 mb-2"
          v-if="userInfo !== null"
        >
          {{ userInfo.name }}
        </h3>
        <div
          class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
        >
          <fa icon="map-marker" class="text-site-gray-2" />
          Kigali Nyarugenge, Biryogo
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
          <fa
            icon="envelope"
            class="text-site-gray-2"
            v-if="userInfo !== null"
          />
          {{ userInfo.email }}
          <br />

          <fa icon="phone" class="text-site-gray-2" />
          {{ userInfo.phone }}
        </div>
        <div class="mb-2 text-blueGray-600">
          <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
          University of Computer Science
        </div>
      </div>
      <div class="mt-10 py-10 border-t border-site-white-2 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-11/12">
            <p class="mb-4 text-lg leading-relaxed text-site-gray-1">
              <fa icon="quote-left" class="text-site-gray-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              neque reprehenderit culpa iste voluptate
              <fa icon="quote-right" class="text-site-gray-2" />
            </p>
            <a href="javascript:void(0);" class="font-normal text-emerald-500">
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import team2 from "@/assets/img/logo.png";

export default {
  name: "CardProfile",
  data() {
    return {
      team2,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      userInfo: (state) => state.userInfo,
      devices: (state) => state.accountDevices,
    }),
  },
  created() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("fetchDevicesPerAccount");
  },
  methods: {},
};
</script>

<style scoped>
.lithopedion {
  /* @apply dark:bg-site-gray-1; */
  background: #f0f4f8 url("@/assets/img/wavelayergreen.svg");
  background-position: right center;
  background-size: cover;
}
</style>
