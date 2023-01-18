<template>
  <div class="mx-auto">
    <div class="flex flex-col self-center py-24">
      <div class="text-center">
        <h1 class="font-bold md:text-3xl text-site-green-2">
          Want to know howmany have owned this device ?
        </h1>
        <h1 class="font-light text-4xl md:text-6xl text-site-gray-1">
          You are on the right section
        </h1>

        <h1 class="text w-4/5 sm:w-1/2 mx-auto text-site-gray-2 px-1 my-5">
          This section will help you track a particular device through time, you
          will be able to see all who ever owned a device over a particular
          period of time, simply provide the IMEI or Serial Nymber of your
          device.
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

      <!--  ------------------------------------------------------------------------>

      <div>
        <section class="py-5 text-gray-600 body-font"></section>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-3 py-10 mx-auto">
            <div class="mb-6 text-center">
              <h2
                class="text-xs text-site-yellow-3 tracking-widest font-medium title-font mb-1"
              >
                YOUR DEVICE TIMELINE
              </h2>
              <h1
                class="md:text-3xl text-2xl font-medium title-font text-site-gray-1 dark:text-site-white-4"
              >
                From The Shop To The current Owner
              </h1>
            </div>
            <device-timeline :timeline="timeline"></device-timeline>
            <div class="lg:w-4/5 mx-auto flex flex-wrap justify-around">
              <div
                class="relative lg:w-1/2 w-full lg:p-10 lg:py-6 mb-6 lg:mb-0 bg-no-repeat place-self-center dark:bg-site-white-1"
              >
                <!-- :style="{ backgroundImage: 'url(' + picture + ')' }" -->
                <h2
                  class="text-sm title-font text-site-gray-2 tracking-widest dark:text-site-gray-1"
                >
                  Device Name
                </h2>
                <h1
                  class="text-site-gray-1 text-3xl title-font font-bold mb-4 dark:text-site-yellow-3 drop-shadow-lg"
                >
                  Mac Book Air 2020
                </h1>
                <div class="flex mb-4">
                  <a
                    class="flex-grow text-site-gray-1 border-b-2 border-site-gray-3 py-2 text-lg px-1 dark:text-site-white-1"
                  >
                    Description
                  </a>
                </div>
                <p class="leading-relaxed mb-4">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy
                </p>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-site-gray-3">Model:</span>
                  <span
                    class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
                  >
                    Hikaru-Nakamura
                  </span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-site-gray-3">Serial Number</span>
                  <span
                    class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
                  >
                    MAX12-Raport-Carlsen2020
                  </span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-site-gray-3">Mac Address</span>
                  <span
                    class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
                  >
                    2844 Fabiano Caruana
                  </span>
                </div>
                <!-- <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">
              Frw 325,000
            </span>
          </div> -->
                <span
                  class="absolute bg-site-white-3 text-site-gray-1 right-0 top-0 rounded-full px-3 title-font py-1.5 text-sm font-medium dark:bg-site-gray-1 dark:text-site-yellow-3"
                >
                  Frw 325,000
                </span>
                <div class="container">
                  <div class="flex justify-around"></div>
                </div>
              </div>
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                :src="mac"
              />
            </div>
          </div>
        </section>
      </div>

      <!-- ------------------------------------------------------------------------>
    </div>
  </div>
</template>

<script>
import DeviceTimeline from "@/components/Admin/DeviceTimeline";
import mac from "@/assets/img/mac.png";
import picture from "@/assets/img/wave.svg";
export default {
  name: "SafetyCheckTimeline",
  props: {},
  components: {
    DeviceTimeline,
  },
  data() {
    return {
      picture,
      mac,
      timeline: {
        one: {
          name: "Mumbere Electronics",
          date: "December 31, 2021",
        },
        two: {
          name: "New Owner",
          date: "December 31, 2021",
        },
        three: {
          name: "New Owner",
          date: "December 31, 2021",
        },
        four: {
          name: "New Owner",
          date: "December 31, 2021",
        },
      },
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
