const state = () => {
  return {
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userInfo: "",
    // An item being looked up
    soughtItem: [],
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
