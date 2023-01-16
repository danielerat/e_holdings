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
  accountDevices: (state) => {
    return state.accountDevices;
  },
  invoices: (state) => {
    return state.invoices;
  },
  accountInvoices: (state) => {
    return state.accountInvoices;
  },
  transfers: (state) => {
    return state.transfers;
  },
};
export default getters;
