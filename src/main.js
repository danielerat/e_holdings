import { createApp } from "vue";
import axios from "axios";
import store from "@/store";
import VueAxios from "vue-axios";
// import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueClickAway from "vue3-click-away";
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
  faCertificate,
  faCirclePlus,
  faRightFromBracket,
  faLightbulb,
  faMoon,
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
  faFlag,
  faCertificate,
  faCirclePlus,
  faRightFromBracket,
  faLightbulb,
  faMoon
);

library.add(faYoutube, faFacebook, faWhatsapp, faTwitter);
// library.add(faFacebook);

import "./assets/tailwind.css";
import App from "./App.vue";

import router from "@/router";
import i18n from "@/i18n";
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.global.locale = language;
  next();
});

createApp(App)
  .use(VueAxios, axios)
  .use(VueSweetalert2)
  .use(store)
  .use(VueClickAway)
  .use(router)
  .use(i18n)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
