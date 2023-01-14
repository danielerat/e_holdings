import Cookies from "js-cookie";
import axios from "axios";

const actions = {
  refreshToken({ state }) {
    return new Promise((resolve, reject) => {
      axios
        .post("e-hold/v1/token/refresh/", {
          refresh: state.refreshToken,
        })
        .then((response) => {
          console.log("New AccessToken successfully generated");
          this.commit("updateToken", {
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
  userSignOut({ state }) {
    if (state.isAuthenticated) {
      this.commit("deleteToken");
    }
  },
  userSignIn(state, formData) {
    return new Promise((resolve, reject) => {
      axios
        .post("e-hold/v1/login/", {
          phone: formData.phone,
          password: formData.password,
        })
        .then((response) => {
          this.commit("updateToken", {
            accessToken: response.data.access,
            refreshToken: response.data.refresh,
          });
          // Now, set the accessToken for the Bearer
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.access;
          localStorage.setItem("accessToken", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
          state.isAuthenticated = true;
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getCurrentUser({ state }) {
    if (state.isAuthenticated) {
      axios
        .get("e-hold/v1/auth/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          state.userInfo = response.data;
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
  async fetchDevicesPerAccount({ state }) {
    await axios
      .get("e-hold/v1/device/all/account", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        state.accountDevices = response.data;
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
  async fetchInvoicesPerAccount({ state }) {
    await axios
      .get("e-hold/v1/invoice/all/account/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        state.accountInvoices = [];
        response.data.forEach((item) => {
          axios
            .get(`e-hold/v1/device/actions/${item.device}/`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
            .then((response) => {
              state.accountInvoices.push({
                id: item.id,
                soldTo: item.sold_to,
                hasWarranty: item.has_warranty,
                dateOfCreation: item.date_of_creation,
                device: response.data,
              });
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default actions;
