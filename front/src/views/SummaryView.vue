<template>
  <div class="app">
    <BarChart />
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";

export default {
  components: {
    BarChart,
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
