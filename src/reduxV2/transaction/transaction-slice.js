import { createSlice } from '@reduxjs/toolkit';
// import { signup, login, logout, refresh } from './auth-operation';

const initialState = {
  transaction: { income: [], expense: [] },
  isLoggedIn: false,
  isLoading: null,
  error: null,
};
