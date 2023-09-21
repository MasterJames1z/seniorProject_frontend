<template>
  <div class="bg-green-500 min-h-screen">
    <!-- Hero section -->
    <div id="headed" class="bg-cover bg-center">
      <header class="bg-black bg-opacity-60">
        <div class="text-white py-20 container mx-auto px-4">
          <p class="text-lg p-3">
            The Better Decision of Electric Vehicle Charging Costs
          </p>
          <h1 class="text-4xl font-bold mb-4">
            <span> Welcome To Smart Website For Your Electric Vehicle EV </span
            ><span class="text-green-400">BETTER</span>
          </h1>
          <p class="text-l">
            This website that help decisions to find public changing station for
            give best and good experience to road a trip on them planner of
            trips.
          </p>
          <button
            @click="getStart"
            class="bg-green-600 text-white font-bold rounded-lg py-2 px-4 mt-8 hover:bg-white hover:text-green-600"
          >
            GET STARTED
          </button>
        </div>
      </header>
    </div>

    <!-- Main content section -->
    <main class="container mx-auto px-4 py-8">
      <h2 class="text-2xl text-white font-bold mb-4">Our Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-bold mb-2">Find Charger Station</h3>
          <p>
            Nearly chager station with radius 5km,10km,20km and 30km, when
            emergency time occur use it.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-bold mb-2">Trip Planning</h3>
          <p>
            Plan list rest point, charging station or target point, summary of
            planner information.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-bold mb-2">Compare with Fuel cars</h3>
          <p>
            Summary of planner to compare total cost between ev car to fuel car
            to show what are most effective.
          </p>
        </div>
      </div>
      <hr
        class="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-white"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <!-- First column -->
        <div>
          <div
            class="bg-cover bg-center rounded-lg h-full"
            style="
              background-image: url('https://www.usnews.com/object/image/00000185-7eae-dfff-a1f5-7eafb4670000/electric-car-charging.jpg?update-time=1672867712301&size=responsive640');
            "
          >
            <div class="bg-black bg-opacity-60"></div>
          </div>
        </div>

        <!-- Second column -->
        <div>
          <h3 class="text-2xl text-white font-bold mb-2">About EV Better</h3>
          <p class="text-lg">
            Discover the power of our app for effortless EV charging. Find
            nearby charging stations with ease, plan your trips hassle-free, and
            compare costs between EV and fuel cars. Simplify your EV experience
            and never worry about finding a charger again.
          </p>
          <div class="mt-6">
            <div class="grid grid-cols-2 gap-4">
              <!-- Component 1 -->
              <div class="bg-white rounded-lg shadow-lg p-4">
                <h4 class="text-lg font-bold mb-2">Find Charging Stations</h4>
                <p class="text-base">
                  Easily locate and navigate to nearby charging stations to keep
                  your EV powered up.
                </p>
              </div>

              <!-- Component 2 -->
              <div class="bg-white rounded-lg shadow-lg p-4">
                <h4 class="text-lg font-bold mb-2">Trip Planning</h4>
                <p class="text-base">
                  Plan your trips and identify charging points along the way for
                  a seamless and worry-free journey.
                </p>
              </div>

              <!-- Component 3 -->
              <div class="bg-white rounded-lg shadow-lg p-4">
                <h4 class="text-lg font-bold mb-2">Cost Comparison</h4>
                <p class="text-base">
                  Compare the costs of EV charging versus traditional fuel cars
                  to make informed decisions.
                </p>
              </div>

              <!-- Component 4 -->
              <div class="bg-white rounded-lg shadow-lg p-4">
                <h4 class="text-lg font-bold mb-2">Convenient and Reliable</h4>
                <p class="text-base">
                  Simplify your EV charging experience with our user-friendly
                  and reliable app.
                </p>
              </div>
            </div>

            <!-- <button
              class="mt-6 bg-blue-500 text-white font-bold rounded-lg py-2 px-4 hover:bg-blue-700"
            >
              Download Now
            </button> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods: {
    getStart() {
      this.$router.push({ name: "tripplan" });
    },
  },
};
</script>

<style>
#headed {
  background-image: url("https://img.freepik.com/premium-photo/electric-car-ev-charger-city-background_336913-200.jpg");
}

#img {
  background-image: url("https://www.usnews.com/object/image/00000185-7eae-dfff-a1f5-7eafb4670000/electric-car-charging.jpg?update-time=1672867712301&size=responsive640");
}

/* #bg {
  opacity: 50%;
} */
</style>
