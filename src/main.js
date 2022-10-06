import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Registering FontAwesomeIcon TO be used in the site
import { fas } from "@fortawesome/free-solid-svg-icons";
// Brand Icon
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);
// library.add(faFacebook);

import "./assets/tailwind.css";
import App from "./App.vue";

import router from "@/router";

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
