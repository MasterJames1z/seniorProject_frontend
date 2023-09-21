<template>
  <body class="bg-green-900">
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
        <div
          v-if="tripcard.distance < currentUser.distance"
          class="flex md:contents"
        >
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
            </div>
            <div
              class="flex justify-center w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center"
            >
              <i class="fas fa-check-circle text-white">{{
                tripcard.distance
              }}</i>
            </div>
          </div>
          <div
            class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
          >
            <h1 class="font-semibold text-xl mb-1">
              {{ tripcard.province }}
            </h1>
            <p class="leading-tight text-justify w-full">
              Recommend station in {{ tripcard.province }}
            </p>
            <div
              v-for="detail in tripcard.station_in"
              :key="detail.tripcard"
              :tripcard="detail"
            >
              <a
                :href="generateMap()"
                target="_blank"
                class="inline-flex items-center text-white hover:underline"
              >
                {{ detail.name }}
                <svg
                  class="w-3 h-3 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
            <button
              @click="showPopup"
              type="button"
              class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Do you charge on there?
            </button>
            <div
              v-if="isPopupVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div class="bg-white p-6 rounded shadow-md">
                <form @submit="submitForm" class="space-y-4">
                  <div>
                    <label
                      for="cost"
                      class="block text-sm font-medium text-gray-700"
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
                  <!-- <p>Total Cost: {{ totalCost }}</p> -->
                </form>
                <button
                  @click="closePopup"
                  class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="tripcard.distance > currentUser.distance"
          class="flex md:contents"
        >
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
            </div>
            <div
              class="flex justify-center w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center"
            >
              <i class="fas fa-times-circle text-white">{{
                tripcard.distance
              }}</i>
            </div>
          </div>
          <div
            class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
          >
            <h3 class="font-semibold text-lg mb-1">
              {{ tripcard.province }}
            </h3>
            <p class="leading-tight text-justify w-full">
              Recommend station in {{ tripcard.province }}
            </p>
            <div
              v-for="detail in tripcard.station_in"
              :key="detail.tripcard"
              :tripcard="detail"
            >
              <a
                :href="generateMap()"
                target="_blank"
                class="inline-flex items-center text-white hover:underline"
              >
                {{ detail.name }}
                <svg
                  class="w-3 h-3 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
            <button
              @click="showPopup"
              type="button"
              class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Do you charge on there?
            </button>
            <div
              v-if="isPopupVisible"
              class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div class="bg-white p-6 rounded shadow-md">
                <form @submit="submitForm" class="space-y-4">
                  <div>
                    <label
                      for="cost"
                      class="block text-sm font-medium text-gray-700"
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
                  <!-- <p>Total Cost: {{ totalCost }}</p> -->
                </form>
                <button
                  @click="closePopup"
                  class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "TripCard",
  inject: ["GStore"],
  props: {
    tripcard: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sum: 0,
      currentUser: this.GStore.currentUser,
      totalCost: this.GStore.totalCost,
      isPopupVisible: false,
      cost: null,
      // totalCost: null,
    };
  },
  methods: {
    generateMap() {
      return `https://www.google.com/maps/search/?api=1&query=${this.tripcard.station_in.chager_1.latitude},${this.tripcard.station_in.chager_1.longitude}`;
    },
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    submitForm(event) {
      event.preventDefault();
      this.GStore.totalCost += this.cost;
      this.cost = null;
      console.log(this.GStore.totalCost);
    },
  },
};
</script>
