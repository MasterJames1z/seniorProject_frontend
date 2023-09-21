<template>
  <body class="bg-green-900">
    <div v-if="currentUser">
      <!-- <h1 class="text-4xl text-center font-semibold mb-6 p-4 mt-4">Road map</h1> -->
      <tripView
        v-for="detail in myJson"
        :key="detail.province"
        :tripcard="detail"
      ></tripView>
    </div>

    <button
      @click="openPopup"
      type="button"
      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
    >
      Go to the summary
    </button>
  </body>
</template>

<script>
import mjson from "D:/Senior/seniorProject_frontend/front/new_map.json";
import tripView from "../components/TripplanCard.vue";

export default {
  inject: ["GStore"],
  computed: {
    currentUser() {
      return this.GStore.currentUser;
    },
  },
  components: {
    tripView,
  },
  data() {
    return {
      myJson: mjson,
    };
  },
  methods: {
    openPopup() {
      this.$router.push({ name: "summary" });
    },
  },
};
</script>
