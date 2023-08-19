<template>
  <div class="flex justify-center top-100 left-20 right-30">
    <ol class="border-l border-neutral-300 dark:border-neutral-500">
      <!--First item-->
      <li v-if="tripcard.distance < currentUser.distance">
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-300 dark:bg-green-500"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">{{ tripcard.province }}</h4>
          <!-- <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            {{ tripcard.station_in.chager_1.name }}
          </p>
          <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            {{ tripcard.station_in.chager_2.name }}
          </p> -->
        </div>
      </li>
      <li
        v-if="
          tripcard.distance >= currentUser.distance * 0.9 &&
          tripcard.distance <= currentUser.distance * 1
        "
      >
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[10px] mr-3 h-[18px] w-[18px] rounded-full bg-orange-300 dark:bg-orange-500"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">{{ tripcard.province }}</h4>
          <!-- <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            {{ tripcard.station_in.chager_1 }}
          </p> -->
        </div>
      </li>
      <li v-if="tripcard.distance > currentUser.distance">
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-red-300 dark:bg-red-500"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">{{ tripcard.province }}</h4>
          <!-- <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            {{ tripcard.station_in.chager_1.name }}
          </p>
          <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            {{ tripcard.station_in.chager_2.name }}
          </p> -->
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TripCard",
  inject: ["GStore"],
  computed: {
    currentUser() {
      return this.GStore.currentUser;
    },
  },
  data: function () {
    return {
      sum: 0,
    };
  },
  props: {
    tripcard: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
