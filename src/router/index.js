import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ReferenceView from "../views/ReferenceView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import MovieView from "../views/MovieView.vue";
import UnsplashView from "../views/UnsplashView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/reference",
    name: "reference",
    component: ReferenceView,
  },
  {
    path: "/unsplash",
    name: "unsplash",
    component: UnsplashView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
