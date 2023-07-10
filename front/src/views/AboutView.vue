<template>
  <GoogleMap
    api-key="AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4"
    style="width: 100%; height: 700px"
    :center="currentLocation"
    :zoom="12"
  >
    <Marker :options="{ position: currentLocation }" />
    <Marker :options="{ position: Station1 }" />
    <Marker :options="{ position: Station2 }" />
    <Marker :options="{ position: Station3 }" />
    <Marker :options="{ position: Station4 }" />
    <Marker :options="{ position: Station5 }" />
    <Marker :options="{ position: Station6 }" />
    <Marker :options="{ position: Station7 }" />
    <Marker :options="{ position: Station8 }" />
    <Marker :options="{ position: Station9 }" />
    <Marker :options="{ position: Station10 }" />
    <Marker :options="{ position: Station11 }" />
    <Marker :options="{ position: Station12 }" />
    <Marker :options="{ position: Station13 }" />
    <Marker :options="{ position: Station14 }" />
    <Marker :options="{ position: Station15 }" />
    <Marker :options="{ position: Station16 }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      currentLocation: { lat: 18.80097997941176, lng: 98.95036944869248 },
      Station1: { lat: 18.9965075, lng: 98.9978829 },
      Station2: { lat: 18.808083, lng: 99.016117 },
      Station3: { lat: 18.74785, lng: 99.0191 },
      Station4: { lat: 18.7275185, lng: 99.0402282 },
      Station5: { lat: 18.8522483, lng: 99.0108769 },
      Station6: { lat: 18.7442002, lng: 98.9769169 },
      Station7: { lat: 18.767945, lng: 98.9804975 },
      Station8: { lat: 18.6696326, lng: 99.0518699 },
      Station9: { lat: 18.7682406, lng: 98.983417 },
      Station10: { lat: 18.7511051, lng: 99.0631361 },
      Station11: { lat: 18.8115938, lng: 98.9899904 },
      Station12: { lat: 18.7694765, lng: 98.9752825 },
      Station13: { lat: 18.7695628, lng: 98.9752664 },
      Station14: { lat: 18.8067525, lng: 99.0181883 },
      Station15: { lat: 18.80822, lng: 99.0046136 },
      Station16: { lat: 18.767954, lng: 98.9839944 },
    };
  },
};
</script>
