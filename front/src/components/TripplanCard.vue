<template>
  <div class="flex justify-center">
    <ol class="border-l border-neutral-300 dark:border-neutral-500">
      <!--First item-->
      <li v-if="tripcard.distance < currentUser.distance * 0.9">
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-500 dark:bg-green-700"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                {{ tripcard.province }}
              </h5>
            </a>
            <div>
              <h5
                class="m-auto mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black"
              >
                Details of {{ tripcard.province }}:
              </h5>
              <a
                :href="generateMap()"
                target="_blank"
                class="inline-flex items-center text-green-600 hover:underline"
              >
                {{ tripcard.station_in.chager_1.name }}
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
                </svg> </a
              ><br />
              <a
                :href="generateMap()"
                target="_blank"
                class="inline-flex items-center text-green-600 hover:underline"
              >
                {{ tripcard.station_in.chager_2.name }}
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
                </svg> </a
              ><br />
              <a
                :href="generateMap()"
                target="_blank"
                class="inline-flex items-center text-green-600 hover:underline"
              >
                {{ tripcard.station_in.chager_3.name }}
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
            <!-- <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              
            </p> -->
            <div>
              <button
                @click="showPopup"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Do you charge on there?
              </button>
              <div
                v-if="isPopupVisible"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div class="bg-white p-6 rounded shadow-md">
                  <!-- Card details content goes here -->

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
      </li>
      <li
        v-if="
          tripcard.distance >= currentUser.distance * 0.9 &&
          tripcard.distance <= currentUser.distance * 1
        "
      >
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[10px] mr-3 h-[18px] w-[18px] rounded-full bg-orange-400 dark:bg-orange-500"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                {{ tripcard.province }}
              </h5>
            </a>
            <div>
              <button
                @click="showPopup"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Do you charge on there?
              </button>
              <div
                v-if="isPopupVisible"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div class="bg-white p-6 rounded shadow-md">
                  <!-- Card details content goes here -->
                  <div>
                    <h5
                      class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black"
                    >
                      Details of {{ tripcard.province }}:
                    </h5>
                    <a
                      :href="generateMap()"
                      target="_blank"
                      class="inline-flex items-center text-green-600 hover:underline"
                    >
                      {{ tripcard.station_in.chager_1.name }}
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
                      </svg> </a
                    ><br />
                    <a
                      :href="generateMap()"
                      target="_blank"
                      class="inline-flex items-center text-green-600 hover:underline"
                    >
                      {{ tripcard.station_in.chager_2.name }}
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
                      </svg> </a
                    ><br />
                    <a
                      :href="generateMap()"
                      target="_blank"
                      class="inline-flex items-center text-green-600 hover:underline"
                    >
                      {{ tripcard.station_in.chager_3.name }}
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
                    @click="openPopup"
                    class="m-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-4"
                  >
                    OK
                  </button>
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
      </li>
      <li v-if="tripcard.distance > currentUser.distance">
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-red-500 dark:bg-red-700"
          ></div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {{ tripcard.distance }}
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                {{ tripcard.province }}
              </h5>
            </a>
            <div>
              <button
                @click="showPopup"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Do you charge on there?
              </button>
              <div
                v-if="isPopupVisible"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div class="bg-white p-6 rounded shadow-md">
                  <!-- Card details content goes here -->
                  <div>
                    <h5
                      class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black"
                    >
                      Details of {{ tripcard.province }}:
                    </h5>
                    <a
                      :href="generateMap()"
                      target="_blank"
                      class="inline-flex items-center text-green-600 hover:underline"
                    >
                      {{ tripcard.station_in.chager_1.name }}
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
                      </svg> </a
                    ><br />
                    <a
                      :href="generateMap()"
                      target="_blank"
                      class="inline-flex items-center text-green-600 hover:underline"
                    >
                      {{ tripcard.station_in.chager_2.name }}
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
                      </svg> </a
                    ><br />
                    <a
                      :href="generateMap()"
                      target="_blank"
                      class="inline-flex items-center text-green-600 hover:underline"
                    >
                      {{ tripcard.station_in.chager_3.name }}
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
      </li>
    </ol>
  </div>
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
      isPopupVisible: false,
      cost: null,
      totalCost: null,
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
    openPopup() {
      this.$router.push({ name: "summary" });
    },
    submitForm(event) {
      event.preventDefault();
      this.totalCost += this.cost;
      this.cost = null;
      console.log(this.totalCost);
    },
  },
};
</script>
