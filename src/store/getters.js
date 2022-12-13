const getters = {
  isAuthenticated(state) {
    return state.accessToken != "";
  },
  // Flagging items coming soon...
  // i.e Something got stolen for instance
  darkmode(state) {
    return state.dark;
  },
};
export default getters;
