<template>
  <section class="text-gray-400 body-font">
    <div class="container mx-auto">
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 flex-col"
        :class="pos ? 'sm:flex-row' : 'sm:flex-row-reverse'"
      >
        <!-- Device Category -->
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mx-10 inline-flex items-center justify-center rounded-full text-site-gray-2 bg-site-white-3 flex-shrink-0"
        >
          <fa
            v-if="type == 'computer'"
            icon="laptop"
            class="md:text-6xl text-4xl"
          />
          <fa
            v-else-if="type == 'phone'"
            icon="mobile-button"
            class="md:text-6xl text-4xl"
          />
          <fa
            v-else-if="type == 'electronic'"
            icon="plug"
            class="md:text-6xl text-4xl"
          />
        </div>
        <!-- Description -->
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-site-gray-2 font-bold text-xl title-font mb-2">
            {{ name }}
          </h2>
          <div class="flex justify-around">
            <a
              v-if="from"
              class="mt-3 text-site-gray-3 inline-flex items-center"
            >
              <span>{{ from }}&nbsp;</span>
              <fa icon="share" />
            </a>
            <a class="align-top text-xs text-site-green-2 items-center">
              <p v-if="date" class="font-bold">
                <fa icon="calendar-day" />
                &nbsp;{{ date }}
              </p>
              <p v-if="model">{{ model }}</p>
            </a>
          </div>
          <p class="leading-relaxed text-base mr-3">
            <slot></slot>
          </p>

          <div class="mt-5">
            <div class="flex justify-around">
              <!-- Base -->
              <a
                class="text-xs group flex items-center basis-2/5 justify-between rounded-lg border border-current px-2 text-site-green-2 transition-colors hover:bg-site-green-1 focus:outline-none focus:ring active:bg-site-green-3"
              >
                <span
                  class="font-medium transition-colors group-hover:text-white"
                >
                  Accept
                  <br />
                  Incoming Device
                </span>

                <span
                  class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-site-green-2 group-active:text-indigo-500"
                >
                  <fa icon="check" class="h-3 w-4" />
                </span>
              </a>

              <!-- Border -->

              <a
                class="text-xs group flex basis-2/5 items-center justify-between rounded-lg border border-current p-2 text-site-yellow-2 transition-colors hover:bg-site-yellow-1 focus:outline-none focus:ring active:bg-site-yellow-2"
              >
                <span
                  class="font-medium transition-colors group-hover:text-white"
                >
                  Decline
                  <br />
                  Incoming Device
                </span>

                <span
                  class="ml-4 flex-shrink-0 rounded-full border border-site-yellow-2 bg-white p-2 group-active:border-site-yellow-1"
                >
                  <fa icon="times" class="h-3 w-4" />
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
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "phone",
      validator(value) {
        return ["computer", "phone", "electronic"].includes(value);
      },
    },
    pos: {
      type: Boolean,
      required: false,
      default: false,
    },
    date: {
      type: String,
      required: true,
      default: "December-25-2021",
    },
    model: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: false,
      default: "MacBook Pro 2021",
    },
    from: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style></style>
