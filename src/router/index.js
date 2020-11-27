import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import vip from "../views/vip";
import cart from "../views/cart";
import search from "../views/search";
import newslist from "../components/newsList";

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
  {
    path: "/home/newslist",
    name: "newslist",
    component: newslist,
  },
];

const router = new VueRouter({
  routes,
});

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

export default router;
