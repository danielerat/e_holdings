const getters = {
  isAuthenticated(state) {
    return state.accessToken != "";
  },
  // Flagging items coming soon...
  // i.e Something got stolen for instance
  CURRENT_THEME(state) {
    return state.theme;
  },
};
export default getters;
