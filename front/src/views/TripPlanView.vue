<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mx-auto p-1 px-4 h-screen">
    <div class="w-full">
      Trip plan
      <div class="flex flex-col items-center mt-8 rounded-lg shadow-lg p-6">
        <!-- By Search province -->
        <!-- <label class="text-gray-700 mb-2">Starting point:</label>
        <input v-model="origin" type="text" class="w-64 px-4 py-2 border border-gray-300 rounded-md" />
        <label class="text-gray-700 mt-4 mb-2">Destination:</label>
        <input v-model="destination" type="text" class="w-64 px-4 py-2 border border-gray-300 rounded-md" /> -->
        <label class="text-gray-700 mb-2">Starting point:</label>
        <select
          v-model="origin"
          class="w-64 px-4 py-2 border border-gray-300 rounded-md"
        >
          <!-- <option value="" disabled>Select starting point</option> -->
          <option value="เชียงใหม่">เชียงใหม่</option>
        </select>
        <label class="text-gray-700 mb-2 mt-5">Destination:</label>
        <select
          v-model="destination"
          class="w-64 px-4 py-2 border border-gray-300 rounded-md"
        >
          <!-- <option value="" disabled>Select destination</option> -->
          <option value="กรุงเทพ">กรุงเทพ</option>
        </select>

        <!-- <button
          v-if="!showTemplates"
          @click="calculateButtonPressed"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button> -->
        <button
          v-if="!showTemplates"
          @click="calculateButtonPressednonSearch"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Plan now
        </button>
      </div>
      <div class="rounded-lg shadow-lg p-6">
        <div class="flex mt-9">
          <input type="checkbox" class="mr-2" v-model="showTemplates" />
          <label class="text-gray-700">Filter</label>
        </div>
        <div v-if="showTemplates" class="flex mt-9">
          Type:
          <div class="mt-8">
            <input type="checkbox" class="mr-2" v-model="acType" />
            <label class="text-gray-700 mr-2">AC Type</label>
            <input type="checkbox" class="mr-2" v-model="dcType" />
            <label class="text-gray-700 mr-2">DC Type</label>
          </div>
        </div>
        <div v-if="showTemplates" class="flex mt-9">
          Service:
          <div class="grid grid-cols-6 mt-8">
            <input type="checkbox" class="mr-2" v-model="ev" />
            <label class="text-gray-700 mr-2">EV</label>
            <input type="checkbox" class="mr-2" v-model="elexa" />
            <label class="text-gray-700 mr-2">EleXA</label>
            <input type="checkbox" class="mr-2" v-model="mea" />
            <label class="text-gray-700 mr-2">MEA</label>
            <input type="checkbox" class="mr-2" v-model="pea" />
            <label class="text-gray-700 mr-2">PEA</label>
            <input type="checkbox" class="mr-2" v-model="ea" />
            <label class="text-gray-700 mr-2">EA</label>
            <input type="checkbox" class="mr-2" v-model="evolt" />
            <label class="text-gray-700 mr-2">EVolt</label>
            <input type="checkbox" class="mr-2" v-model="mg" />
            <label class="text-gray-700 mr-2">MG</label>
          </div>
        </div>
        <div v-if="showTemplates">
          <div>
            <button
              @click="calculateButtonPressednonSearch"
              class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Plan now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      Result for plan
      <div class="flex items-center justify-center bg-white">
        <div class="grid grid-cols-1 rounded-lg shadow-lg p-6">
          <p>Starting point: {{ origin }}</p>
          <p>Destination: {{ destination }}</p>
          <div v-if="distance" class="mt-4">
            <p class="text-gray-700">Distance: {{ distance }}</p>
            <p class="text-gray-700">Duration: {{ duration }}</p>
          </div>
          <div v-if="showTemplates && errorMessage" class="mt-4">
            <p class="text-red-500">{{ errorMessage }}</p>
          </div>
          <div v-if="showButtonRoad">
            <div>
              <button
                @click="roadmapButtonPressed"
                class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Go to road map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="noTi"
      id="toast-bottom-right"
      class="fixed flex items-center max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert"
    >
      <div class="text-sm font-normal">Need to login before.</div>
      <div class="flex items-center ml-auto space-x-2">
        <a
          class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700"
          href="/login"
          >OK</a
        >
        <button
          @click="closeNoti"
          type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-undo"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import HistoryService from "@/services/HistoryService";
export default {
  inject: ["GStore"],
  data() {
    return {
      origin: "",
      destination: "",
      location1: "เชียงใหม่",
      locationA: "กรุงเทพ",
      distance: 0,
      duration: 0,
      showTemplates: false,
      filter: false,
      showButtonRoad: false,
      isPlanButtonDisabled: true,
      noTi: false,
      acType: false,
      dcType: false,
      ev: false,
      elexa: false,
      mea: false,
      pea: false,
      ea: false,
      evolt: false,
      mg: false,
    };
  },
  computed: {
    shouldShowResult() {
      return this.showButtonRoad && this.origin && this.destination;
    },
    currentUser() {
      return this.GStore.currentUser;
    },
    // selectedFiltersData() {
    //   return {
    //     acType: this.acType,
    //     dcType: this.dcType,
    //     ev: this.ev,
    //     elexa: this.elexa,
    //     mea: this.mea,
    //     pea: this.pea,
    //     ea: this.ea,
    //     evolt: this.evolt,
    //     mg: this.mg,
    //   };
    // },
  },
  methods: {
    // calculateButtonPressed() {
    //   if (!this.origin || !this.destination) {
    //     this.errorMessage = "Please enter both origin and destination.";
    //     return;
    //   }
    //   const apiKey = "AIzaSyAAUnokPnN8yWpQqaf5rFPIWrqyM26f1E4";
    //   const origin = encodeURIComponent(this.origin);
    //   const destination = encodeURIComponent(this.destination);
    //   const URL = `http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;
    //   axios
    //     .get(URL)
    //     .then((response) => {
    //       const result = response.data.rows[0].elements[0];
    //       this.distance = result.distance.text;
    //       this.duration = result.duration.text;
    //       console.log("Distance:", this.distance);
    //       console.log("Duration:", this.duration);
    //       this.errorMessage = "";
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //       this.errorMessage = "Error calculating distance. Please try again.";
    //     });
    // },
    roadmapButtonPressed() {
      this.$router.push({ name: "checktrip" });
    },
    calculateButtonPressednonSearch() {
      if (!this.origin || !this.destination) {
        return; // Exit the method if either origin or destination is not selected
      }
      (this.distance = 701), (this.duration = "9 hr 1 min");

      if (this.showTemplates) {
        const checkFilter = {
          user_id: this.GStore.currentUser.id,
          origin: this.origin,
          destination: this.destination,
          distance: this.distance,
          duration: this.duration,
          ac_type: this.acType,
          dc_type: this.dcType,
          ev: this.ev,
          elexa: this.elexa,
          mea: this.mea,
          pea: this.pea,
          ea: this.ea,
          evolt: this.evolt,
          mg: this.mg,
        };
        console.log(checkFilter);
        HistoryService.upload_tripplan(checkFilter).then(() => {
          const id = {
            user_id: this.GStore.currentUser.id,
          };
          HistoryService.get_tripplan(id);
        });
      } else {
        const checkFilter = {
          user_id: this.GStore.currentUser.id,
          origin: this.origin,
          destination: this.destination,
          distance: this.distance,
          duration: this.duration,
          ac_type: this.acType,
          dc_type: this.dcType,
          ev: this.ev,
          elexa: this.elexa,
          mea: this.mea,
          pea: this.pea,
          ea: this.ea,
          evolt: this.evolt,
          mg: this.mg,
        };
        console.log(checkFilter);
        HistoryService.upload_tripplan(checkFilter).then(() => {
          const id = {
            user_id: this.GStore.currentUser.id,
          };
          console.log(id);
          HistoryService.get_tripplan(id);
        });
      }
      // (this.origin = "เชียงใหม่"), (this.destination = "กรุงเทพ");
      // this.distance = "701 KM";
      // this.duration = "9 hours 1 min";
      this.showButtonRoad = true;
      // this.isPlanButtonDisabled = false;
      // this.noTi = true;
      // // const selectedFilters = this.selectedFiltersData;
      // console.log(this.origin, this.destination, this.distance, this.duration);
    },
    closeNoti() {
      this.$router.push({ name: "tripplan" });
    },
  },
};
</script>
