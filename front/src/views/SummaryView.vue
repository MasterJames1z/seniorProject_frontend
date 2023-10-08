<template>
  <div
    class="bg-cover bg-center bg-no-repeat app"
    style="
      background-image: url('https://static.vecteezy.com/system/resources/previews/008/017/890/original/or-illustrator-of-yellow-electric-vehicle-with-an-electric-charging-cabinet-with-nature-green-grass-and-shadow-of-town-under-blue-sky-and-white-clouds-vector.jpg');
    "
  >
    <div class="container mx-auto p-8 text-center text-gray-700">
      <BarChart />
      <div class="mt-8">
        <button
          class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mr-4"
          @click="captureAndSaveWebpage"
        >
          Capture and Save Webpage
        </button>
        <button
          class="bg-amber-500 hover:bg-amber-700 text-white px-4 py-2 rounded"
          @click="sharePage"
        >
          Share This Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default {
  inject: ["GStore"],
  components: {
    BarChart,
  },
  data: function () {
    return {
      totalCost: this.GStore.totalCost,
    };
  },
  methods: {
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
    sharePage() {
      if (navigator.share) {
        navigator
          .share({
            title: "EV Better summary",
            text: "Check out this awesome page!",
            url: "http://localhost:8080/summary",
          })
          .then(() => console.log("Shared successfully"))
          .catch((error) => console.error("Error sharing:", error));
      } else {
        alert("Sharing not supported in this browser.");
      }
    },
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  background-color: rgba(
    0,
    0,
    0,
    0.6
  ); /* Overlay with a semi-transparent background color */
}

/* Style the container and text */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); Add a subtle text shadow */
}

/* Style the buttons */
button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1e40af; /* Change button color on hover */
}
</style>
