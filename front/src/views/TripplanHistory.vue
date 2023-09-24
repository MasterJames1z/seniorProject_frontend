<template>
  <body class="bg-gradient-to-b from-green-500 to-green-800 h-screen">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
    >
      History
    </h5>
    <ol class="space-y-2 text-gray-500 dark:text-gray-400">
      <li v-for="detail in GStore.tripplan_list" :key="detail.user_id">
        <div
          class="flex justify-center border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="w-full">
            <h5
              class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
            >
              <span class="font-bold">{{ detail.id }}.</span>
              {{ detail.origin }} to {{ detail.destination }}
            </h5>
            <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li
                v-if="detail.ac_type == 1"
                class="font-normal text-green-600 dark:text-green-400"
              >
                ac type
              </li>
              <li
                v-if="detail.dc_type == 1"
                class="font-normal text-blue-600 dark:text-blue-400"
              >
                dc type
              </li>
              <li
                v-if="detail.ev == 1"
                class="font-normal text-red-600 dark:text-red-400"
              >
                EV
              </li>
              <li
                v-if="detail.elexa == 1"
                class="font-normal text-purple-600 dark:text-purple-400"
              >
                Elexa
              </li>
              <li
                v-if="detail.mea == 1"
                class="font-normal text-indigo-600 dark:text-indigo-400"
              >
                MEA
              </li>
              <li
                v-if="detail.pea == 1"
                class="font-normal text-pink-600 dark:text-pink-400"
              >
                PEA
              </li>
              <li
                v-if="detail.ea == 1"
                class="font-normal text-yellow-600 dark:text-yellow-400"
              >
                EA
              </li>
              <li
                v-if="detail.evolt == 1"
                class="font-normal text-orange-600 dark:text-orange-400"
              >
                Evolt
              </li>
              <li
                v-if="detail.mg == 1"
                class="font-normal text-teal-600 dark:text-teal-400"
              >
                MG
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  </body>
  <!-- {{ GStore.tripplan_list }} -->
</template>

<script>
import HistoryService from "@/services/HistoryService";
import GStore from "@/store";
export default {
  inject: ["GStore"],
  beforeRouteEnter() {
    const id = {
      user_id: GStore.currentUser.id,
    };
    HistoryService.get_tripplan(id);
  },
};
// import HistoryService from "@/services/HistoryService";
// export default {
//   inject: ["GStore"],
//   beforeRouteEnter() {
//     const id = {
//       user_id: this.GStore.currentUser.id,
//     };
//     console.log(id);
//     HistoryService.get_tripplan(id);
//     // console.log(this.GStore.tripplan_list);
//   },
// };
</script>
