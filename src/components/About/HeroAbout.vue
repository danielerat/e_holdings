<template>
  <body
    class="py-12 2xl:px-20 px-6 xl:mx-auto xl:container overflow-y-hidden"
    style="overflow-y: hidden"
  >
    <div class="md:flex items-center justify-between">
      <div class="xl:w-5/12 md:w-1/2 xl:pr-16 md:pr-8">
        <h1
          role="heading"
          class="lg:text-5xl text-3xl font-bold leading-tight text-gray-800"
        >
          Why we do what we do?
        </h1>
        <p role="contentinfo" class="mt-4 text-base leading-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
          obcaecati dolores necessitatibus dignissimos unde impedit aperiam, ut
          exercitationem! Ab sequi reprehenderit voluptatibus cum repudiandae
          iusto iure. In maiores earum similique labore ab sed minima aliquam
          eligendi! Quos explicabo
        </p>
        <button
          role="button"
          aria-label="explore more"
          class="sm:w-auto w-full mt-10 text-base font-medium leading-none text-white bg-site-green-1 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-site-green-1 hover:bg-site-green-2 focus:outline-none"
        >
          Explore More
        </button>
      </div>
      <div class="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
        <img :src="allyouneed" alt="woman working" class="md:w-auto w-full" />
      </div>
    </div>
    <div
      class="flex flex-wrap md:mt-16 mt-8 gap-6 flex items-center justify-between"
    >
      <div>
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-site-green-1 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center"
          >
            <fa icon="bars"></fa>
          </div>
          <h2 class="ml-4 text-base font-semibold leading-4 text-gray-800">
            Lorem, ipsum dolor.
          </h2>
        </div>
        <p class="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptates, explicabo expedita totam quia odio pariatur dolore nisi
          repudiandae, hic harum! Nihil commodi molestiae reprehenderit, iste
          eligendi assumenda quis impedit.
        </p>
      </div>
      <div>
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-site-green-1 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center"
          >
            <fa icon="bars"></fa>
          </div>
          <h2 class="ml-4 text-base font-semibold leading-4 text-gray-800">
            lorem ipsum dolor
          </h2>
        </div>
        <p class="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eveniet
          ea inventore facilis illum sapiente. Eligendi laboriosam enim
          praesentium aliquid perspiciatis doloribus! Voluptate delectus
          incidunt autem reiciendis dolorum voluptatum enim?
        </p>
      </div>
      <div>
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-site-green-1 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center"
          >
            <fa icon="bars"></fa>
          </div>
          <h2 class="ml-4 text-base font-semibold leading-4 text-gray-800">
            Extraordinary Performance
          </h2>
        </div>
        <p class="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi rerum
          qui quam expedita quibusdam beatae nemo minima hic autem reprehenderit
          consequatur, non nobis earum soluta quos accusantium quaerat nihil
          maxime.
        </p>
      </div>
    </div>
  </body>
</template>

<script>
import allyouneed from "@/assets/img/allyouneed.png";
export default {
  name: "MyComponent",
  data() {
    return { allyouneed };
  },
};
</script>

<style scoped></style>
