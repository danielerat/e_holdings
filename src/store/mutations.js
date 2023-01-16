import axios from "axios";
import Cookies from "js-cookie";
const mutations = {
  // Initializing the store
  initStore(state) {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
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
    axios.defaults.headers.common["Authorization"] = "";
  },
  // Mutating the auth status
  authStatus(state) {
    state.isAuthenticated = true;
  },
  // Searching
  lookUpAnItem(state, payload) {
    let searchString = payload.searchString.toLowerCase();
    let devices = payload.devices; // items to search from
    state.soughtItem = [];
    if (searchString.length && devices != null) {
      devices.filter((device) => {
        if (
          device.mac_address.toLowerCase() === searchString ||
          device.serial_number.toLowerCase() === searchString
        ) {
          console.log(device);
          state.soughtItem.push(device);
        }
      });
    }
  },
  CHANGE_DARKMODE(state) {
    let current = state.theme;
    //Work The Bug
    if (current == "light") {
      document.querySelector("html").classList.add("dark");
      state.theme = "dark";
      Cookies.set("theme", "dark");
    } else if (current == "dark") {
      document.querySelector("html").classList.remove("dark");
      state.theme = "light";
      Cookies.set("theme", "light");
    }
  },
  // Decline a Transfer
  declineDeviceTransfer(state, payload) {
    let formData = new FormData();
    formData.append("transfer_status", "denied");
    axios
      .delete(`e-hold/v1/transfer/actions/${payload.id}/`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default mutations;
