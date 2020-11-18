import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LatestMovie from "../components/LatestMovie";
import Movie from "../components/Movie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/latestmovie",
    name: "LatestMovie",
    component: LatestMovie,
  },
  {
    path: "/movie/:id",
    name: "Movie",
    props: true,
    component: Movie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
