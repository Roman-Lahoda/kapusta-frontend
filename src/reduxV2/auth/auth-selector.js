const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

// const getIsfetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  //   getIsfetchingCurrentUser,
  getUserEmail,
};

export default authSelectors;
