<template>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <div class="w-full">
      <h1>Address</h1>
      <form class="bg-white rounded-lg shadow-lg p-6" @submit="handleSubmit">
        <div class="flex items-center mb-4">
          <input type="checkbox" class="mr-2" v-model="showTemplates" />
          <label class="text-gray-700">Find by Origin&Destination</label>
        </div>

        <!-- Template 1 -->
        <label for="currentLocationInput">Current location:</label>
        <div class="flex">
          <i class="fas fa-dot-circle fa-lg text-indigo-500 cursor-pointer">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click="locatorButtonPressed"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </i>
          <input
            type="text"
            placeholder="Enter your address"
            class="w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg px-4 py-2"
            v-model="currentLocationText"
          />
          <!-- <button
            class="bg-indigo-500 text-white rounded-lg px-4 py-2"
            @click="findCloseBuyButtonPressed"
          >
            Find Chager
          </button> -->
        </div>
        <!-- Template 2 -->
        <div v-if="showTemplates">
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
          <!-- Results section -->
          <div v-if="distance" class="mt-4">
            <p class="text-gray-700">Distance: {{ distance }}</p>
            <p class="text-gray-700">Duration: {{ duration }}</p>
          </div>
        </div>
      </form>
    </div>
    <div>
      <h1>Maps</h1>
      <GoogleMap
        api-key="AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4"
        style="width: 100%; height: 500px"
        :center="currentLocation"
        :zoom="15"
      >
        <Marker :options="{ position: currentLocation }" />
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  data() {
    return {
      lat: null,
      lng: null,
      type: "",
      radius: "",
      origin: "",
      destination: "",
      distance: null,
      duration: null,
      places: [],
      currentLocation: { lat: null, lng: null },
      currentLocationText: "",
      showTemplates: false,
    };
  },
  components: { GoogleMap, Marker },
  computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    },
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat, this.lng);
          this.currentLocation = { lat: this.lat, lng: this.lng };
        },
        (error) => {
          error;
          console.log("Error getting location");
        }
      );
    },
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
    handleSubmit(event) {
      event.preventDefault();
    },
  },
  watch: {
    currentLocation: {
      handler() {
        this.currentLocationText = `${this.currentLocation.lat || ""}, ${
          this.currentLocation.lng || ""
        }`;
      },
      immediate: true,
    },
  },
};
</script>
