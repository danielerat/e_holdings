import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userInfo: null,
    soughtItem: [], // An item being looked up
    itemsAll: [],
    darkmode: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.accessToken != "";
    },
    // Flagging items coming soon...
    // i.e Something got stolen for instance
  },
  mutations: {
    // Initializing the store
    initStore(state) {
      if (
        localStorage.getItem("accessToken") &&
        localStorage.getItem("refreshToken")
      ) {
        state.accessToken = localStorage.getItem("accessToken");
        state.accessToken = localStorage.getItem("accessToken");
        state.refreshToken = localStorage.getItem("refreshToken");
        state.isAuthenticated = true; // Set the auth status to true
      } else {
        state.accessToken = "";
        state.refreshToken = "";
        state.isAuthenticated = false;
      }
    },

    // refreshing the token. When it expires
    updateToken(state, { accessToken, refreshToken }) {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      // Now, update the values at the localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    // deleting the token. i.e when signing out a user.
    deleteToken(state) {
      // Clear the state
      state.accessToken = "";
      state.refreshToken = "";
      state.isAuthenticated = false;

      // And the localStorage
      localStorage.setItem("accessToken", "");
      localStorage.setItem("refreshToken", "");
      this.axios.defaults.headers.common["Authorization"] = "";
    },
    // Mutating the auth status
    authStatus(state) {
      state.isAuthenticated = true;
    },
    // Yea, Searching
    lookUpAnItem: (state, payload) => {
      let searchString = payload.searchString.toLowerCase();
      let searchCategory = payload.searchCategory;
      let items = payload.items; // items to search from
      state.soughtItem = [];
      if (searchString.length && items != null) {
        items.filter((item) => {
          if (
            item.name.toLowerCase().includes(searchString) &&
            item.category === searchCategory
          ) {
            state.soughtItem.push(item);
          }
        });
      } else {
        // Say something, almost heartbreaking...
        // Unlikely to get here tho
        console.log("There has been an issue!");
      }
    },
    CHANGE_DARKMODE(state) {
      state.darkmode = !state.darkmode;
    },
  },
  actions: {
    refreshToken(context) {
      return new Promise((resolve, reject) => {
        this.axios
          .post("e-hold/v1/token/refresh/", {
            refresh: context.state.refreshToken,
          })
          .then((response) => {
            console.log("New AccessToken successfully generated");
            context.commit("updateToken", {
              accessToken: response.data.accessToken,
              refreshToken: response.data.refreshToken,
            });
            this.axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.accessToken;
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    userSignOut(context) {
      if (context.getters.isAuthenticated) {
        context.commit("deleteToken");
        window.location.reload();
      }
    },
    userSignIn(context, formData) {
      return new Promise((resolve, reject) => {
        this.axios
          .post("e-hold/v1/login/", {
            phone: formData.phone,
            password: formData.password,
          })
          .then((response) => {
            // refresh the page
            // window.location.reload();

            context.commit("updateToken", {
              accessToken: response.data.accessToken,
              refreshToken: response.data.refreshToken,
            });
            // Now, set the accessToken for the Bearer
            this.axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.accessToken;
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    amIAuthenticated(context) {
      this.state.isAuthenticated = context.getters.isAuthenticated;
      if (this.state.isAuthenticated) {
        this.axios
          .get("e-hold/v1/auth/")
          .then((response) => {
            this.state.userInfo = response.data;
            // Do something else here
          })
          .catch((error) => {
            // Nagging a user to their submission(of the login form)
            console.log(error.response.status);
          });
      }
    },

    lookUpAnItem: (context, payload) => {
      context.commit("lookUpAnItem", payload);
    },
  },
  modules: {},
});
