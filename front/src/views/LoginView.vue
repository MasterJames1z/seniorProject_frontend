<template>
  <!-- <body class="bg-green-800"> -->
  <div
    class="mx-auto p-1 px-4 bg-gradient-to-b from-green-500 to-green-800 dark:bg-white-800 h-screen"
  >
    <div
      class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
    >
      <div
        class="bg-white flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 dark:bg-gray-900 dark:border-gray-700 sm:mx-0"
        style="height: 500px"
      >
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 class="text-4xl text-center font-thin text-black">EV Better</h1>
            <div class="w-full mt-4">
              <Form @submit="handleLogin" :validation-schema="schema">
                <div class="flex flex-col mt-4">
                  <Field
                    id="username"
                    type="text"
                    class="flex-grow h-8 px-2 border rounded border-grey-400"
                    name="username"
                    value=""
                    placeholder="Username"
                  />
                </div>
                <ErrorMessage
                  name="username"
                  class="error-feedback text-yellow-600"
                />
                <div class="flex flex-col mt-4">
                  <Field
                    id="password"
                    type="password"
                    class="flex-grow h-8 px-2 rounded border border-grey-400"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </div>
                <div v-if="message" class="text-red-500">{{ message }}</div>
                <ErrorMessage
                  name="password"
                  class="error-feedback text-yellow-600"
                />
                <div class="flex flex-col mt-8">
                  <button
                    type="submit"
                    class="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p
                    class="text-sm font-light text-gray-500 dark:text-gray-400 p-3"
                  >
                    Don’t have an account yet?
                    <a
                      href="/register"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >Sign up</a
                    >
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div
          class="hidden md:block md:w-1/2 rounded-r-lg"
          style="
            background: url('https://static.ffx.io/images/$zoom_0.407%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/544c14a48320b0e7b6e5e6a017f836e9ca323845');
            background-size: cover;
            background-position: center center;
          "
        ></div>
      </div>
    </div>
  </div>
  <!-- </body> -->
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/AuthService.js";
export default {
  name: "LoginView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleLogin(user) {
      AuthService.login(user)
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "home" });
        })
        .catch((e) => {
          console.log(e);
          if (e.response && e.response.status === 401) {
            this.message = "Incorrect password";
          } else {
            this.message = "An error occurred";
          }
        });
    },
  },
};
</script>
