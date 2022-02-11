const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsLoading = state => state.auth.isLoading;

const getUser = state => state.auth.user;

const getAllState = state => state;

const authSelectors = {
  getIsLoggedIn,
  getIsLoading,
  getUser,
  getAllState,
};

export default authSelectors;
