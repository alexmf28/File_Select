import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HealthCheck from "../components/CI/HealthCheck.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: Home,
  },
  {
    path: "/health",
    name: "health",
    component: HealthCheck,
  },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
