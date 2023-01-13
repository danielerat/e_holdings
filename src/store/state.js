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
  };
};
export default state;
