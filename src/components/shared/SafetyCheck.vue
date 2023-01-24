<template>
  <div class="mx-auto bg-site-white-4">
    <div class="flex flex-col self-center pt-60">
      <div class="text-center">
        <h1 class="font-light text-6xl text-site-gray-1">
          WANT TO PLAY IT SAFE?
        </h1>
        <h1 class="font-bold text-3xl text-site-green-2">
          CHECK YOUR DEVICE TO MAKE SURE IT'S CLEAN
        </h1>
        <h1 class="text w-4/5 sm:w-1/2 mx-auto text-site-gray-2 px-1 my-5">
          This section will help you check wether the device you are buying has
          beel stolen reported lost or simply belongs to the person claiming so
        </h1>
      </div>
      <div class="max-w-3xl self-center">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <fa icon="search" />
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Serial Number or IMEI"
              v-model="searchString"
            />
          </div>

          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-site-gray-1 rounded-lg border border-site-gray-2 hover:bg-site-gray-2 focus:ring-4 focus:outline-none focus:ring-blue-300"
            @click="searchAnItem"
          >
            <fa icon="search" />
            <span class="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-2/4">
        <device-search-response
          v-if="soughtItem.length !== 0"
          type="negative"
        ></device-search-response>
        <device-search-response
          v-if="soughtItem.length == 0 && searching"
          type="positive"
        ></device-search-response>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import DeviceSearchResponse from "@/components/shared/DeviceSearchResponse";
export default {
  name: "SearchDevice",
  components: {
    DeviceSearchResponse,
  },
  data() {
    return {
      searchString: "",
      searching: false,
    };
  },
  computed: {
    ...mapState({
      devices: (state) => state.devices,
      soughtItem: (state) => state.soughtItem,
    }),
  },
  created() {
    this.$store.dispatch("fetchAllDevices");
  },
  methods: {
    searchAnItem() {
      this.searching = true;
      this.$store.dispatch("lookUpAnItem", {
        searchString: this.searchString,
        devices: this.devices,
      });
    },
  },
};
</script>

<style scoped>
.clp {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
}
</style>
