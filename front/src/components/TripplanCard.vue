<template>
  <div class="flex items-center justify-center grid grid-col-1">
    <ol class="border-l border-neutral-300 dark:border-neutral-500">
      <!--First item-->
      <li>
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">{{ tripcard.province }}</h4>
          <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            {{ tripcard.station_in }}
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TripCard",
  props: {
    tripcard: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
