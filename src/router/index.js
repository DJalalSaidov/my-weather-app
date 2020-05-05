import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import login from "../views/login.vue";
import khiva from "../views/khiva.vue";
import urgench from "../views/urgench.vue";
import tashkent from "../views/tashkent.vue";
import about from "../views/about.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/khiva",
    name: "Khiva",
    component: khiva
  },
  {
    path: "/urgench",
    name: "Urgench",
    component: urgench
  },
  {
    path: "/tashkent",
    name: "Tashkent",
    component: tashkent
  },
  {
    path: "/login",
    name: "Login",
    component: login
  },
  {
    path: "/about",
    name: "About",
    component: about
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
