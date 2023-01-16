const state = () => {
  return {
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userInfo: null,
    soughtItem: [], // An item being looked up
    devices: [],
    invoices: [],
    accountDevices: [],
    accountInvoices: [],
    theme: "light",
    transfers: [],
  };
};
export default state;
