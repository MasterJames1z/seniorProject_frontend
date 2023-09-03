<template>
  <div v-if="currentUser">
    <tripView
      v-for="detail in myJson"
      :key="detail.province"
      :tripcard="detail"
    ></tripView>
  </div>

  <div>
    <button
      @click="openPopup"
      class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
    >
      Go to the summary
    </button>
  </div>
</template>

<script>
import mjson from "D:/Senior/seniorProject_frontend/front/map.json";
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
