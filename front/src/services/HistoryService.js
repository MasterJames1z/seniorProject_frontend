import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  upload_tripplan(items) {
    return apiClient.post("/items", items);
  },
  get_tripplan(id) {
    return apiClient.post("/get_list_tripplan", id).then((response) => {
      GStore.tripplan_list = response.data;
      console.log(id);
      console.log(GStore.tripplan_list);
    });
  },
};
