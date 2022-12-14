import Cookies from "js-cookie";
import axios from "axios";

const actions = {
  refreshToken(context) {
    return new Promise((resolve, reject) => {
      axios
        .post("e-hold/v1/token/refresh/", {
          refresh: context.state.refreshToken,
        })
        .then((response) => {
          console.log("New AccessToken successfully generated");
          context.commit("updateToken", {
            accessToken: response.data.access,
            refreshToken: response.data.refresh,
          });
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.access;
          localStorage.setItem("accessToken", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
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
      axios
        .post("e-hold/v1/login/", {
          phone: formData.phone,
          password: formData.password,
        })
        .then((response) => {
          // refresh the page
          // window.location.reload();

          context.commit("updateToken", {
            accessToken: response.data.access,
            refreshToken: response.data.refresh,
          });
          // Now, set the accessToken for the Bearer
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.access;
          localStorage.setItem("accessToken", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
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
  fetchTheme({ state, commit }) {
    if (Cookies.get("theme")) {
      let theme = Cookies.get("theme");
      //   Change the theme if the cookie does not match the current theme
      if (theme !== state.theme) {
        commit("CHANGE_DARKMODE");
      }
    }
  },
  async fetchAllDevices({ state }) {
    await axios
      .get("e-hold/v1/device/all/")
      .then((response) => {
        state.devices = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async fetchAllInvoices({ state }) {
    await axios
      .get("e-hold/v1/invoice/all/")
      .then((response) => {
        state.invoices = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default actions;
