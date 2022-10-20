import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Registering FontAwesomeIcon TO be used in the site
import {
  faArrowUp,
  faBars,
  faChartBar,
  faUsers,
  faChartPie,
  faPercent,
  faBell,
  faTimes,
  faGauge,
  faGears,
  faMicrochip,
  faFingerprint,
  faLock,
  faCircleInfo,
  faCircleCheck,
  faPhone,
  faHouse,
  faEnvelope,
  faHandshakeSimple,
  faCubesStacked,
  faHeadset,
  faFileContract,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
// Brand Icon
import {
  faYoutube,
  faFacebook,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faChartBar,
  faUsers,
  faChartPie,
  faPercent,
  faArrowUp,
  faBell,
  faTimes,
  faGauge,
  faGears,
  faMicrochip,
  faCircleInfo,
  faFingerprint,
  faLock,
  faCircleCheck,
  faPhone,
  faHouse,
  faEnvelope,
  faHandshakeSimple,
  faCubesStacked,
  faHeadset,
  faFileContract,
  faAngleDown,
  faAngleUp
);

library.add(faYoutube, faFacebook, faWhatsapp, faTwitter);
// library.add(faFacebook);

import "./assets/tailwind.css";
import App from "./App.vue";

import router from "@/router";

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
