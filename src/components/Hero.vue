<template>
  <div
    class="relative pb-24 lg:pb-12 bg-no-repeat bg-fixed md:bg-[length:400px_700px] bg-[length:200px_200px] bg-right-top"
    :style="{ backgroundImage: 'url(' + rectanglebg + ')' }"
  >
    <div class="">
      <div class="mx-auto container relative z-20 lg:px-0 px-4">
        <div
          class="flex lg:flex-row flex-col-reverse items-center justify-between my-10"
        >
          <div class="lg:w-1/2 lg:pt-0 pt-8">
            <h1
              class="lg:text-6xl text-3xl leading-8 text-site-gray-1 border-l-8 border-site-yellow-3 lg:pl-12 pl-2 xl:mt-0 mt-8"
            >
              E-Holdings
              {{ $t("appTitle") }}
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
              <router-link to="/register">
                <action-button
                  type="primary"
                  size="lg"
                  text="Sign up"
                  class="mr-5"
                />
              </router-link>
              <a href="javascript:void(0)">
                <action-button
                  type="tertiary"
                  size="lg"
                  text="Learn More"
                  class="mr-5"
                />
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
          <div class="block">
            <img loading="lazy" :src="heroimg" class="mt-4 md:w-full w-96" />
          </div>
        </div>
      </div>
      <!-- Hero -->
    </div>
  </div>
</template>

<script>
import rectanglebg from "@/assets/img/rectanglebg.png";
import heroimg from "@/assets/img/hero_image2.png";

import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  name: "Hero",
  components: {
    ActionButton,
  },
  data() {
    return {
      rectanglebg,
      heroimg,
    };
  },
};
</script>

<style scoped></style>
