<template>
  <section>
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
      <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            :src="sampleImage"
            class="object-cover w-full aspect-square rounded-xl"
          />

          <div class="grid grid-cols-2 gap-4 lg:mt-4">
            <img
              alt="Les Paul"
              :src="sampleImage"
              class="object-cover w-full aspect-square rounded-xl"
            />

            <img
              alt="Les Paul"
              :src="sampleImage"
              class="object-cover w-full aspect-square rounded-xl"
            />

            <img
              alt="Les Paul"
              :src="sampleImage"
              class="object-cover w-full aspect-square rounded-xl"
            />

            <img
              alt="Les Paul"
              :src="sampleImage"
              class="object-cover w-full aspect-square rounded-xl"
            />
          </div>
        </div>

        <div class="sticky top-0">
          <strong
            class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
          >
            <fa v-if="device.category == 'computer'" icon="laptop" />
            <fa v-else-if="device.category == 'phone'" icon="mobile-button" />
            <fa v-else-if="device.category == 'electronic'" icon="plug" />
            {{ device.city }}
          </strong>

          <div class="flex justify-between mt-8">
            <div class="max-w-[35ch]">
              <h1 class="text-2xl font-bold">
                {{ device.name }}
              </h1>

              <p class="mt-0.5 text-sm">
                <fa icon="circle-user" />
                {{ device.owner }}
              </p>
            </div>

            <p class="text-lg font-bold">Frw {{ device.price }}</p>
          </div>

          <details
            class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary class="block">
              <div>
                <div class="prose max-w-none group-open:hidden">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>
                </div>

                <span
                  class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
                >
                  Read More
                </span>
              </div>
            </summary>

            <div class="pb-6 prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                architecto quam nesciunt, dolor veritatis nisi minus inventore,
                rerum at recusandae?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nam sapiente nobis ea veritatis error consequatur nisi
                exercitationem iure laudantium culpa, animi temporibus non!
                Maxime et quisquam amet. A, deserunt!
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import sampleImage from "@/assets/img/mac.png";
export default {
  components: {},
  data() {
    return {
      sampleImage,
      device: {
        name: "Smart Iron",
        category: "electronic",
        date: "January 1",
        owner: "James Harden",
        city: "kigali",
        price: "300,000",
      },
    };
  },
};
</script>
