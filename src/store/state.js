const state = () => {
  return {
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userInfo: "",
    soughtItem: [], // An item being looked up
    devices: [],
    invoices: [],
    lostDevices: [],
    accountDevices: [],
    accountInvoices: [],
    theme: "light",
    transfers: [],
    pendingTransfers: [],
  };
};
export default state;
