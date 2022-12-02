<template>
  <ol class="items-center sm:flex">
    <li v-for="device in path" :key="device" class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-16 h-16 bg-site-gray-4 rounded-full ring-0 ring-site-gray-5 dark:bg-site-yellow-4 sm:ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <fa
            icon="calendar-day"
            class="text-2xl text-site-gray-2 dark:text-site-yellow-2"
          />
        </div>
        <div
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-site-white-4">
          Mumbere Electronics
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-site-green-3"
        >
          On December 2, 2021
        </time>
      </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div
          class="flex z-10 justify-center items-center w-16 h-16 bg-site-gray-4 rounded-full ring-0 ring-site-gray-5 dark:bg-site-yellow-4 sm:ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <fa
            icon="calendar-day"
            class="text-2xl text-site-gray-2 dark:text-site-yellow-2"
          />
        </div>
      </div>
      <div class="mt-3 sm:pr-8">
        <a
          href="#"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-site-green-5 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <fa
            icon="file-contract"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Download ZIP
        </a>
        <time
          class="block mb-2 text-sm font-normal leading-none text-site-green-3"
        >
          On December 2, 2021
        </time>
      </div>
    </li>
  </ol>

  <!-- ----------------------------- -->

  <section class="my-96 text-gray-400 body-font bg-gray-900">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"
          >
            Pitchfork Kickstarter Taxidermy
          </h1>
          <div class="h-1 w-20 bg-red-500 rounded"></div>
        </div>
        <p
          class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"
        >
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h3
              class="tracking-widest text-red-400 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">
              Chichen Itza
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h3
              class="tracking-widest text-red-400 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">
              Colosseum Roma
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h3
              class="tracking-widest text-red-400 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">
              Great Pyramid of Giza
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3
              class="tracking-widest text-red-400 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- -------------------------------------------- -->
</template>

<script>
import wave from "@/assets/img/wave.svg";
import waveyellow from "@/assets/img/waveyellow.svg";
// import DeviceCard from "@/components/Admin/Cards/DeviceCard.vue";
export default {
  name: "MyComponent",
  data() {
    return {
      wave,
      waveyellow,
      path: {
        1: {
          name: "Mumbere Electronics",
          date: "December 31, 2021",
        },
        2: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
        3: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
      },
    };
  },
  components: {
    // DeviceCard,
  },
};
</script>
DeviceCard
