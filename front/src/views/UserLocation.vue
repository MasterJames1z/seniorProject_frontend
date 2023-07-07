<template>
  <div class="flex flex-col items-center mt-8">
    <label class="text-gray-700 mb-2">Origin:</label>
    <input
      v-model="origin"
      type="text"
      class="w-64 px-4 py-2 border border-gray-300 rounded-md"
    />

    <label class="text-gray-700 mt-4 mb-2">Destination:</label>
    <input
      v-model="destination"
      type="text"
      class="w-64 px-4 py-2 border border-gray-300 rounded-md"
    />

    <button
      @click="calculateButtonPressed"
      class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Calculate
    </button>

    <div v-if="distance" class="mt-4">
      <p class="text-gray-700">Distance: {{ distance }}</p>
      <p class="text-gray-700">Duration: {{ duration }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      origin: "",
      destination: "",
      distance: null,
      duration: null,
    };
  },
  methods: {
    calculateButtonPressed() {
      const apiKey = "AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4 ";
      const origin = encodeURIComponent(this.origin);
      const destination = encodeURIComponent(this.destination);
      const URL = `http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

      axios
        .get(URL)
        .then((response) => {
          const result = response.data.rows[0].elements[0];
          this.distance = result.distance.text;
          this.duration = result.duration.text;
          console.log("Distance:", this.distance);
          console.log("Duration:", this.duration);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
