<template>
  <div class="bg-white mx-auto p-1 px-4 chart-container rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-4">Summarize of plan</h1>
    <details class="question py-4 border-b border-grey-lighter">
      <summary class="flex items-center">
        Chart
        <button class="ml-auto">
          <svg
            class="fill-current opacity-75 w-4 h-4 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </button>
      </summary>

      <div class="mt-4 leading-normal text-sm">
        <canvas ref="myChart"></canvas>
      </div>
    </details>
    <details class="question py-4 border-b border-grey-lighter">
      <summary class="flex items-center">
        Summarize
        <button class="ml-auto">
          <svg
            class="fill-current opacity-75 w-4 h-4 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </button>
      </summary>

      <div class="mt-4 leading-normal text-sm">
        <div v-if="!showChart">
          <p class="text-white bg-red-600">Summary of trips</p>
          <p>Electric Vehecle using cost = {{ totalCost }} THB</p>
          <p>Fuel car = 1750.28 THB</p>
          <p>
            Summary is EV using cost less than Fuel cars is
            {{ summaryCost }} THB
          </p>
        </div>
      </div>
    </details>
    <!-- <details class="question py-4 border-b border-grey-lighter">
      <summary class="flex items-center">
        Compare with car
        <button class="ml-auto">
          <svg
            class="fill-current opacity-75 w-4 h-4 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </button>
      </summary>

      <div class="mt-4 leading-normal text-sm">
        <div v-if="!showChart">
          <p class="bg-red-500">**Note**</p>
          <p>Car used for comparison: civic 1.5 el, fuel tank size 40 liters</p>
          <p>It has a fuel consumption rate of 15 kilometers/liter.</p>
          <p>Distance traveled: 701 kilometers.</p>
          <P>Using E20S oil, the price of oil is 37.64 baht/liter.</P>
          <p>
            Therefore, a total of 47 liters of oil will be used. The total price
            is 1769.08 baht.
          </p>
          <p class="text-red-500">update 24/09/2023</p>
        </div>
      </div>
    </details> -->
    <button
      id="showAllDetailsButton"
      class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mt-4"
      @click="showAllDetails"
    >
      Show all summary details</button
    ><br />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4"
      @click="captureAndSaveWebpage"
    >
      Capture and Save Webpage
    </button>
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

import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

export default {
  inject: ["GStore"],
  mounted() {
    this.waitAndExecute();
  },
  methods: {
    async waitAndExecute() {
      // Wait for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Update data after the delay
      console.log(this.totalCost);
      this.yValues = [this.totalCost, 1769.08];
      this.renderChart();
      this.showChart = false;
      this.summaryCost = 1769.08 - this.totalCost;
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
    // submitForm() {
    //   console.log(this.totalCost);
    //   this.yValues = [this.totalCost, 1750.28];
    //   this.renderChart();
    //   this.showChart = false;
    //   this.summaryCost = 1750.28 - this.totalCost;
    // },
    showAllDetails() {
      const detailsElements = document.querySelectorAll("details");
      const showDetails = !detailsElements[0].open;

      detailsElements.forEach((details) => {
        details.open = showDetails;
      });
    },
    async captureAndSaveWebpage() {
      // Capture the webpage content as an image using html2canvas
      const webpageElement = document.querySelector(".chart-container");
      const canvas = await html2canvas(webpageElement);

      // Convert the captured image to a Blob
      canvas.toBlob((blob) => {
        // Save the Blob as a file
        saveAs(blob, "webpage_capture.png");
      });
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
  background-color: #f0f0f0; /* Custom background color */
  font-family: "Arial", sans-serif; /* Custom font family */
  color: #333; /* Custom text color */
  padding: 20px; /* Add padding for spacing */
  /* Add other custom styles as needed */
}
</style>
