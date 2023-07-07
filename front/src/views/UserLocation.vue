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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      origin: { lat: null, lng: null },
      destination: { lat: null, lng: null },
    };
  },
  methods: {
    calculateButtonPressed() {
      // const URL =
      //   "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.route.origin.lat},${this.route.origin.lng}&destinations=${this.route.destination.lat},${this.route.destination.lng}&key=AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4";
      // const URL =
      //   "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101%2C-73.89188969999998&destinations=40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4";
      axios
        .get(URL)
        .then((response) => {
          console.log("Done");
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
      console.log("Origin:", this.origin);
      console.log("Destination:", this.destination);
    },
  },
};
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
