<template>
  <div class="max-w-7xl mx-auto bg-site-white-4">
    <div class="flex flex-col self-center py-60">
      <div class="text-center">
        <h1 class="font-light text-6xl text-site-gray-1">
          WANT TO PLAY IT SAFE?
        </h1>
        <h1 class="font-bold text-3xl text-site-green-2">
          CHECK YOUR DEVICE TO MAKE SURE IT'S CLEAN
        </h1>
        <h1 class="text w-1/2 mx-auto text-site-gray-2 px-5 my-5">
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

        <div
          class="flex flex-col sm:flex-row mt-5 bg-site-yellow-5 px-10 rounded-full"
        >
          <div class="flex flex-row w-1/2 mx-auto my-5 sm:my-0">
            <div class="self-center">
              <h1 class="font-bold text-2xl text-site-yellow-1">
                Oups! Device Reported
              </h1>
              <h2 class="text-sm">
                Looks like the device you have has been reported as lost or
                stolen, please reach out to the nearest police station for
                assitance
                <br />
              </h2>
              <h2
                class="text-xs text-site-yellow-1 bg-site-white-5 inline-block p-2 hover:bg-site-white-3 rounded-full p-"
              >
                Learn More >
              </h2>
            </div>
          </div>
          <div class="w-1/2">
            <div class="relative">
              <img :src="error" class="absolute sm:static -right-60 bottom-0" />
            </div>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row mt-5 bg-site-green-5 px-10 rounded-full"
        >
          <div class="flex flex-row w-1/2 mx-auto my-5 sm:my-0">
            <div class="self-center">
              <h1 class="font-bold text-2xl text-site-green-2">
                Great! Looks good
              </h1>
              <h2 class="text-sm">
                the device looks good, it's not report in our system to be
                stolen or to have any issue.
                <br />
                If you want to buy the device make sure to sign the suitable
                contract with the user
              </h2>
              <h2
                class="text-xs text-site-green-4 bg-site-white-5 inline-block p-2 hover:bg-site-white-3 rounded-full p-"
              >
                Learn More >
              </h2>
            </div>
          </div>
          <div class="w-1/2">
            <div class="relative">
              <img :src="good" class="absolute sm:static -right-60 bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bg from "@/assets/img/lightbg.png";
import good from "@/assets/img/good.png";
import error from "@/assets/img/error.png";
export default {
  name: "SearchInput",
  data() {
    return {
      bg,
      good,
      error,
    };
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
