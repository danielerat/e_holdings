<template>
  <index-navbar></index-navbar>

  <div class="my-5">
    <div class="flex justify-around">
      <div>
        <h2 class="text-3xl font-bold">Need Support? you can find it here</h2>
      </div>
      <div>
        <input
          type="text border "
          class="border px-2 py-2 bg-site-white-4 rounded-lg mx-2 focus:outline-none"
        />
        <fa icon="search" class="font-bold text-xl"></fa>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-6 my-10 xl:px-0">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8"
    >
      <card-faq
        title="Account related questions"
        color="text-site-yellow-1"
        icon="fingerprint"
      >
        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>

        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>
        <accordion header="Just some random things you know">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempora doloribus velit, illo accusamus error necessitatibus atque
          nemo at nisi? Est perferendis repudiandae eius distinctio
        </accordion>
      </card-faq>
      <card-faq
        title="Account related questions"
        color="text-site-gray-2"
        icon="lock"
      >
        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>

        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>
        <accordion header="Just some random things you know">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempora doloribus velit, illo accusamus error necessitatibus atque
          nemo at nisi? Est perferendis repudiandae eius distinctio
        </accordion>
      </card-faq>
      <card-faq
        title="Account related questions"
        color="text-site-green-3"
        icon="file-contract"
      >
        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>

        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>
        <accordion header="Just some random things you know">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempora doloribus velit, illo accusamus error necessitatibus atque
          nemo at nisi? Est perferendis repudiandae eius distinctio
        </accordion>
      </card-faq>
      <card-faq
        title="Account related questions"
        color="text-site-yellow-1"
        icon="fingerprint"
      >
        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>

        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>
        <accordion header="Just some random things you know">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempora doloribus velit, illo accusamus error necessitatibus atque
          nemo at nisi? Est perferendis repudiandae eius distinctio
        </accordion>
      </card-faq>
      <card-faq
        title="Account related questions"
        color="text-site-gray-2"
        icon="lock"
      >
        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>

        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>
        <accordion header="Just some random things you know">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempora doloribus velit, illo accusamus error necessitatibus atque
          nemo at nisi? Est perferendis repudiandae eius distinctio
        </accordion>
      </card-faq>
      <card-faq
        title="Account related questions"
        color="text-site-green-3"
        icon="file-contract"
      >
        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>

        <accordion header="Just some random things you know">
          And inside here is somemore randomestestthing you can possibly ask
          yourlse you kno
        </accordion>
        <accordion header="Just some random things you know">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempora doloribus velit, illo accusamus error necessitatibus atque
          nemo at nisi? Est perferendis repudiandae eius distinctio
        </accordion>
      </card-faq>
    </div>
  </div>
  <faq></faq>

  <main-footer />
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";

import MainFooter from "@/components/Footers/Footer.vue";

import Accordion from "@/components/shared/Accordion.vue";
import CardFaq from "@/components/Cards/CardFaq.vue";
import Faq from "@/components/Faq";

export default {
  name: "FaqView",
  components: {
    IndexNavbar,
    MainFooter,
    Faq,
    Accordion,
    CardFaq,
  },
};
</script>
