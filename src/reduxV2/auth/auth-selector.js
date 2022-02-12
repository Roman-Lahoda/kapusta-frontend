const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsLoading = state => state.auth.isLoading;

const getUser = state => state.auth.user;

const authSelectors = {
  getIsLoggedIn,
  getIsLoading,
  getUser,
};

export default authSelectors;
