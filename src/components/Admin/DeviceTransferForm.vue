<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/6 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-site-gray-3">
          Macbook Air Gen 2
        </h1>
        <p class="leading-relaxed mt-4">
          These walls are funny. First you hate ’em. Then you get used to ’em.
          Enough time passes, you get so you depend on them. That’s
          institutionalized.
        </p>
      </div>
      <div
        class="lg:w-3/6 bg-site-yellow-5 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <!-- Step -->
        <step-mark></step-mark>
        <!-- Step -->
        <h2 class="text-site-gray-3 text-lg font-medium title-font my-5">
          Transfer the Ownsership
        </h2>
        <div class="relative my-4">
          <input-text
            type="text"
            name="id"
            label="Phone Number"
            placeholder="Phone Number"
            size="lg"
          ></input-text>
        </div>
        <div class="relative mb-4">
          <input-text
            name="id"
            label="National ID"
            placeholder="ID/Passport"
            size="lg"
          ></input-text>
        </div>
        <action-button
          type="primary"
          frontIcon="share"
          size="md"
          text="btn.confirm"
        ></action-button>
        <p class="text-xs text-site-yellow-2 mt-3">
          You are about to give the ownership of this device, you wont be able
          to revert this action
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import InputText from "@/components/shared/InputText.vue";
import StepMark from "@/components/shared/StepMark.vue";
export default {
  name: "DeviceTransferForm",
  components: {
    ActionButton,
    InputText,
    StepMark,
  },
};
</script>
