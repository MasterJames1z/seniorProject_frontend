<template>
  <GoogleMap
    api-key="AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
// import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 18.800485862344402, lng: 98.95041157342138 };

    return { center };
  },
};
</script>
