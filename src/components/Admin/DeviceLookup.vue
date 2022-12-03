<template>
  <section class="text-gray-600 body-font lithopedion">
    <div
      class="container mx-auto flex flex-col px-5 py-24 justify-center items-center"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        :src="SearchIllustration"
      />
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Not sure about the device you are about to buy?
        </h1>
        <p class="mb-8 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          debitis sapiente nostrum dicta quis exercitationem illum architecto
          voluptas odio sequi molestias maiores maxime, aperiam doloribus, modi
        </p>
        <div class="flex w-full justify-center items-end">
          <div
            class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left"
          >
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
                  required=""
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-site-gray-1 rounded-lg border border-site-gray-2 hover:bg-site-gray-2 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <fa icon="search" />
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
        <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
          <router-link to="check-device" class="text-site-green-2 underline">
            Place to check your devices
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import SearchIllustration from "@/assets/img/searchillustration.svg";

// import SearchInput from "@/components/shared/SearchInput.vue";
export default {
  name: "DeviceLookup",
  components: {
    // SearchInput,
  },
  data() {
    return {
      SearchIllustration,
    };
  },
};
</script>
<style scoped>
.lithopedion {
  background: #f0f4f8 url("@/assets/img/greencircle.svg") no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: 100;
}
</style>
