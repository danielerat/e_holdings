<template>
  <index-navbar></index-navbar>
  <hero></hero>
  <device-lookup />
  <file-organization-section></file-organization-section>
  <published-device-short></published-device-short>

  <short-about-us />

  <!-- Why us sectoin  -->
  <center-img-design
    :title_left="$t('landingPage.centerImage.left.title')"
    :sub_title_left="$t('landingPage.centerImage.left.subTitle')"
    :text_left="$t('landingPage.centerImage.left.text')"
    :title_right="$t('landingPage.centerImage.right.title')"
    :sub_title_right="$t('landingPage.centerImage.right.subTitle')"
    :text_right="$t('landingPage.centerImage.right.text')"
  />
  <section class="bg-site-white-5 dark:bg-site-gray-1 dark:text-site-white-5">
    <div class="content-center container mx-auto py-6">
      <div class="text-center w-4/5 mx-auto">
        <h2 class="text-2xl">{{ $t("landingPage.Faq.title") }}</h2>
        <h2 class="text-1xl">
          {{ $t("landingPage.Faq.subTitle") }}
        </h2>
      </div>
      <div
        class="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center"
      >
        <div class="mx-auto">
          <card-faq
            :title="$t('landingPage.Faq.account.title')"
            color="text-site-yellow-2"
            icon="fingerprint"
          >
            <accordion
              header="What happens if I lose my E-holdings account password?"
            >
              If you lose your E-holdings account password, you can reset it
              through our password reset feature. You will be prompted the phone
              number you used to sign in and your id to verify your identity.
            </accordion>

            <accordion
              header=" Who can access my device data and personal information?"
            >
              Only authorized users with the correct credentials can access your
              device data and personal information
            </accordion>
          </card-faq>
        </div>
        <div class="mx-auto">
          <card-faq
            :title="$t('landingPage.Faq.security.title')"
            color="text-site-green-2"
            icon="file-contract"
          >
            <accordion
              header="What happens if one of my devices is lost or stolen?"
            >
              If one of your devices is lost or stolen, you can report it
              through E-holdings. Our platform allows you to easily report lost
              or stolen devices to the authorities and track their whereabouts
            </accordion>

            <accordion
              header="How does E-holdings protect my devices and my personal information?"
            >
              E-holdings uses industry-standard security protocols and
              encryption to protect your devices and personal information. All
              data is transmitted and stored securely, and access is controlled
              through user authentication and authorization.
            </accordion>
          </card-faq>
        </div>
        <div class="mx-auto px-5">
          <h2 class="text-4xl">Need More Help ?</h2>
          <h2 class="text-2xl mt-5">
            Check out our FAQ you may find some useful tips
          </h2>
          <router-link :to="`/${$i18n.locale}/support`">
            <action-button
              frontIcon="arrow-right"
              type="tertiary"
              size="sm"
              text="btn.exploreOurFaq"
              class="mx-2"
            />
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Published Devices -->

  <main-footer />
</template>

<script>
// @ is an alias to /src
// import { mapGetters, mapState } from "vuex";
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import MainFooter from "@/components/Footers/Footer.vue";
import Hero from "@/components/Hero.vue";
import ShortAboutUs from "@/components/ShortAboutUs.vue";
import CenterImgDesign from "@/components/CenteredImgSideContents.vue";
import FileOrganizationSection from "@/components/shared/FileOrganizationSection.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import documentspill from "@/assets/img/documentpill.jpg";
import Accordion from "@/components/shared/Accordion.vue/";
import CardFaq from "@/components/Cards/CardFaq.vue";
import DeviceLookup from "@/components/Admin/DeviceLookup.vue";
import PublishedDeviceShort from "@/components/PublishedDeviceShort.vue";

export default {
  name: "Index",
  components: {
    MainFooter,
    IndexNavbar,
    Hero,
    ShortAboutUs,
    CenterImgDesign,
    FileOrganizationSection,
    ActionButton,
    CardFaq,
    Accordion,
    DeviceLookup,
    PublishedDeviceShort,
  },
  data() {
    return {
      documentspill,
    };
  },
};
</script>
