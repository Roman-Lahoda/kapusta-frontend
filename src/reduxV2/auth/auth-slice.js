import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, refresh, updateUser } from './auth-operation';
import { addTransaction, deleteTransaction } from '../transaction/transaction-operation.js';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  user: { name: null, email: null, balance: null, token: null },
  isLoggedIn: true,
  isLoading: false,
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
      state.error = action.payload;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
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
    [addTransaction.pending](state, action) {
      state.isLoading = true;
    },
    [addTransaction.fulfilled](state, action) {
      if (action?.payload?.transactionType) {
        switch (action?.payload?.transactionType) {
          case 'income':
            state.user.balance = state?.user?.balance + action?.payload?.sum;
            break;
          case 'expense':
            state.user.balance = state?.user?.balance - action?.payload?.sum;
            break;
          default:
            break;
        }
      }
    },
    [addTransaction.rejected](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = action.payload;
      if (action.payload.status === 401) {
        state.isLoggedIn = false;
        alert('вы разлогинены');
        localStorage.removeItem('user');
      }
    },
    [deleteTransaction.pending](state, action) {
      state.isLoading = true;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.isLoading = false;
      switch (action.payload.transactionType) {
        case 'income':
          state.user.balance = state.user.balance - action.payload.sum;
          break;
        case 'expense':
          state.user.balance = state.user.balance + action.payload.sum;
          break;
        default:
          break;
      }
    },
    [deleteTransaction.rejected](state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [updateUser.pending](state, action) {
      state.isLoading = true;
    },
    [updateUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user.balance = action.payload.balance;
    },
    [updateUser.rejected](state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
