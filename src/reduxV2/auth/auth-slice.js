import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, refresh } from './auth-operation';

const initialState = {
  user: { name: null, email: null, balance: null, token: null },
  isLoggedIn: false,
  isLoading: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending](state, action) {
      state.isLoading = true;
    },
    [signup.fulfilled](state, action) {
      state.isLoading = false;
    },
    [signup.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.response.data;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.response.data;
    },
    [logout.pending](state, action) {
      state.isLoading = true;
    },
    [logout.fulfilled](state, action) {
      state.user.name = null;
      state.user.email = null;
      state.user.token = null;
      state.user.balance = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [refresh.pending](state, action) {
      state.isLoading = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refresh.rejected](state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [addtransaction.fulfilled](state, action) {
      state.user = state.user - action.payload.sum;
    },
  },
});

export default authSlice.reducer;
