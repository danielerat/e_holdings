import * as Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

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
  faCheck,
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
  faAngleRight,
  faStar,
  faMapMarker,
  faQuoteLeft,
  faQuoteRight,
  faMobileButton,
  faLaptop,
  faPlug,
  faShareNodes,
  faSearch,
  faEye,
  faDownload,
  faCheckToSlot,
  faXmarkCircle,
  faShare,
  faCalendarDay,
  faFlag,
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
  faCheck,
  faCheckToSlot,
  faXmarkCircle,
  faGauge,
  faGears,
  faShareNodes,
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
  faAngleUp,
  faAngleRight,
  faStar,
  faMapMarker,
  faQuoteLeft,
  faQuoteRight,
  faMobileButton,
  faLaptop,
  faPlug,
  faSearch,
  faEye,
  faDownload,
  faShare,
  faCalendarDay,
  faFlag
);

library.add(faYoutube, faFacebook, faWhatsapp, faTwitter);
// library.add(faFacebook);

import "./assets/tailwind.css";
import App from "./App.vue";

import router from "@/router";

const app = Vue.createApp(App);

app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(router).component("fa", FontAwesomeIcon).mount("#app");
