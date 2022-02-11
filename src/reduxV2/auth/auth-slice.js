import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refresh } from './auth-operation';

const initialState = {
  user: { name: null, email: null, balance: 0, token: null },
  token: null,
  isLoggedIn: false,
  //   isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending](state, action) {
      state.isLoading = true;
    },
    [signUp.fulfilled](state, action) {
      //   state.user = action.payload.user;
      //   state.token = action.payload;
      //   state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signUp.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logIn.pending](state, action) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      //   state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
    },
    [logOut.pending](state, action) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state, action) {
      state.user.name = null;
      state.user.email = null;
      state.user.token = null;
      state.user.balance = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [refresh.pending](state, action) {
      state.isFetchingCurrentUser = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [refresh.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
