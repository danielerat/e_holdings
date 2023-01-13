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
    theme: "light",
  };
};
export default state;
