const mutations = {
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
    state.dark = !state.dark;
    //Work The Bug
    if (state.dark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  },
};
export default mutations;
