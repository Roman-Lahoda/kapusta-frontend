import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import '@pnotify/core/dist/BrightTheme.css';
import { alert as alertPnotify, defaultModules, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});
import { toast } from 'react-toastify';

export const addTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      //TODO
      // success({
      //   text: 'Запись добавлена',
      // });
      // toast.promise(data, {
      //   pending: 'Promise is pending',
      //   success: 'Promise resolved 👌',
      //   error: 'Promise rejected 🤯',
      // });
      if (data) {
        const user = JSON.parse(localStorage.getItem('user'));
        toast.success('Запись добавлена', {
          autoClose: 2000,
        });
        switch (transaction.transactionType) {
          case 'income':
            const incrementBalance = user.balance + data.data.sum;
            localStorage.setItem('user', JSON.stringify({ ...user, balance: incrementBalance }));
            break;
          case 'expense':
            const decrementBalance = user.balance - data.data.sum;
            localStorage.setItem('user', JSON.stringify({ ...user, balance: decrementBalance }));
            break;
          default:
            break;
        }
      }
      return transaction;
    } catch (error) {
      if (error.toString().includes('401')) {
        alert('Произошла ошибка, войдите повторно.');
        localStorage.removeItem('user');
        location.reload();
        // toast.error('Произошла ошибка, войдите повторно');
      } else {
        // console.log('test');
        toast.error('Произошла ошибка, попробуйте пожалуйста позже');
      }

      return rejectWithValue(error);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/transactions/${transaction?.idT}`);
      // success({
      //   text: 'Запись удалена',
      // });
      if (data) {
        toast.success('Запись удалена');
        const user = JSON.parse(localStorage.getItem('user'));
        // console.log('delete transaction');
        switch (transaction.transactionType) {
          case 'income':
            const incrementBalance = user.balance - transaction.sum;
            localStorage.setItem('user', JSON.stringify({ ...user, balance: incrementBalance }));
            break;
          case 'expense':
            // console.log('test delete');
            const decrementBalance = user.balance + transaction.sum;
            localStorage.setItem('user', JSON.stringify({ ...user, balance: decrementBalance }));
            break;
          default:
            break;
        }
      }
      return transaction;
    } catch (error) {
      //TODO
      if (error.toString().includes('401')) {
        alert('Произошла ошибка, войдите повторно.');
        localStorage.removeItem('user');
        location.reload();
      } else {
        toast.error('Произошла ошибка, попробуйте пожалуйста позже');
      }
      // console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const fetchTransactionSummary = createAsyncThunk(
  'transaction/fetchSummary',
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions/summary');
      return data;
    } catch (error) {
      //TODO
      if (error.toString().includes('401')) {
        alert('Произошла ошибка, войдите повторно.');
        localStorage.removeItem('user');
        location.reload();
      } else {
        toast.error('Произошла ошибка, попробуйте пожалуйста позже');
      }
      return rejectWithValue('test');
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
      //TODO
      if (error.toString().includes('401')) {
        alert('Произошла ошибка, войдите повторно.');
        localStorage.removeItem('user');
        location.reload();
      } else {
        toast.error('Произошла ошибка, попробуйте пожалуйста позже');
      }
      return rejectWithValue(error.response.data);
    }
  },
);

const transactionOperation = {
  addTransaction,
  deleteTransaction,
  fetchTransactionSummary,
  fetchTransactionReport,
};
export default transactionOperation;
