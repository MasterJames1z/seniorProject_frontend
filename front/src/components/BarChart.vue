<template>
  <div class="bg-white mx-auto p-1 px-4 chart-container rounded-lg shadow-lg">
    <h1 class="bold text-xl">Summarize of plan</h1>
    <canvas ref="myChart"></canvas>
    <div v-if="!showChart" class="bg-white rounded-lg shadow-lg p-6">
      <p class="text-white bg-red-600">Summary of trips</p>
      <p>Electric Vehecle using cost = {{ totalCost }} THB</p>
      <p>Fuel car = 1750.28 THB</p>
      <p>
        Summary is EV using cost less than Fuel cars is {{ summaryCost }} THB
      </p>
    </div>
    <div v-if="!showChart" class="rounded-lg shadow-lg p-6">
      <p class="bg-red-500">**note**</p>
      <p>Car used for comparison: civic 1.5 el, fuel tank size 40 liters</p>
      <p>It has a fuel consumption rate of 15 kilometers/liter.</p>
      <p>Distance traveled: 701 kilometers.</p>
      <P>Using E20S oil, the price of oil is 37.24 baht/liter.</P>
      <p>
        Therefore, a total of 47 liters of oil will be used. The total price is
        1750.28 baht.
      </p>
    </div>
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
  inject: ["GStore"],
  mounted() {
    this.waitAndExecute();
  },
  methods: {
    async waitAndExecute() {
      // Wait for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Update data after the delay
      console.log(this.totalCost);
      this.yValues = [this.totalCost, 1750.28];
      this.renderChart();
      this.showChart = false;
      this.summaryCost = 1750.28 - this.totalCost;
    },
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
    submitForm() {
      console.log(this.totalCost);
      this.yValues = [this.totalCost, 1750.28];
      this.renderChart();
      this.showChart = false;
      this.summaryCost = 1750.28 - this.totalCost;
    },
  },
  data() {
    return {
      xValues: ["Electric Vehecle", "Fuel Car"],
      yValues: [null, null],
      barColors: ["green", "orange"],
      cost: null,
      showChart: true,
      summaryCost: null,
      totalCost: this.GStore.totalCost,
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
