<template>
  <body
    style="
      background-image: url('https://static.vecteezy.com/system/resources/previews/008/017/890/original/or-illustrator-of-yellow-electric-vehicle-with-an-electric-charging-cabinet-with-nature-green-grass-and-shadow-of-town-under-blue-sky-and-white-clouds-vector.jpg');
    "
    class="bg-cover"
  >
    <div class="container">
      <!-- <div>
        {{ data }}
        {{ GStore.tripplan_list[GStore.tripplan_list.length - 1].ev }}
        {{ GStore.tripplan_list[GStore.tripplan_list.length - 1].pea }}
        <div
          v-if="(GStore.tripplan_list[GStore.tripplan_list.length - 1].ev = 1)"
        >
          <h1>EV</h1>
        </div>
      </div> -->
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
        <div
          v-if="tripcard.distance < currentUser.distance * 0.9"
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
                <div v-if="allServicesZero">
                  {{ detail.name }}
                </div>
                <div v-else>
                  <div v-if="data.ev == 1">
                    <div v-if="detail.station_of == 'ev'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.elexa == 1">
                    <div v-if="detail.station_of == 'elexa'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.mea == 1">
                    <div v-if="detail.station_of == 'mea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.pea == 1">
                    <div v-if="detail.station_of == 'pea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.ea == 1">
                    <div v-if="detail.station_of == 'ea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.evolt == 1">
                    <div v-if="detail.station_of == 'evolt'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.mg == 1">
                    <div v-if="detail.station_of == 'mg'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.ev == 0">
                    <div v-if="detail.station_of == 'ev'">Non staion here.</div>
                  </div>
                  <div v-if="data.elexa == 0">
                    <div v-if="detail.station_of == 'elexa'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.mea == 0">
                    <div v-if="detail.station_of == 'mea'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.pea == 0">
                    <div v-if="detail.station_of == 'pea'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.ea == 0">
                    <div v-if="detail.station_of == 'ea'">Non staion here.</div>
                  </div>
                  <div v-if="data.evolt == 0">
                    <div v-if="detail.station_of == 'evolt'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.mg == 0">
                    <div v-if="detail.station_of == 'mg'">Non staion here.</div>
                  </div>
                </div>
                <!-- <svg
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
                </svg> -->
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
                      class="mt-1 p-2 border w-full rounded-md text-gray-700"
                    />
                  </div>
                  <h1 class="text-black">Total cost: {{ GStore.totalCost }}</h1>
                  <button
                    type="submit"
                    class="mx-2 px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Submit
                  </button>
                  <button
                    @click="closePopup"
                    class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="
            tripcard.distance >= currentUser.distance * 0.9 &&
            tripcard.distance <= currentUser.distance * 1
          "
          class="flex md:contents"
        >
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-orange-400 pointer-events-none"></div>
            </div>
            <div
              class="flex justify-center w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-orange-400 shadow text-center"
            >
              <i class="fas fa-times-circle text-white">{{
                tripcard.distance
              }}</i>
            </div>
          </div>
          <div
            class="bg-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
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
                <div v-if="allServicesZero">
                  {{ detail.name }}
                </div>
                <div v-else>
                  <div v-if="data.ev == 1">
                    <div v-if="detail.station_of == 'ev'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.elexa == 1">
                    <div v-if="detail.station_of == 'elexa'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.mea == 1">
                    <div v-if="detail.station_of == 'mea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.pea == 1">
                    <div v-if="detail.station_of == 'pea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.ea == 1">
                    <div v-if="detail.station_of == 'ea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.evolt == 1">
                    <div v-if="detail.station_of == 'evolt'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.mg == 1">
                    <div v-if="detail.station_of == 'mg'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.ev == 0">
                    <div v-if="detail.station_of == 'ev'">Non staion here.</div>
                  </div>
                  <div v-if="data.elexa == 0">
                    <div v-if="detail.station_of == 'elexa'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.mea == 0">
                    <div v-if="detail.station_of == 'mea'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.pea == 0">
                    <div v-if="detail.station_of == 'pea'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.ea == 0">
                    <div v-if="detail.station_of == 'ea'">Non staion here.</div>
                  </div>
                  <div v-if="data.evolt == 0">
                    <div v-if="detail.station_of == 'evolt'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.mg == 0">
                    <div v-if="detail.station_of == 'mg'">Non staion here.</div>
                  </div>
                </div>
                <!-- <svg
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
                </svg> -->
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
                      class="mt-1 p-2 border w-full rounded-md text-gray-700"
                    />
                  </div>
                  <h1 class="text-black">Total cost: {{ GStore.totalCost }}</h1>
                  <button
                    type="submit"
                    class="mx-2 px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Submit
                  </button>
                  <button
                    @click="closePopup"
                    class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4"
                  >
                    Close
                  </button>
                </form>
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
            class="bg-red-700 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
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
                <div v-if="allServicesZero">
                  {{ detail.name }}
                </div>
                <div v-else>
                  <div v-if="data.ev == 1">
                    <div v-if="detail.station_of == 'ev'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.elexa == 1">
                    <div v-if="detail.station_of == 'elexa'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.mea == 1">
                    <div v-if="detail.station_of == 'mea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.pea == 1">
                    <div v-if="detail.station_of == 'pea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.ea == 1">
                    <div v-if="detail.station_of == 'ea'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.evolt == 1">
                    <div v-if="detail.station_of == 'evolt'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.mg == 1">
                    <div v-if="detail.station_of == 'mg'">
                      {{ detail.name }}
                    </div>
                  </div>
                  <div v-if="data.ev == 0">
                    <div v-if="detail.station_of == 'ev'">Non staion here.</div>
                  </div>
                  <div v-if="data.elexa == 0">
                    <div v-if="detail.station_of == 'elexa'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.mea == 0">
                    <div v-if="detail.station_of == 'mea'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.pea == 0">
                    <div v-if="detail.station_of == 'pea'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.ea == 0">
                    <div v-if="detail.station_of == 'ea'">Non staion here.</div>
                  </div>
                  <div v-if="data.evolt == 0">
                    <div v-if="detail.station_of == 'evolt'">
                      Non staion here.
                    </div>
                  </div>
                  <div v-if="data.mg == 0">
                    <div v-if="detail.station_of == 'mg'">Non staion here.</div>
                  </div>
                </div>
                <!-- <svg
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
                </svg> -->
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
                      class="mt-1 p-2 border w-full rounded-md text-gray-700"
                    />
                  </div>
                  <h1 class="text-black">Total cost: {{ GStore.totalCost }}</h1>
                  <button
                    type="submit"
                    class="mx-2 px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Submit
                  </button>
                  <button
                    @click="closePopup"
                    class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import GStore from "@/store";
import HistoryService from "@/services/HistoryService";
export default {
  name: "TripCard",
  inject: ["GStore"],
  beforeRouteEnter() {
    const id = {
      user_id: GStore.currentUser.id,
    };
    HistoryService.get_tripplan(id);
  },
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
      cost: 0,
      data: GStore.tripplan_list[GStore.tripplan_list.length - 1],
      // totalCost: null,
    };
  },
  computed: {
    allServicesZero() {
      return (
        this.data.ev == 0 &&
        this.data.elexa == 0 &&
        this.data.mea == 0 &&
        this.data.pea == 0 &&
        this.data.ea == 0 &&
        this.data.evolt == 0 &&
        this.data.mg == 0
      );
    },
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
      if (this.cost !== null) {
        this.GStore.totalCost += parseFloat(this.cost);
        console.log("Cost:", this.cost);
        this.cost = null;
        console.log("Total Cost:", this.GStore.totalCost);
      }
    },
  },
};
</script>
