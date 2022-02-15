import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      localStorage.removeItem('user');
      switch (transaction.transactionType) {
        case 'income':
          const { data } = await axios.post('/transactions/income', transaction);
          const incrementBalance = user.balance + data.data.sum;
          localStorage.setItem('user', JSON.stringify({ ...user, balance: incrementBalance }));
          break;
        case 'expense':
          const { data: dataDec } = await axios.post('/transactions/expense', transaction);
          const decrementBalance = user.balance - dataDec.data.sum;
          localStorage.setItem('user', JSON.stringify({ ...user, balance: decrementBalance }));
          break;
        default:
          break;
      }
      return transaction;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (transaction, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const { data } = await axios.delete(`/transactions/${transaction.idT}`);
      switch (transaction.transactionType) {
        case 'income':
          const incrementBalance = user.balance - transaction.sum;
          localStorage.setItem('user', JSON.stringify({ ...user, balance: incrementBalance }));
          break;
        case 'expense':
          const decrementBalance = user.balance + transaction.sum;
          localStorage.setItem('user', JSON.stringify({ ...user, balance: decrementBalance }));
          break;
        default:
          break;
      }
      return transaction;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchTransactionSummary = createAsyncThunk(
  'transaction/fetchSummary',
  async (transactionType, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/transactions/summary?type=${transactionType}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchTransactionReport = createAsyncThunk(
  'transaction/fetchReport',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/transactions/month?month=${date.month}&year=${date.year}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// const getExpenseByDate = createAsyncThunk(
//   'transaction/getExpenseByDate',
//   async (date, { rejectWithValue }) => {
//     try {
//       const expense = await transactionsAPI.fetchExpenseByDate(date).then(({ data }) => data);

//       return expense;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   },
// );

// const getIncomeByDate = createAsyncThunk(
//   'transaction/getIncomeByDate',
//   async (date, { rejectWithValue }) => {
//     try {
//       const expense = await transactionsAPI.fetchIncomeByDate(date).then(({ data }) => data);

//       return expense;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   },
// );

export const fetchAllTransactionsByMonth = createAsyncThunk(
  'transactions/fetchAllTransactionsByMonth',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/transaction/byMonth/${date.year}/${date.month}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const transactionOperation = {
  addTransaction,
  deleteTransaction,
  fetchTransactionSummary,
  fetchTransactionReport,
  // getExpenseByDate,
  // getIncomeByDate,
  fetchAllTransactionsByMonth,
};
export default transactionOperation;
