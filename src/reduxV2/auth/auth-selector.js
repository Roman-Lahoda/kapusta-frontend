const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsLoading = state => state.auth.isLoading;

const getUser = state => state.auth.user;

const getUserBalance = state => state.auth.user.balance

const authSelectors = {
  getIsLoggedIn,
  getIsLoading,
  getUser,
  getUserBalance
};

export default authSelectors;
