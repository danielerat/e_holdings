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

      <!--  -->
      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  name: "safetyTimelineCheck",

  computed: {},

  methods: {},
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
