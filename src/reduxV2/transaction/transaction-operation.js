import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'http://localhost:3000/api';

export const addTransaction = createAsyncThunk(
  'users/registration',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/registration', transaction);
      // token.set(data.token);
      // notification.SignupSuccess(data.user.name);
      return data;
    } catch (error) {
      // notification.SignupError();
      return rejectWithValue(error);
    }
  },
);
