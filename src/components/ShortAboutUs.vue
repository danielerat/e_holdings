<template>
  <section
    class="main-section bg-no-repeat bg-fixed bg-cover dark:bg-site-gray-1"
    :style="{ backgroundImage: 'url(' + pattern + ')' }"
  >
    <section class="mx-auto container">
      <div class="px-4 lg:px-0">
        <div class="flex items-center flex-col px-4">
          <p
            class="my-5 uppercase text-lg text-center text-gray-600 leading-normal dark:text-site-yellow-4"
          >
            What do we do for you ?
          </p>
          <h2
            class="text-4xl lg:text-5xl pt-4 font-extrabold text-center leading-tight text-site-gray-1 lg:w-7/12 md:w-9/12 dark:text-site-yellow-4 dark:drop-shadow-2xl"
          >
            All your electronics managed in one place for indubitable ownership
          </h2>
        </div>
      </div>
    </section>
    <section class="py-12 mt-20">
      <div class="px-4 lg:px-0">
        <div class="mx-auto container flex flex-wrap px-2 md:px-24">
          <div
            class="flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-site-green-1 pb-10 lg:pt-10"
          >
            <div class="mr-5 text-site-gray-1">
              <fa icon="cubes-stacked" class="text-4xl text-site-yellow-3"></fa>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4
                class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
              >
                Track you items
              </h4>
              <p
                class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
              >
                "E-holdings makes it easy to track your devices no matter the
                circumstances. With our powerful organization tools, you'll
                always find it a joke to keep track of your device, we are here
                to giving you peace of mind."
              </p>
            </div>
          </div>
          <div class="flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-site-gray-1">
              <fa icon="handshake-simple" class="text-4xl text-site-yellow-3" />
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4
                class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
              >
                Transfer the ownership
              </h4>
              <p
                class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
              >
                "E-holdings simplifies the process of transferring device
                ownership. Whether you're transferring a device to a new owner
                or acquiring it from an organization, our platform makes it
                easy."
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-site-green-1 pt-10 lg:pb-20"
          >
            <div class="mr-5 text-site-gray-1">
              <fa icon="headset" class="text-4xl text-site-yellow-3" />
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4
                class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
              >
                Report stolen devices
              </h4>
              <p
                class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
              >
                "With E-holdings, you can quickly and easily report lost or
                stolen devices to the authorities. Our reporting system
                streamlines the process, so you can rest easy knowing your
                devices are protected and ready to be found anytime if lost."
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-site-green-1 pt-10 lg:pb-20"
          >
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-site-gray-1">
              <fa icon="file-contract" class="text-4xl text-site-yellow-3" />
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4
                class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
              >
                Generate all your documents
              </h4>
              <p
                class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
              >
                "E-holdings generates legally binding contracts and documents
                for your devices, giving you the protection you need. With our
                document generation feature, you can easily create and manage
                contracts and other important documents."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import pattern from "@/assets/img/green_circle.svg";
export default {
  name: "ShortAboutUs",
  data() {
    return {
      pattern,
    };
  },
};
</script>
