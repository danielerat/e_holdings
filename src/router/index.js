import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/views/Index.vue";
import Admin from "@/views/admin/IndexView.vue";
import SettingsView from "@/views/admin/SettingsView.vue";
import SampleComponents from "@/views/admin/SampleComponents.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import ContactView from "@/views/ContactView.vue";
import SupportView from "@/views/SupportView.vue";
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
    component: SettingsView,
  },
  {
    path: "/admin/components",
    name: "components",
    component: SampleComponents,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/sample",
    name: "sample",
    component: SampleComponents,
  },
  {
    path: "/Contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/support",
    name: "support",
    component: SupportView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
