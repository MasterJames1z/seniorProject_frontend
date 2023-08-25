<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mx-auto p-1 px-4 h-screen">
    <div class="w-full">
      Trip plan
      <div class="flex flex-col items-center mt-8 rounded-lg shadow-lg p-6">
        <!-- By Search province -->
        <!-- <label class="text-gray-700 mb-2">Starting point:</label>
        <input v-model="origin" type="text" class="w-64 px-4 py-2 border border-gray-300 rounded-md" />
        <label class="text-gray-700 mt-4 mb-2">Destination:</label>
        <input v-model="destination" type="text" class="w-64 px-4 py-2 border border-gray-300 rounded-md" /> -->
        <label class="text-gray-700 mb-2">Starting point:</label>
        <select
          v-model="origin"
          class="w-64 px-4 py-2 border border-gray-300 rounded-md"
        >
          <!-- <option value="" disabled>Select starting point</option> -->
          <option value="location1">เชียงใหม่</option>
        </select>
        <label class="text-gray-700 mb-2 mt-5">Destination:</label>
        <select
          v-model="destination"
          class="w-64 px-4 py-2 border border-gray-300 rounded-md"
        >
          <!-- <option value="" disabled>Select destination</option> -->
          <option value="locationA">กรุงเทพ</option>
        </select>

        <!-- <button
          v-if="!showTemplates"
          @click="calculateButtonPressed"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button> -->
        <button
          v-if="!showTemplates"
          @click="calculateButtonPressednonSearch"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Plan now
        </button>
      </div>
      <div class="rounded-lg shadow-lg p-6">
        <div class="flex mt-9">
          <input type="checkbox" class="mr-2" v-model="showTemplates" />
          <label class="text-gray-700">Filter</label>
        </div>
        <div class="flex mt-9">
          Type:
          <div class="mt-8">
            <input type="checkbox" class="mr-2" v-model="acType" />
            <label class="text-gray-700 mr-2">AC Type</label>
            <input type="checkbox" class="mr-2" v-model="dcType" />
            <label class="text-gray-700 mr-2">DC Type</label>
          </div>
        </div>
        <div class="flex mt-9">
          Service:
          <div class="grid grid-cols-6 mt-8">
            <input type="checkbox" class="mr-2" v-model="ev" />
            <label class="text-gray-700 mr-2">EV</label>
            <input type="checkbox" class="mr-2" v-model="elexa" />
            <label class="text-gray-700 mr-2">EleXA</label>
            <input type="checkbox" class="mr-2" v-model="mea" />
            <label class="text-gray-700 mr-2">MEA</label>
            <input type="checkbox" class="mr-2" v-model="pea" />
            <label class="text-gray-700 mr-2">PEA</label>
            <input type="checkbox" class="mr-2" v-model="ea" />
            <label class="text-gray-700 mr-2">EA</label>
            <input type="checkbox" class="mr-2" v-model="evolt" />
            <label class="text-gray-700 mr-2">EVolt</label>
            <input type="checkbox" class="mr-2" v-model="mg" />
            <label class="text-gray-700 mr-2">MG</label>
          </div>
        </div>
        <div v-if="showTemplates">
          <div>
            <button
              @click="calculateButtonPressednonSearch"
              class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Plan now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      Result for plan
      <div class="flex items-center justify-center bg-white">
        <div class="grid grid-cols-1 rounded-lg shadow-lg p-6">
          <p>Starting point: {{ origin }}</p>
          <p>Destination: {{ destination }}</p>
          <div v-if="distance" class="mt-4">
            <p class="text-gray-700">Distance: {{ distance }}</p>
            <p class="text-gray-700">Duration: {{ duration }}</p>
          </div>
          <div v-if="showTemplates && errorMessage" class="mt-4">
            <p class="text-red-500">{{ errorMessage }}</p>
          </div>
          <div v-if="showButtonRoad">
            <div>
              <button
                @click="roadmapButtonPressed"
                class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Go to road map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  inject: ["GStore"],
  props: {
    tripcard: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputValues: {
        origin: "",
        destination: "",
        location1: "เชียงใหม่",
        locationA: "กรุงเทพ",
      },
      distance: null,
      duration: null,
      showTemplates: false,
      filter: false,
      showButtonRoad: false,
    };
  },
  methods: {
    calculateButtonPressed() {
      if (!this.origin || !this.destination) {
        this.errorMessage = "Please enter both origin and destination.";
        return;
      }
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
      this.$router.push({ name: "checktrip" });
    },
    calculateButtonPressednonSearch() {
      this.origin = "เชียงใหม่";
      this.destination = "กรุงเทพ";
      this.distance = "701 KM";
      this.duration = "9 hours 1 min";
      this.showButtonRoad = true;
      console.log(this.origin, this.destination, this.distance, this.duration);
    },
  },
};
</script>
