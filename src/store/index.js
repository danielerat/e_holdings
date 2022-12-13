import { createStore } from "vuex";
// import axios from "axios";

import state from "@/store/state";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";
export default createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {},
});
