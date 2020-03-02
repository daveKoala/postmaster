import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/runner",
    name: "Runner",
    component: () =>
      import(/* webpackChunkName: "runner" */ "../views/Runner.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
