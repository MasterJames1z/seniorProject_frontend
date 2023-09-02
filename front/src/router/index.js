import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ResgisterView from "../views/RegisterView.vue";
// import ClosebuyView from "../views/CloseBuy.vue";
import ListofChagerView from "../views/ListofChagerView.vue";
import FindNearView from "../views/FindNearView.vue";
import TripPlanViewView from "../views/TripPlanView.vue";
import CheckTripView from "../views/CheckTripView.vue";
import SummaryView from "../views/SummaryView.vue";
import ProfileView from "../views/ProfileView.vue";
import HistoryView from "../views/TripplanHistory.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/chargermap",
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
    path: "/listofcharger",
    name: "listofcharger",
    component: ListofChagerView,
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
  {
    path: "/checktrip",
    name: "checktrip",
    component: CheckTripView,
  },
  {
    path: "/summary",
    name: "summary",
    component: SummaryView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/history",
    name: "history",
    component: HistoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
