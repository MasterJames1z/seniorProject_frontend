<template>
  <!-- {{ totalCost }} -->
  <!-- <h1>Summary of plan</h1> -->
  <div
    style="
      background-image: url('https://static.vecteezy.com/system/resources/previews/008/017/890/original/or-illustrator-of-yellow-electric-vehicle-with-an-electric-charging-cabinet-with-nature-green-grass-and-shadow-of-town-under-blue-sky-and-white-clouds-vector.jpg');
    "
    class="app bg-cover"
  >
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
