import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ResgisterView from "../views/RegisterView.vue";
// import ClosebuyView from "../views/CloseBuy.vue";
import UserlocationView from "../views/UserLocation.vue";
import FindNearView from "../views/FindNearView.vue";
import TripPlanViewView from "../views/TripPlanView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: ResgisterView,
  },
  // {
  //   path: "/closebuy",
  //   name: "closebuy",
  //   component: ClosebuyView,
  // },
  {
    path: "/userlocation",
    name: "userlocation",
    component: UserlocationView,
  },
  {
    path: "/findnear",
    name: "findnear",
    component: FindNearView,
  },
  {
    path: "/tripplan",
    name: "tripplan",
    component: TripPlanViewView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
