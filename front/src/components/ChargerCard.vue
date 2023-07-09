<template>
  <div class="mx-auto px-4">
    <div
      class="h-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ charger.Station_Name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ charger.Station_At }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Lat: {{ charger.lat }} || Lan: {{ charger.lon }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChargerCard",
  props: {
    charger: {
      type: Object,
      required: true,
    },
  },
};
</script>
