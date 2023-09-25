<template>
  <NavBarView></NavBarView>
  <router-view />
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4">
      <p class="text-center">&copy; 2023 EV Better. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import NavBarView from "../src/components/Navbar.vue";
export default {
  components: {
    NavBarView,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
