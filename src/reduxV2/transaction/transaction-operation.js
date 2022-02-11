import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'http://localhost:3000/api';

export const addTransaction = createAsyncThunk(
  'users/registration',
  async (transaction, trType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/registration', transaction);
      return transaction;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const transactionOperation = {
  addTransaction,
};
export default transactionOperation;
