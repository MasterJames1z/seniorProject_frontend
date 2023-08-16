<template>
  <h1>Routing trip</h1>
  <tripView
    v-for="detail in myJson"
    :key="detail.province"
    :tripcard="detail"
  ></tripView>
</template>

<script>
import mjson from "D:/Senior/seniorProject_frontend/front/map.json";
import tripView from "../components/TripplanCard.vue";

export default {
  components: {
    tripView,
  },
  data() {
    return {
      myJson: mjson,
    };
  },
};
</script>
