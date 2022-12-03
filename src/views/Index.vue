<template>
  <index-navbar></index-navbar>
  <hero></hero>
  <short-about-us />

  <device-lookup />

  <section class="bg-site-white-5">
    <div class="content-center container mx-auto py-6">
      <div class="text-center w-4/5 mx-auto">
        <h2 class="text-2xl">Can't Find something?</h2>
        <h2 class="text-1xl">
          You might want to check our FAQ, or simply contact us for more
          explanations
        </h2>
      </div>
      <div
        class="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center"
      >
        <div class="mx-auto">
          <card-faq
            title="Account related questions"
            color="text-site-yellow-2"
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
        </div>
        <div class="mx-auto">
          <card-faq
            title="Security"
            color="text-site-green-2"
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
        <div class="mx-auto px-5">
          <h2 class="text-4xl">Need More Help ?</h2>
          <h2 class="text-2xl mt-5">
            Check out our FAQ you may find some useful tips
          </h2>
          <router-link to="support">
            <action-button
              type="tertiary"
              size="sm"
              text="Explore Our FAQ >>"
              class="mx-2"
            />
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- Component--------------------- -->
  <center-img-design
    title_left="Our Story"
    sub_title_left="Lorem ipsum dolor sit amet consectetur"
    text_left="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur"
    title_right="Why choose us?"
    sub_title_right="We are your best option ...."
    text_right="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur"
  />
  <fixed-image-scroll-layout
    :bg="documentspill"
    title="Save yourself from organizing all these bills"
  >
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      aliquam incidunt id voluptatibus vitae, architecto ut nostrum ratione
      porro quod dolorum autem natus repellat voluptatem similique, assumenda
      ipsum cupiditate molestias?
    </slot>
    <slot name="footer">
      <div class="flex justify-end">
        <router-link to="support">
          <action-button
            type="tertiary"
            size="xl"
            text="Explore Our FAQ >>"
            class="mx-2"
          />
        </router-link>
      </div>
    </slot>
  </fixed-image-scroll-layout>
  <main-footer />
</template>

<script>
// @ is an alias to /src
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import Hero from "@/components/Hero.vue";
import ShortAboutUs from "@/components/ShortAboutUs.vue";
import CenterImgDesign from "@/components/CenteredImgSideContents.vue";
import FixedImageScrollLayout from "@/components/shared/FixedImageScrollLayout.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import documentspill from "@/assets/img/documentpill.jpg";
import Accordion from "@/components/shared/Accordion.vue/";
import CardFaq from "@/components/Cards/CardFaq.vue";
import DeviceLookup from "@/components/Admin/DeviceLookup.vue";

export default {
  name: "Index",
  components: {
    MainFooter,
    IndexNavbar,
    Hero,
    ShortAboutUs,
    CenterImgDesign,
    FixedImageScrollLayout,
    ActionButton,
    CardFaq,
    Accordion,
    DeviceLookup,
  },
  data() {
    return {
      documentspill,
    };
  },
};
</script>
