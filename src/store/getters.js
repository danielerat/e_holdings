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
  pendingTransfers: (state) => {
    return state.pendingTransfers;
  },
  lostDevices: (state) => {
    return state.lostDevices;
  },
  published: (state) => {
    return state.published;
  },
};
export default getters;
