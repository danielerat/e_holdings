<template>
  <section
    class="main-section bg-no-repeat bg-fixed bg-cover"
    :style="{ backgroundImage: 'url(' + pattern + ')' }"
  >
    <section class="mx-auto container">
      <div class="px-4 lg:px-0">
        <div class="flex items-center flex-col px-4">
          <p
            class="my-5 uppercase text-lg text-center text-gray-600 leading-normal"
          >
            What do we do for you ?
          </p>
          <h2
            class="text-4xl lg:text-5xl pt-4 font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12"
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
              <fa icon="cubes-stacked" class="text-4xl text-site-green-3"></fa>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-site-gray-1">
                Track you items
              </h4>
              <p
                class="text-base text-site-gray-1 leading-normal xl:w-10/12 pt-2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, deleniti quibusdam necessitatibus quas non dolorum
                quod a totam libero voluptas praesentium obcaecati officia at
                beatae esse? Veniam laudantium dicta harum.
              </p>
            </div>
          </div>
          <div class="flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-site-gray-1">
              <fa icon="handshake-simple" class="text-4xl text-site-green-3" />
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-site-gray-1">
                Transfer the ownership
              </h4>
              <p
                class="text-base text-site-gray-1 leading-normal xl:w-10/12 pt-2"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, quo nobis doloribus temporibus vel eius consectetur
                recusandae iure deserunt nostrum sapiente sint dolorem quos
                consequuntur.
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-site-green-1 pt-10 lg:pb-20"
          >
            <div class="mr-5 text-site-gray-1">
              <fa icon="headset" class="text-4xl text-site-green-3" />
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-site-gray-1">
                Report stolen devices
              </h4>
              <p
                class="text-base text-site-gray-1 leading-normal xl:w-10/12 pt-2"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, numquam doloremque optio dignissimos similique minima
                quo alias! Ipsum, quo sit. Quas ratione eveniet error nisi
                libero, earum ut corrupti fugiat!
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-site-green-1 pt-10 lg:pb-20"
          >
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-site-gray-1">
              <fa icon="file-contract" class="text-4xl text-site-green-3" />
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-site-gray-1">
                Generate all your documents
              </h4>
              <p
                class="text-base text-site-gray-1 leading-normal xl:w-10/12 pt-2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                totam ea. Voluptatum culpa quo quam illo maiores praesentium
                totam ex assumenda officiis nemo. Minus incidunt vel numquam
                deleniti expedita quo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import pattern from "@/assets/img/yellowbizarewave.svg";
export default {
  name: "ShortAboutUs",
  data() {
    return {
      pattern,
    };
  },
};
</script>
