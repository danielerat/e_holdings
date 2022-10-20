<template>
  <div class="mx-auto container px-4 xl:px-0 mt-16 lg:mt-32 f-f-p">
    <h1
      class="text-center text-3xl lg:text-5xl tracking-wider text-color-heading"
    >
      What can we do for you
    </h1>
  </div>

  <section class="my-20 px-10">
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20">
      <div class="relative">
        <div class="m-3"><fa icon="bars" class="text-3xl"></fa></div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis
          corporis nesciunt labore et ipsum fuga tempora architecto,
          exercitationem modi corrupti delectus cupiditate fugit minima!
          Voluptatum ipsum eligendi nulla eius.
        </div>

        <div class="mx-auto hl mt-10 hidden lg:block"></div>
      </div>
      <!-- 2----------- -->
      <div class="relative">
        <div class="vl hidden lg:block absolute -left-10 top-4"></div>

        <div class="vl hidden lg:block absolute -right-10 top-4"></div>
        <div class="m-3"><fa icon="bars" class="text-3xl"></fa></div>
        <div class="relative">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis
          corporis nesciunt labore et ipsum fuga tempora architecto,
          exercitationem modi corrupti delectus cupiditate fugit minima!
          Voluptatum ipsum eligendi nulla eius.
        </div>
        <div class="mx-auto hl mt-10 hidden lg:block"></div>
      </div>
      <!-- ----------- -->
      <div class="relative">
        <div class="m-3"><fa icon="bars" class="text-3xl"></fa></div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis
          corporis nesciunt labore et ipsum fuga tempora architecto,
          exercitationem modi corrupti delectus cupiditate fugit minima!
          Voluptatum ipsum eligendi nulla eius.
        </div>

        <div class="mx-auto hl mt-10 hidden lg:block"></div>
      </div>
      <!-- ----------- -->
      <div>
        <div class="m-3"><fa icon="bars" class="text-3xl"></fa></div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis
          corporis nesciunt labore et ipsum fuga tempora architecto,
          exercitationem modi corrupti delectus cupiditate fugit minima!
          Voluptatum ipsum eligendi nulla eius.
        </div>
      </div>
      <!-- -------------- -->
      <div class="relative">
        <div class="vl hidden lg:block absolute -left-10 top-4"></div>

        <div class="vl hidden lg:block absolute -right-10 top-4"></div>
        <div class="m-3"><fa icon="bars" class="text-3xl"></fa></div>
        <div class="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis
          corporis nesciunt labore et ipsum fuga tempora architecto,
          exercitationem modi corrupti delectus cupiditate fugit minima!
          Voluptatum ipsum eligendi nulla eius.
        </div>
      </div>
      <!-- -------------- -->
      <div class="relative">
        <div class="m-3"><fa icon="bars" class="text-3xl"></fa></div>
        <div class="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis
          corporis nesciunt labore et ipsum fuga tempora architecto,
          exercitationem modi corrupti delectus cupiditate fugit minima!
          Voluptatum ipsum eligendi nulla eius.
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "faq",
  components: {},
};
</script>
<style scoped>
.vl {
  border-left: 2px solid #102a43;
  height: 138px;
}
.hl {
  border-bottom: 2px solid #102a43;
  width: 208px;
}
</style>
