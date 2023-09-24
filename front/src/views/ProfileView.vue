<template>
  <!-- component -->
  <div
    class="flex items-center bg-gradient-to-b from-green-500 to-green-800 h-screen w-full justify-center"
  >
    <div class="max-w-xs">
      <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
          <img
            class="w-45 h-45 rounded-full mx-auto"
            src="https://i1.sndcdn.com/avatars-LFbhC1cxyziQSGA1-7Vamhg-t500x500.jpg"
            alt="John Doe"
          />
        </div>
        <div class="p-2">
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
            {{ currentUser.username }}
          </h3>
          <div class="text-center text-gray-400 text-md font-semibold">
            <p>User</p>
          </div>
          <table class="text-md my-3">
            <tbody>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Car</td>
                <td class="px-2 py-2">{{ currentUser.car }}</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Battery</td>
                <td class="px-2 py-2">{{ currentUser.battery }}</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Range</td>
                <td class="px-2 py-2">{{ currentUser.distance }}</td>
              </tr>
            </tbody>
          </table>

          <div class="text-center my-3">
            <a
              class="text-xm text-orange-500 italic hover:underline hover:text-orange-700 font-medium"
              href="/history"
              >History</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
  computed: {
    currentUser() {
      return this.GStore.currentUser;
    },
  },
  data() {},
};
</script>
