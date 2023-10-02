<template>
  <body
    style="
      background-image: url('https://static.vecteezy.com/system/resources/previews/008/017/890/original/or-illustrator-of-yellow-electric-vehicle-with-an-electric-charging-cabinet-with-nature-green-grass-and-shadow-of-town-under-blue-sky-and-white-clouds-vector.jpg');
    "
    class="bg-cover"
  >
    <div
      v-if="showLogin"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            @click="closeNoti"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
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
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              You need to login before.
            </h3>
            <button
              @click="loginBefore"
              data-modal-hide="popup-modal"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto p-1 px-4 h-screen"
    >
      <div class="w-full">
        <div
          class="bg-green-500 bg-opacity-50 flex flex-col items-center mt-8 rounded-lg shadow-lg p-6"
        >
          <h1 class="text-gray-700 text-xl font-bold mb-4">Normal search</h1>
          <div class="flex mt-3">
            <input type="checkbox" class="mr-2" v-model="showTemplates" />
            <label class="text-gray-700">Filter</label>
          </div>
          <label class="text-gray-700 mt-5 mb-2">Starting point:</label>
          <select
            v-model="origin"
            class="w-64 px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Chiang Mai">Chiang Mai</option>
            <option value="Khon Khan">Khon Khan</option>
          </select>
          <label class="text-gray-700 mb-2 mt-5">Destination:</label>
          <select
            v-model="destination"
            class="w-64 px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Bangkok">Bangkok</option>
          </select>

          <div v-if="showError" class="text-red-500 text-sm mt-2">
            Please select both starting point and destination.
          </div>
          <button
            v-if="!showTemplates"
            @click="calculateButtonPressed"
            class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Plan now
          </button>
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
              <input type="checkbox" class="" v-model="ev" />
              <label class="text-gray-700">PTT</label>
              <input type="checkbox" class="" v-model="elexa" />
              <label class="text-gray-700">EleXA</label>
              <input type="checkbox" class="" v-model="mea" />
              <label class="text-gray-700">MEA</label>
              <input type="checkbox" class="" v-model="pea" />
              <label class="text-gray-700">PEA</label>
              <input type="checkbox" class="" v-model="ea" />
              <label class="text-gray-700">EA</label>
              <input type="checkbox" class="" v-model="evolt" />
              <label class="text-gray-700">EVolt</label>
              <input type="checkbox" class="" v-model="mg" />
              <label class="text-gray-700">MG</label>
            </div>
          </div>
          <div v-if="showTemplates">
            <div>
              <button
                @click="calculateButtonPressed"
                class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Plan now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div
          class="bg-green-500 bg-opacity-50 flex flex-col items-center mt-8 rounded-lg shadow-lg p-6"
        >
          <h1 class="text-xl font-bold mb-4">Result for search</h1>
          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1">
              <h1 class="text-xl text-bold">Starting point: {{ origin }}</h1>
              <h1 class="text-xl text-bold">Destination: {{ destination }}</h1>
            </div>
          </div>
        </div>
        <div
          class="bg-green-500 bg-opacity-50 flex flex-col items-center mt-3 rounded-lg shadow-lg p-6"
        >
          <h1 class="text-xl font-bold mb-2">Result for calculate</h1>
          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1">
              <div v-if="distance == 0" class="mt-4">
                <p class="text-gray-700 text-xl text-bold">
                  Not calculate yet.
                </p>
              </div>
              <div v-if="distance != 0" class="mt-4">
                <p class="text-gray-700 text-xl text-bold">
                  Distance: {{ distance }}
                </p>
                <p class="text-gray-700 text-xl text-bold">
                  Duration: {{ duration }}
                </p>
              </div>
              <div v-if="showTemplates && errorMessage" class="mt-4">
                <p class="text-red-500">{{ errorMessage }}</p>
              </div>
              <div>
                <div v-if="showButtonRoad">
                  <button
                    @click="roadmapButtonPressed"
                    class="mt-4 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Go to road map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="showTemplates === true"
          class="bg-green-500 bg-opacity-50 flex flex-col items-center mt-4 rounded-lg shadow-lg p-6"
        >
          <h1 class="text-xl font-bold mb-2">Result of filter</h1>
          <div class="flex items-center justify-center">
            <!-- <div class="grid grid-cols-1">
              <div class="mt-4">
                <p v-if="ev" class="text-red-700 text-xl text-bold">PTT</p>
                <p v-if="elexa" class="text-red-700 text-xl text-bold">EleXA</p>
                <p v-if="mea" class="text-red-700 text-xl text-bold">MEA</p>
                <p v-if="pea" class="text-red-700 text-xl text-bold">PEA</p>
                <p v-if="ea" class="text-red-700 text-xl text-bold">EA</p>
                <p v-if="evolt" class="text-red-700 text-xl text-bold">EVolt</p>
                <p v-if="mg" class="text-red-700 text-xl text-bold">MG</p>
              </div>
            </div> -->
            <p
              v-if="selectedItems.length > 0"
              class="text-red-700 text-xl text-bold mt-4"
            >
              Filter items: {{ selectedItemsString }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import HistoryService from "@/services/HistoryService";
export default {
  inject: ["GStore"],
  data() {
    return {
      origin: "",
      destination: "",
      distance: 0,
      duration: 0,
      showError: false,
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
      showLogin: false,
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
    selectedItems() {
      const items = [];
      if (this.acType) items.push("AC Type");
      if (this.dcType) items.push("DC Type");
      if (this.ev) items.push("PTT");
      if (this.elexa) items.push("EleXA");
      if (this.mea) items.push("MEA");
      if (this.pea) items.push("PEA");
      if (this.ea) items.push("EA");
      if (this.evolt) items.push("EVolt");
      if (this.mg) items.push("MG");
      return items;
    },
    selectedItemsString() {
      return this.selectedItems.join(", ");
    },
  },
  watch: {
    origin: function () {
      this.showError = false;
    },
    destination: function () {
      this.showError = false;
    },
  },
  methods: {
    calculateButtonPressed() {
      if (!this.origin || !this.destination) {
        this.errorMessage = "Please enter both origin and destination.";
        return;
      }
      const apiKey = "AIzaSyDyU5quiY550C5Sxx7qzcwiWRedc5DnRzc";
      const origin = encodeURIComponent(this.origin);
      const destination = encodeURIComponent(this.destination);
      const URL = `http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;
      axios
        .get(URL)
        .then((response) => {
          const result = response.data.rows[0].elements[0];
          this.distance = result.distance.text;
          this.duration = result.duration.text;
          console.log("Distance:", this.distance);
          console.log("Duration:", this.duration);
          this.errorMessage = "";
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = "Error calculating distance. Please try again.";
        });
      if (!this.origin || !this.destination) {
        this.showError = true;
        return; // Exit the method if either origin or destination is not selected
      }
      // (this.distance = 701), (this.duration = "9 hr 1 min");
      if (!this.currentUser) {
        this.showLogin = true;
        return;
      }
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
      this.showButtonRoad = true;
    },
    roadmapButtonPressed() {
      if (!this.currentUser) {
        this.showLogin = true;
        return;
      }
      this.$router.push({ name: "checktrip" });
    },
    // calculateButtonPressednonSearch() {
    //   if (!this.origin || !this.destination) {
    //     this.showError = true;
    //     return; // Exit the method if either origin or destination is not selected
    //   }
    //   (this.distance = 701), (this.duration = "9 hr 1 min");
    //   if (!this.currentUser) {
    //     this.showLogin = true;
    //     return;
    //   }
    //   if (this.showTemplates) {
    //     const checkFilter = {
    //       user_id: this.GStore.currentUser.id,
    //       origin: this.origin,
    //       destination: this.destination,
    //       distance: this.distance,
    //       duration: this.duration,
    //       ac_type: this.acType,
    //       dc_type: this.dcType,
    //       ev: this.ev,
    //       elexa: this.elexa,
    //       mea: this.mea,
    //       pea: this.pea,
    //       ea: this.ea,
    //       evolt: this.evolt,
    //       mg: this.mg,
    //     };
    //     console.log(checkFilter);
    //     HistoryService.upload_tripplan(checkFilter).then(() => {
    //       const id = {
    //         user_id: this.GStore.currentUser.id,
    //       };
    //       HistoryService.get_tripplan(id);
    //     });
    //   } else {
    //     const checkFilter = {
    //       user_id: this.GStore.currentUser.id,
    //       origin: this.origin,
    //       destination: this.destination,
    //       distance: this.distance,
    //       duration: this.duration,
    //       ac_type: this.acType,
    //       dc_type: this.dcType,
    //       ev: this.ev,
    //       elexa: this.elexa,
    //       mea: this.mea,
    //       pea: this.pea,
    //       ea: this.ea,
    //       evolt: this.evolt,
    //       mg: this.mg,
    //     };
    //     console.log(checkFilter);
    //     HistoryService.upload_tripplan(checkFilter).then(() => {
    //       const id = {
    //         user_id: this.GStore.currentUser.id,
    //       };
    //       console.log(id);
    //       HistoryService.get_tripplan(id);
    //     });
    //   }
    //   // (this.origin = "เชียงใหม่"), (this.destination = "กรุงเทพ");
    //   // this.distance = "701 KM";
    //   // this.duration = "9 hours 1 min";
    //   this.showButtonRoad = true;
    //   // this.isPlanButtonDisabled = false;
    //   // this.noTi = true;
    //   // // const selectedFilters = this.selectedFiltersData;
    //   // console.log(this.origin, this.destination, this.distance, this.duration);
    // },
    loginBefore() {
      this.$router.push({ name: "login" });
    },
    closeNoti() {
      this.showLogin = false;
    },
    distanceZero() {},
  },
};
</script>
