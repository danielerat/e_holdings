<template>
  <section class="py-24" style="height: 1100px">
    <div class="xl:container xl:mx-auto">
      <div class="flex flex-col md:flex-row items-strech justify-center">
        <div class="md:w-3/5 relative">
          <img
            :src="tr1"
            alt="A typewriter"
            role="img"
            class="absolute inset-0 object-cover object-center w-full h-full hidden lg:block rounded"
          />
          <img
            :src="tr2"
            alt="A typewriter"
            role="img"
            class="absolute inset-0 object-cover object-center w-full h-full lg:hidden rounded"
          />
          <img
            :src="tr3"
            alt="A typewriter"
            role="img"
            class="object-cover object-center w-full h-full md:hidden rounded"
          />
        </div>
        <div
          class="md:w-2/5 flex justify-center items-center -mt-14 md:-mt-0 md:-ml-12 lg:-ml-16 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0"
        >
          <div class="bg-site-gray-1 p-8 lg:p-10">
            <p
              role="heading"
              class="text-base leading-none lg:text-xl lg:leading-tight text-white"
            >
              About us
            </p>
            <p
              class="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-white mt-6 md:mt-4 lg:mt-8"
            >
              Here is all you need to know about us
            </p>
            <p class="text-base leading-normal text-white mt-4 lg:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ut
              officiis animi nihil vel eligendi commodi! Repellat, voluptatum
              consectetur deserunt ex aperiam velit eos dolorem eius rem fuga
              nesciunt amet?
              <br class="lg:hidden" />
              <br class="lg:hidden" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta
              voluptas vel commodi optio quasi architecto odio quidem fugiat
              sapiente dolores voluptate, eos iusto consectetur fugit unde,
              repellendus temporibus quisquam inventore nemo harum! Quidem enim
              quo molestiae possimus, temporibus optio quis earum illum sapiente
              dolorem
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tr1 from "@/assets/img/tr1.png";
import tr2 from "@/assets/img/tr2.png";
import tr3 from "@/assets/img/tr3.png";
export default {
  name: "AllYouNeed",
  data() {
    return {
      tr1,
      tr2,
      tr3,
    };
  },
};
</script>
