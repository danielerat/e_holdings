<template>
  <section
    class="flex md:flex-row flex-col justify-between px-20 py-20 bg-center bg-no-repeat bg-fixed bg-[length:70%] md:bg-[length:30%]"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="basis-2/5 mb-20">
      <h2 class="font-extrabold text-4xl text-site-gray-1">{{ title_left }}</h2>
      <div class="text-2xl text-site-gray-1 my-5">
        {{ sub_title_left }}
      </div>
      <div class="text-site-gray-3 my-5">
        {{ text_left }}
      </div>
      <action-button type="secondary" text="btn.readMore"></action-button>
    </div>

    <div class="basis-2/5 mb-20">
      <h2 class="font-extrabold text-4xl text-site-gray-1">
        {{ title_right }}
      </h2>
      <div class="font-light text-2xl text-site-gray-1 my-5">
        {{ sub_title_right }}
      </div>
      <div class="text-site-gray-3 my-5">
        {{ text_right }}
      </div>
      <action-button type="secondary" text="btn.readMore"></action-button>
    </div>
  </section>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";

import image from "@/assets/img/fileTracking.png";

export default {
  name: "CenteredImgSideContents",
  components: {
    ActionButton,
  },
  props: {
    title_left: {
      type: String,
      required: true,
    },
    sub_title_left: {
      type: String,
      required: true,
    },
    text_left: {
      type: String,
      required: true,
    },
    title_right: {
      type: String,
      required: true,
    },
    sub_title_right: {
      type: String,
      required: true,
    },
    text_right: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image,
    };
  },
};
</script>
