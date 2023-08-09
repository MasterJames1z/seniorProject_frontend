<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 mx-auto p-1 px-4 bg-gray-200 dark:bg-gray-300 h-screen"
  >
    <div class="w-full p-2">
      <div class="flex items-center mb-4">
        <input type="checkbox" class="mr-2" v-model="showTemplates" />
        <label class="text-gray-700">Find by Starting point&Destination</label>
      </div>
      <div class="flex flex-col items-center mt-8">
        <label class="text-gray-700 mb-2">Starting point:</label>
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
      <!-- Results section -->
      <div v-if="distance" class="mt-4">
        <p class="text-gray-700">Distance: {{ distance }}</p>
        <p class="text-gray-700">Duration: {{ duration }}</p>
      </div>
      <div v-if="showTemplates && errorMessage" class="mt-4">
        <p class="text-red-500">{{ errorMessage }}</p>
      </div>

      <div v-if="showTemplates">
        <div>
          <button
            @click="roadmapButtonPressed"
            class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
    <div>
      2
      <p>Origin: {{ origin }}</p>
      <p>Destination: {{ destination }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inputValues: {
        origin: "",
        destination: "",
      },
      distance: null,
      duration: null,
      showTemplates: false,
    };
  },
  methods: {
    calculateButtonPressed() {
      const apiKey = "AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4";
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
          this.errorMessage = "";
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = "Error calculating distance. Please try again.";
        });
    },
    roadmapButtonPressed() {
      this.$router.push({ name: "findnear" });
    },
  },
};
</script>
