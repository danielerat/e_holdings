<template>
  <div
    class="basis-1/4 relative rounded-xl bg-gradient-to-tr from-site-white-4 to-site-white-5 border border-site-white-3 hover:bg-gradient-to-br cursor-pointer p-8 shadow-xl mx-5 my-5 bg-contain bg-no-repeat"
    :style="{ backgroundImage: 'url(' + waveyellow + ')' }"
  >
    <span
      class="absolute top-4 rounded-full py-1.5 text-xs font-medium text-gray-1"
    >
      Since: July,15,2022
    </span>
    <span
      class="absolute right-4 top-4 rounded-full bg-site-yellow-4 px-3 py-1.5 text-xs font-medium text-site-yellow-1"
    >
      Lost
    </span>

    <div class="mt-4 text-gray-500 sm:pr-8">
      <div class="flex justify-around">
        <p>
          <fa icon="mobile-button" class="text-xl" />
        </p>
        <p class="text-xs">SN/IMEI: S14525MKGP3572</p>
      </div>

      <h3 class="mt-4 text-sm text-site-gray-1">
        <p class="font-bold">Apple MacBook Pro Gen 13</p>

        <p class="text-xs text-site-gray-2">Model: MacBookPro18,3</p>

        <p></p>
      </h3>

      <p class="mt-2 hidden text-xs sm:block">
        Lorem whatever is the what that we actually care about nothing else...
      </p>

      <div class="flex mt-5 text-lg sm:block">
        <div class="flex">
          <div
            class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1"
          >
            <fa icon="eye" />
          </div>
          <div
            class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1"
          >
            <fa icon="gauge" />
          </div>
          <div class="px-2 text-site-green-3 hover:text-site-green-1">
            <fa icon="share" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceCard",
};
</script>

<style></style>
