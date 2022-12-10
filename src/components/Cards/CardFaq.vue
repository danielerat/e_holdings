<template>
  <div role="cell" class="">
    <div
      class="bg-site-white-4 p-5 rounded-md relative h-full w-full dark:bg-site-gray-2"
    >
      <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
      <span>
        <fa
          :icon="icon"
          class="bg-site-white-3 p-2 mb-5 rounded-full text-2xl"
          :class="color"
        ></fa>
      </span>
      <h1 class="pb-4 text-2xl font-semibold">{{ title }}</h1>
      <div class="my-5">
        <div
          class="flex flex-col items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3"
        >
          <slot></slot>
        </div>
      </div>
      <a
        class="hover:text-site-green-3 hover:underline absolute bottom-5 text-sm text-site-green-1 font-bold cursor-pointer flex items-center"
        href="javascript:void(0)"
      >
        <p>Cant find help? contact us.&nbsp;&nbsp;&nbsp;</p>
        <div>
          <fa icon="angle-right"></fa>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardFaq",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>
