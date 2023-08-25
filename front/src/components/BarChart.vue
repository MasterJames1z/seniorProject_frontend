<template>
  <div class="chart-container">
    <div v-if="showChart" class="p-8">
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="cost" class="block text-sm font-medium text-gray-700"
            >Cost of Charge</label
          >
          <input
            v-model="cost"
            type="number"
            id="cost"
            name="cost"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
    <canvas ref="myChart"></canvas>
    <div v-if="!showChart" class="rounded-lg shadow-lg p-6">
      <p class="text-white bg-red-500">Summary of trips</p>
      <p>Electric Vehecle using cost = {{ cost }} THB</p>
      <p>Old car(Fuel car) = 1750.28 THB</p>
      <p>
        Summary is EV using cost less than fuel cars is {{ summaryCost }} THB
      </p>
    </div>
    <!-- <div v-if="!showChart" class="rounded-lg shadow-lg p-6">
      <p class="bg-red-500">**note**</p>
      <p>รถที่ใช้เปรียบเทียบ: civic 1.5 el cvt ขนาดถังน้ำมัน 40 ลิตร</p>
      <p>มีอัตราการกินน้ำมันอยู่ที่ 15 กิโลเมตร/ลิตร</p>
      <p>ระยะทางที่ใช้เดินทาง 701 กิโลเมตร</p>
      <P>ใช้น้ำมัน e20s ราคาน้ำมันอยู่ที่ 37.24 บาท/ลิตร</P>
      <p>ดังนั้นจะใช้น้ำมันทั้งหมด 47 ลิตร ราคารวมอยู่ที่ 1750.28 บาท</p>
    </div> -->
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
  // mounted() {
  //   this.renderChart();
  // },
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
    submitForm() {
      console.log(this.cost);
      this.yValues = [this.cost, 1750.28];
      this.renderChart();
      this.showChart = false;
      this.summaryCost = 1750.28 - this.cost;
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
