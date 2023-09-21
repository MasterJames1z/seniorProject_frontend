<template>
  <!-- {{ totalCost }} -->
  <!-- <h1>Summary of plan</h1> -->
  <div class="app bg-green-800">
    <BarChart />
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";

export default {
  inject: ["GStore"],
  components: {
    BarChart,
  },
  data: function () {
    return {
      totalCost: this.GStore.totalCost,
    };
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
}
</style>
