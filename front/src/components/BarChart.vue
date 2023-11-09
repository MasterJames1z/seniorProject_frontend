<template>
  <div class="bg-white mx-auto p-1 px-4 chart-container rounded-lg shadow-lg">
    <h1 class="text-4xl font-semibold mb-6">Summary of Plan</h1>
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
          <!-- <p class="text-white bg-red-600">Summary of trips</p> -->
          <p>
            <span> Electric Vehecle using cost = </span
            ><span class="text-green-500">{{ totalCost }}</span> THB
          </p>
          <p>
            <span>Fuel car = </span>
            <span class="text-amber-500"> 1684 </span> THB
          </p>
          <p>
            <span>Summary is EV using cost less than Fuel cars is </span>
            <span class="text-red-500">{{ summaryCost }} </span> THB
          </p>
        </div>
      </div>
    </details>
    <details class="question py-4 border-b border-grey-lighter">
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
          <!-- <p class="bg-red-500">**Note**</p> -->
          <p>Car used for comparison: civic 1.5 el, fuel tank size 40 liters</p>
          <!-- <p>It has a fuel consumption rate of 15 kilometers/liter.</p> -->
          <!-- <p>Distance traveled: 701 kilometers.</p> -->
          <P>Using E20S oil, the price of oil is 35.44 baht/liter.</P>
          <!-- <p>
            Therefore, a total of 47 liters of oil will be used. The total price
            is 1665.68 baht.
          </p> -->
          <p class="text-red-500">update 13/10/2023</p>
          <!-- <h1>Gasohol E20 S EVO Prices</h1>
          <ul>
            <li v-for="(oil, index) in gasoholE20SEVOList" :key="index">
              <div>{{ oil.OilName }}</div>
              <div>Price Today: {{ oil.PriceToday }}</div>
            </li>
          </ul> -->
        </div>
      </div>
    </details>
  </div>
  <!-- <button
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
    <br />
    <button @click="sharePage">Share This Page</button> -->
</template>

<script>
// import { ref, watchEffect, onMounted } from "vue";
import axios from "axios";
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
    // Make an HTTP GET request to the API endpoint
    axios
      .get("https://oil-price.bangchak.co.th/ApiOilPrice2/en")
      .then((response) => {
        this.apiResponse = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    async waitAndExecute() {
      // Wait for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Update data after the delay
      console.log(this.totalCost);
      this.yValues = [this.totalCost, 1684];
      this.renderChart();
      this.showChart = false;
      this.summaryCost = 1684 - this.totalCost;
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
      apiResponse: null,
    };
  },
  computed: {
    gasoholE20SEVOList() {
      if (!this.apiResponse) {
        return [];
      }

      return this.apiResponse[0].OilList.filter(
        (oil) => oil.OilName === "Gasohol E20 S EVO"
      );
    },
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
