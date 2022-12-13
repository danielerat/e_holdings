const state = () => {
  return {
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
    userInfo: null,
    soughtItem: [], // An item being looked up
    itemsAll: [],
    dark: false,
  };
};
export default state;
