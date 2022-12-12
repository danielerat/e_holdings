<template>
  <div>
    <!-- First modal -->
    <vue-final-modal
      v-model="showModal"
      classes="modal-container "
      content-class="modal-content"
      :drag="true"
    >
      <div class="modal__content relative">
        <span class="modal__close absolute right-0" @click="showModal = false">
          <fa icon="times" />
        </span>
      </div>
    </vue-final-modal>

    <!-- Second modal -->
    <vue-final-modal
      v-model="showConfirmModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <span class="modal__title">Confirm</span>
      <div class="modal__content">Confirm to submit.</div>
      <div class="modal__action">
        <action-button
          type="primary"
          size="lg"
          text="btn.signUp"
          class="mr-5"
          @click="confirm"
        />
        <action-button
          type="primary"
          size="lg"
          text="btn.signUp"
          class="mr-5"
          @click="showConfirmModal = false"
        />
      </div>
    </vue-final-modal>

    <v-button @click="showModal = true">Open modal</v-button>
  </div>
</template>

<script>
// import DeviceCard from "@/components/Admin/Cards/DeviceCard.vue";

import ActionButton from "@/components/shared/ActionButton.vue";
// import safetyCheck from "@/components/shared/SafetyCheck.vue";

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
      showModal: true,
      showConfirmModal: false,
    };
  },
  methods: {
    confirm() {
      this.showConfirmModal = false;
      this.showModal = false;
    },
  },
  components: {
    // DeviceCard,
    ActionButton,
    // safetyCheck,
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
/* 
  ::v-deep .modal-container {
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    align-items: top;
    position: relative;
    max-height: 90vh;
  }
  ::v-deep .modal-content {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    overflow-y: auto;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
    width: 80%;
  }
  .modal__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  } */
</style>
