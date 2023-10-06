<template>
  <div class="bg-green-600">
    <div class="flex justify-center items-center mb-4 p-2">
      <label for="newMarkerInput" class="mr-2 text-white">New Charger:</label>
      <input
        v-model="newMarker"
        type="text"
        id="newMarkerInput"
        class="border border-gray-300 px-2 py-1 rounded-md"
      />
      <button
        @click="addMarker"
        class="ml-2 bg-amber-500 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded"
      >
        Add Charger
      </button>
    </div>
    <div v-if="errorMessage" class="notification error">
      {{ errorMessage }}
    </div>
    <GoogleMap
      api-key="AIzaSyBBBTnD1m1mng6BoBzUvFGrHhNcAF8RJvE"
      style="width: 100%; height: 700px"
      :center="currentLocation"
      :zoom="12"
    >
      <Marker :options="{ position: currentLocation }" />
      <Marker
        v-for="(marker, index) in markers"
        :key="index"
        :options="{ position: marker }"
      />
    </GoogleMap>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      currentLocation: { lat: 18.80097997941176, lng: 98.95036944869248 },
      markers: [
        { lat: 18.9965075, lng: 98.9978829 },
        { lat: 18.808083, lng: 99.016117 },
        { lat: 18.74785, lng: 99.0191 },
        { lat: 18.7275185, lng: 99.0402282 },
        { lat: 18.8522483, lng: 99.0108769 },
        { lat: 18.7442002, lng: 98.9769169 },
        { lat: 18.767945, lng: 98.9804975 },
        { lat: 18.6696326, lng: 99.0518699 },
        { lat: 18.7682406, lng: 98.983417 },
        { lat: 18.7511051, lng: 99.0631361 },
        { lat: 18.8115938, lng: 98.9899904 },
        { lat: 18.7694765, lng: 98.9752825 },
        { lat: 18.7695628, lng: 98.9752664 },
        { lat: 18.8067525, lng: 99.0181883 },
        { lat: 18.80822, lng: 99.0046136 },
        { lat: 18.767954, lng: 98.9839944 },
      ],
      newMarker: "",
      errorMessage: "",
    };
  },
  methods: {
    addMarker() {
      const coordinates = this.newMarker.split(",");
      if (coordinates.length === 2) {
        const lat = parseFloat(coordinates[0].trim());
        const lng = parseFloat(coordinates[1].trim());
        if (!isNaN(lat) && !isNaN(lng)) {
          this.markers.push({ lat, lng });
          this.newMarker = "";
        } else {
          this.displayErrorMessage(
            "Invalid coordinates. Please enter valid numbers."
          );
        }
      } else {
        this.displayErrorMessage(
          "Invalid coordinates format. Please enter latitude and longitude separated by a comma."
        );
      }
    },

    displayErrorMessage(message) {
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000); // Clear the error message after 3 seconds
    },
  },
};
</script>

<style>
.notification {
  background-color: #f44336;
  color: white;
  padding: 12px;
  margin-top: 16px;
  border-radius: 4px;
}
</style>
