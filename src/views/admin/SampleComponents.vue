<template>
  <div class="flex justify-center">
    <h2
      class="text-xl my-10 font-bold text-site-green-1 text-center"
      @click="CHANGE_DARKMODE"
    >
      E-Holdings Enforcement:{{ darkmode }}
    </h2>
    <div class="w-1/2 lithopedion">
      <p class="text-right my-5">Dated: …....../…..…/.……</p>

      <br />

      I,
      <b>Mumbere Carlos</b>
      with ID or Passport number:
      <b>PC/RW123</b>
      , Residing In
      <b>Kigali, Nyarugenge ,Nyarugenge,Agatare</b>
      and phone number:
      <b>0784444345</b>
      , hereafter called "Buyer", intend to purchase the used electrical or
      electronic equipment from , and the SELLER likewise intends to sell such
      equipment to
      <b>James Harden</b>
      with Identity or Passport number:
      <b>1992121982</b>
      . Residing In
      <b>Kigali, Nyarugenge ,Nyarugenge,Agatare</b>
      and phone number:
      <b>0784444345</b>
      "Seller", we parties agree to the the transaction of the following Device:
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-site-gray-3">Model Name:</span>
        <span class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4">
          Model@Model\313
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-site-gray-3">Model:</span>
        <span class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4">
          Hikaru-Nakamura
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-site-gray-3">Serial Number</span>
        <span class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4">
          MAX12-Raport-Carlsen2020
        </span>
      </div>
      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
        <span class="text-site-gray-3">Mac Address</span>
        <span class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4">
          2844 Fabiano Caruana
        </span>
      </div>
      I
      <b>Mumbere Carlos</b>
      hereby certify that I am the legitimate owner of this used electrical or
      electronic equipment described above.
      <br />
      I sorely certify that all information in this agreement and in the
      equipment description above is complete and accurate and that I am
      competent to sign this agreement. Official Gazette nº 28 of 11/07/2022 35
      This agreement is signed in two (2) original copies of which one is kept
      by the SELLER and the other by the BUYER.

      <table class="w-full border">
        <tr>
          <td>Seller</td>
          <td>Buyer</td>
        </tr>
        <tr>
          <td><b>Mumbere Carlos</b></td>
          <td><b>James Harden</b></td>
        </tr>
        <tr>
          <td><fa icon="download" /></td>
          <td><fa icon="download" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
// import DeviceCard from "@/components/Admin/Cards/DeviceCard.vue";
export default {
  name: "MyComponent",
  data() {
    return {
      path: {
        1: {
          name: "Mumbere Electronics",
          date: "December 31, 2021",
        },
        2: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
        3: {
          name: "New Ownser ",
          date: "December 31, 2021",
        },
      },
    };
  },
  components: {
    // DeviceCard,
  },
  computed: {
    ...mapState(["darkmode"]),
  },
  methods: {
    ...mapMutations(["CHANGE_DARKMODE"]),
  },
};
</script>
<style scoped>
.lithopedion {
  background: url("@/assets/img/hero_image2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 25%;
}
</style>
