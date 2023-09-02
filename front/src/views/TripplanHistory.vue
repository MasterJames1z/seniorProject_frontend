<template>
  <div
    v-for="detail in GStore.tripplan_list"
    :key="detail.user_id"
    class="flex justify-center"
  >
    <a
      href="#"
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ detail.origin }} to {{ detail.destination }}
      </h5>
      <p
        v-if="detail.ac_type == 1"
        class="font-normal text-gray-700 dark:text-gray-400"
      >
        ac type
      </p>
      <p
        v-if="detail.dc_type == 1"
        class="font-normal text-gray-700 dark:text-gray-400"
      >
        dc type
      </p>
      <div>
        <p
          v-if="detail.ev == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          EV
        </p>
        <p
          v-if="detail.elexa == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          Elexa
        </p>
        <p
          v-if="detail.mea == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          MEA
        </p>
        <p
          v-if="detail.pea == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          PEA
        </p>
        <p
          v-if="detail.ea == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          EA
        </p>
        <p
          v-if="detail.evolt == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          Evolt
        </p>
        <p
          v-if="detail.mg == 1"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          MG
        </p>
      </div>
    </a>
  </div>

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
