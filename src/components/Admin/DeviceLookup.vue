<template>
  <section
    class="body-font lithopedion dark bg-site-white-5 dark:bg-site-gray-1 dark:text-site-white-4"
    :style="{ backgroundImage: 'url(' + bg + ')' }"
  >
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
          class="title-font sm:text-4xl text-2xl mb-4 font-bold text-site-gray-2 dark:dark:text-site-yellow-4"
        >
          {{ $t("landingPage.deviceLookup.title") }}
        </h1>
        <p class="mb-8 leading-relaxed drop-shadow-2xl">
          {{ $t("landingPage.deviceLookup.text") }}
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
                  class="bg-site-gray-5 border border-site-gray-1 text-sm shadow-xl rounded-lg block w-full pl-10 p-2.5 dark:bg-site-gray-2"
                  placeholder="Serial Number or IMEI"
                  required=""
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-site-white-5 bg-site-gray-1 rounded-lg border border-site-gray-2 hover:bg-site-gray-2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-site-yellow-2"
              >
                <fa icon="search" />
                <span class="sr-only">{{ $t("btn.search") }}</span>
              </button>
            </form>
          </div>
        </div>
        <p class="text-sm mt-5 mb-8 w-full">
          <router-link
            :to="`/${$i18n.locale}/check-device`"
            class="text-site-green-3 underline"
          >
            <action-button
              text="btn.searchPlace"
              type="quaternary"
              frontIcon="arrow-right"
            ></action-button>
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import SearchIllustration from "@/assets/img/searchillustration.svg";
import bg from "@/assets/img/yellow_circle.svg";
import ActionButton from "../shared/ActionButton.vue";

// import SearchInput from "@/components/shared/SearchInput.vue";
export default {
  name: "DeviceLookup",
  components: {
    ActionButton,
    // SearchInput,
  },
  data() {
    return {
      SearchIllustration,
      bg,
    };
  },
};
</script>
<style scoped>
.lithopedion {
  background-position: center center;
  background-attachment: fixed;
  background-size: 100;
}
</style>
