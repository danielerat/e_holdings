import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/views/Index.vue";
import Admin from "@/views/admin/IndexView.vue";
import Settings from "@/views/admin/SettingsView.vue";
import SampleComponents from "@/views/admin/SampleComponents.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
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
  //   Admin Routes
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/admin/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/admin/components",
    name: "components",
    component: SampleComponents,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
