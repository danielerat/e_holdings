const getters = {
  isAuthenticated: (state) => {
    return state.accessToken != "";
  },
  CURRENT_THEME(state) {
    return state.theme;
  },
  userInfo: (state) => {
    return state.userInfo;
  },
  // All the items
  devices: (state) => {
    return state.devices;
  },
  invoices: (state) => {
    return state.invoices;
  },
};
export default getters;
