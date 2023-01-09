<template>
  <section
    class="text-site-gray-1 body-font dark:bg-site-gray-1 dark:text-site-green-5"
  >
    <div class="container px-5 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font">
          Need A device fast ? We got you
          <br />
          Check Out The devices currently being sold!
        </h1>

        <action-button
          type="tertiary"
          text="btn.onMarket"
          size="sm"
          frontIcon="arrow-right"
        ></action-button>
      </div>
    </div>
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="device in devices"
          :key="device"
          class="py-8 px-4 lg:w-1/3 hover:bg-site-green-5 rounded-3xl dark:hover:bg-site-gray-2 transition-colors delay-100"
        >
          <div class="h-full flex items-start">
            <div
              class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
            >
              <span
                class="text-xs text-site-gray-3 pb-2 mb-2 border-b-2 border-gray-200 dark:text-site-yellow-5"
              >
                {{ device.date }}
              </span>
              <span
                class="font-medium text-lg text-site-gray-1 title-font leading-none dark:text-site-yellow-3"
              >
                <fa v-if="device.category == 'computer'" icon="laptop" />
                <fa
                  v-else-if="device.category == 'phone'"
                  icon="mobile-button"
                />
                <fa v-else-if="device.category == 'electronic'" icon="plug" />
              </span>
            </div>
            <div class="flex-grow pl-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-site-gray-3 mb-1 dark:text-site-yellow-4"
              >
                {{ device.city }}
              </h2>
              <h1
                class="title-font text-xl font-bold text-site-gray-2 mb-3 dark:text-site-green-5"
              >
                {{ device.name }}
              </h1>
              <p class="leading-relaxed mb-5">
                A brand new new product that i wish i had something to say about
                but guess what, i don't absolutely dont
              </p>
              <a class="inline-flex items-center">
                <fa icon="circle-user" />
                <span class="flex-grow flex flex-col pl-3">
                  <span
                    class="title-font font-medium text-site-gray-2 dark:text-site-green-5"
                  >
                    {{ device.owner }}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  name: "PublishedDeviceShort",
  components: {
    ActionButton,
  },
  data() {
    return {
      devices: {
        one: {
          name: "Iphone 6 plus",
          category: "phone",
          date: "January 1",
          owner: "James Harden",
          city: "kigali",
        },
        two: {
          name: "Lenovo Johnson",
          category: "computer",
          date: "January 1",
          owner: "James Harden",
          city: "Gisenyi",
        },
        three: {
          name: "Smart Iron",
          category: "electronic",
          date: "January 1",
          owner: "James Harden",
          city: "kigali",
        },
      },
    };
  },
};
</script>
