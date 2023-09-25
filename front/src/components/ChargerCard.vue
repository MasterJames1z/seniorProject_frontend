<template>
  <div class="mx-auto p-1 px-4 bg-green-500">
    <div
      class="h-full p-5 bg-green-700 bg-opacity-90 border border-gray-200 rounded-lg shadow"
    >
      <a href="/chargermap">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
        >
          {{ charger.Station_Name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-white dark:text-gray-400">
        {{ charger.Station_At }}
      </p>
      <p class="mb-3 font-normal text-white dark:text-gray-400">
        latitude: {{ charger.lat }}
      </p>
      <p class="mb-3 font-normal text-white dark:text-gray-400">
        longitude: {{ charger.lon }}
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
