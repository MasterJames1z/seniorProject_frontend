<template>
  <div class="chart-container">
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
// import { ref, watchEffect, onMounted } from "vue";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChart.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.xValues,
          datasets: [
            {
              backgroundColor: this.barColors,
              data: this.yValues,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: "World Wine Production 2018",
            },
          },
        },
      });
    },
  },
  data() {
    return {
      xValues: ["Electric Vehecle", "Fuel Car"],
      yValues: [750, 1500],
      barColors: ["green", "yellow"],
    };
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
