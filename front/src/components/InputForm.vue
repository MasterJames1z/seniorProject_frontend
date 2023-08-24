<template>
  <div class="p-8">
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="cost" class="block text-sm font-medium text-gray-700"
          >Cost of Charge</label
        >
        <input
          v-model="formData.cost"
          type="number"
          id="cost"
          name="cost"
          class="mt-1 p-2 border w-full rounded-md"
        />
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        cost: null,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
