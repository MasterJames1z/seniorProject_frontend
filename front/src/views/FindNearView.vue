<template>
  <div class="grid grid-cols-2">
    <div class="w-full">
      <form class="bg-white rounded-lg shadow-lg p-6">
        <div class="mb-4">
          <div class="flex">
            <input
              type="text"
              placeholder="Enter your address"
              class="w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg px-4 py-2"
              v-model="currentLocationText"
            />
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
          </div>
        </div>
        <!-- <div class="mb-4">
          <div class="flex space-x-4">
            <div class="w-1/2">
              <select
                v-model="type"
                class="w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg px-4 py-2"
              >
                <option value="gas_station">Electric station</option>
              </select>
            </div>
            <div class="w-1/2">
              <select
                v-model="radius"
                class="w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg px-4 py-2"
              >
                <option value="5000">5 KM</option>
                <option value="10000">10 KM</option>
                <option value="15000">15 KM</option>
                <option value="20000">20 KM</option>
              </select>
            </div>
          </div>
        </div> -->
        <button
          class="bg-indigo-500 text-white rounded-lg px-4 py-2"
          @click="findCloseBuyButtonPressed"
        >
          Find Chager
        </button>
      </form>
      <!-- <div class="segment" style="max-height: 500px; overflow-y: scroll">
        <div class="divide-y divide-gray-200">
          <div class="item" v-for="place in places" :key="place.id">
            <div class="content">
              <div class="font-bold">{{ place.name }}</div>
              <div class="text-gray-500">{{ place.vicinity }}</div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div>
      <h1>02</h1>
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
// import axios from "axios";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  data() {
    return {
      lat: null,
      lng: null,
      type: "",
      radius: "",
      places: [],
      currentLocation: { lat: null, lng: null },
      currentLocationText: "",
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

  // findCloseBuyButtonPressed() {
  //   // const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&type=${this.type}&radius=${this.radius}&key=AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4`;
  //   // axios
  //   //   .get(URL)
  //   //   .then((response) => {
  //   //     this.places = response.data.results;
  //   //     // this.addLocationsToGoogleMaps();
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error.message);
  //   //   });
  //   // const current = this.locatorButtonPressed();
  //   // console.log(this.lat, this.lng);
  //   // return current;
  //   const center = { lat: 18.800485862344402, lng: 98.95041157342138 };

  //   return { center };
  // },
};
</script>
