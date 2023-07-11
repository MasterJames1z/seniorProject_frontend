<template>
  <h1>List of charger station in Chiang Mai</h1>
  <chargerView
    v-for="detail in myJson"
    :key="detail.id"
    :charger="detail"
  ></chargerView>
</template>

<script>
import json from "D:/Senior/seniorProject_frontend/front/db.json";
import chargerView from "../components/ChargerCard.vue";

export default {
  components: {
    chargerView,
  },
  data() {
    return {
      myJson: json,
    };
  },
};
</script>
