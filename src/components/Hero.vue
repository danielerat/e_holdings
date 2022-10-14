<template>
  <div class="relative pb-24 lg:pb-12">
    <img
      loading="lazy"
      :src="rectanglebg"
      class="absolute right-0 z-0 h-screen w-2/5 lg:block hidden"
    />
    <img
      loading="lazy"
      :src="rectanglebg"
      class="absolute right-0 z-0 lg:h-96 lg:hidden block"
    />
    <div class="">
      <div class="mx-auto container relative z-20 lg:px-0 px-4">
        <div
          class="flex lg:flex-row flex-col-reverse items-center justify-between lg:mt-24"
        >
          <div class="lg:w-1/2 lg:pt-0 pt-8">
            <h1
              class="lg:text-6xl text-3xl leading-8 text-site-gray-1 border-l-8 border-site-green-1 lg:pl-12 pl-2 xl:mt-0 mt-8"
            >
              E-Holdings
              <br />
              <span class="2xl:text-8xl xl:text-7xl text-4xl font-bold">
                We track for you
              </span>
            </h1>

            <h1
              class="lg:text-2xl text-lg text-gray-800 lg:leading-8 leading-6 mt-6 border-l-8 border-site-green-1 lg:pl-12 pl-2 py-2"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus earum maiores odit, dolor ea adipisci sapien
              Repellendus earum maiores odit, dolor ea
            </h1>
            <div class="sm:flex items-center justify-center mt-12">
              <a href="javascript:void(0)">
                <button
                  class="w-full sm:w-auto xl:py-5 py-2 xl:px-16 px-6 bg-site-green-1 2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-white focus:outline-none hover:bg-site-green-3 border-2 rounded-xl mr-10"
                >
                  Sign Up
                </button>
              </a>
              <a href="javascript:void(0)">
                <button
                  class="w-full sm:w-auto mt-4 sm:mt-0 xl:py-5 py-2 xl:px-16 px-6 border-site-gray-1 2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-site-gray-1 focus:outline-none border-2 rounded-xl hover:bg-site-gray-2 hover:text-white"
                >
                  Learn More
                </button>
              </a>
            </div>
            <div
              class="2xl:mt-24 mt-12 flex justify-center items-center 2xl:pl-16 xl:pl-16 lg:pl-12 md:pl-0 sm:pl-0 pl-16 md:flex"
            >
              <a href="javascript:void(0)" class="cursor-pointer">
                <div
                  class="w-12 h-12 bg-white flex items-center justify-center shadow-lg hover:shadow-xl rounded-full"
                >
                  <fa
                    :icon="['fab', 'whatsapp']"
                    class="text-site-gray-1 text-2xl"
                  />
                </div>
              </a>
              <a href="javascript:void(0)" class="cursor-pointer">
                <div
                  class="w-12 h-12 bg-white mx-6 flex items-center justify-center shadow-lg hover:shadow-xl rounded-full"
                >
                  <fa
                    :icon="['fab', 'facebook']"
                    class="text-site-gray-1 text-2xl"
                  />
                </div>
              </a>
              <a class="cursor-pointer" href="javascript:void(0)">
                <div
                  class="w-12 h-12 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center"
                >
                  <fa
                    :icon="['fab', 'twitter']"
                    class="text-site-gray-1 text-2xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 height-main-hero xl:block hidden">
            <img loading="lazy" :src="heroimg" class="w-200" />
          </div>
          <div class="xl:w-1/3 xl:hidden block">
            <img loading="lazy" :src="heroimg" class="mt-4 object-cover" />
          </div>
        </div>
      </div>
      <!-- Hero -->
    </div>
  </div>
</template>

<script>
import rectanglebg from "@/assets/img/rectanglebg.png";
import heroimg from "@/assets/img/hero_image.png";
export default {
  name: "Hero",
  data() {
    return {
      rectanglebg,
      heroimg,
    };
  },
};
</script>

<style scoped></style>
