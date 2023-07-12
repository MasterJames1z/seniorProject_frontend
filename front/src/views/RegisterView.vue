<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="/"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        EV Better
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create and account
          </h1>
          <Form
            class="space-y-4 md:space-y-6"
            @submit="handleRegister"
            :validation-schema="schema"
          >
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Username</label
              >
              <Field
                type="username"
                name="username"
                v-model="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required=""
              />
              <ErrorMessage name="username" class="text-yellow-600" />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <Field
                type="password"
                name="password"
                v-model="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
              <ErrorMessage name="password" class="text-yellow-600" />
            </div>
            <div>
              <label
                for="confirmPassword"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <Field
                type="password"
                name="confirmPassword"
                v-model="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                @input="checkPasswordMatch"
              />
              <ErrorMessage name="confirmPassword" class="text-yellow-600" />
              <p v-if="confirmPasswordError" class="text-red-500 mt-2">
                Passwords do not match.
              </p>
            </div>
            <div v-if="message" class="text-red-500">{{ message }}</div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
            >
              Register
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/AuthService";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      username: "",
      password: "",
      message: "",
      confirmPassword: "",
      confirmPasswordError: false,
      schema: yup.object().shape({
        username: yup.string().required("Username is required!"),
        password: yup.string().required("Password is required!"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords do not match.")
          .required("Confirm Password is required!"),
      }),
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        console.error("Passwords do not match.");
        return;
      }
      const user = {
        username: this.username,
        password: this.password,
      };
      AuthService.register(user)
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            console.error("Username already exists.");
            this.message = "Username already exists.";
            // Display a notification for the existing username
          } else {
            console.error(error);
          }
        });
    },
    checkPasswordMatch() {
      this.confirmPasswordError = this.password !== this.confirmPassword;
    },
  },
};
</script>
