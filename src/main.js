import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Registering FontAwesomeIcon TO be used in the site
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faCartPlus);

import "./assets/tailwind.css";
import App from "./App.vue";

import router from "@/router";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
