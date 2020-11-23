import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import vip from "../views/vip";
import cart from "../views/cart";
import search from "../views/search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/vip",
    name: "vip",
    component: vip,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/search",
    name: "search",
    component: search,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
