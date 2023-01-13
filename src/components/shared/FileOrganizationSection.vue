<template>
  <section
    class="relative py-20 dark:bg-site-gray-1 dark:text-site-yellow-5 text-site-gray-1"
  >
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." class="max-w-full rounded-lg shadow-lg" :src="file" />
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <div
              class="text-site-yellow-5 p-3 text-2xl text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-site-yellow-2"
            >
              <fa icon="gears" />
            </div>
            <h3 class="text-3xl font-semibold">Are you a business owner?</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              E-holdings offers you powerful tools for managing and protecting
              your inventory. You can easily track the devices you've sold,
              monitor remaining warranty, and generate detailed reports to
              optimize your operations.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-site-yellow-5 bg-site-yellow-2 mr-3 dark:text-site-yellow-5 dark:bg-site-yellow-3"
                    >
                      <fa icon="file-contract" class="text-xl"></fa>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Generate Contract</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-site-yellow-5 bg-site-yellow-2 mr-3 dark:text-site-yellow-5 dark:bg-site-yellow-3"
                    >
                      <fa icon="circle-info" class="text-xl"></fa>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Keep Track of devices under warranty
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-site-yellow-5 bg-site-yellow-2 mr-3 dark:text-site-yellow-5 dark:bg-site-yellow-3"
                    >
                      <fa icon="share" class="text-lg"></fa>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Transfer the ownsership</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import file from "@/assets/img/file_organization.svg";
export default {
  name: "FileOrganizationSection",
  data() {
    return {
      file,
    };
  },
};
</script>

<style scoped></style>
