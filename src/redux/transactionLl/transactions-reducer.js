import * as actions from './transactions-actions';

import {
  fetchAddTransaction,
  fetchAllTransactionsByCategory,
  fetchAllTransactionsByMonth,
  fetchDeleteTransaction,
  fetchTransactionsSummaryByYear,
} from './transactions-operations';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const transactionsByMonth = createReducer([], {
  [fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) =>
    payload.map(item => ({
      ...item,
      date: `${item.day}.${item.month}.${item.year}`,
    })),
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(item => {
      return item._id !== payload.data._id;
    }),
  [fetchAddTransaction.fulfilled]: (state, { payload }) =>
    [
      {
        ...payload.data,
        date: `${payload.data.day}.${payload.data.month}.${payload.data.year}`,
      },
      ...state,
    ].sort((a, b) => b.day - a.day),
});

const transactionsByCategory = createReducer(
  {},
  {
    [fetchAllTransactionsByCategory.fulfilled]: (_, { payload }) => payload,
  },
);

const summaryByYear = createReducer([], {
  //todo check and fix summary
  [fetchTransactionsSummaryByYear.fulfilled]: (_, { payload }) => payload.data,
  // [fetchAddTransaction.fulfilled]: (state, { payload }) => if(payload['data'])
});

const initialDate = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

const selectedDate = createReducer(initialDate, {
  [actions.selectedDate]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchAllTransactionsByMonth.pending]: () => true,
  [fetchAllTransactionsByMonth.fulfilled]: () => false,
  [fetchAllTransactionsByMonth.rejected]: () => false,

  // [fetchAllTransactions.pending]: () => true,
  // [fetchAllTransactions.fulfilled]: () => false,
  // [fetchAllTransactions.rejected]: () => false,

  [fetchAllTransactionsByCategory.pending]: () => true,
  [fetchAllTransactionsByCategory.fulfilled]: () => false,
  [fetchAllTransactionsByCategory.rejected]: () => false,

  [fetchTransactionsSummaryByYear.pending]: () => true,
  [fetchTransactionsSummaryByYear.fulfilled]: () => false,
  [fetchTransactionsSummaryByYear.rejected]: () => false,

  [fetchAddTransaction.pending]: () => true,
  [fetchAddTransaction.fulfilled]: () => false,
  [fetchAddTransaction.rejected]: () => false,

  [fetchDeleteTransaction.pending]: () => true,
  [fetchDeleteTransaction.fulfilled]: () => false,
  [fetchDeleteTransaction.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchAllTransactionsByMonth.pending]: () => null,
  [fetchAllTransactionsByMonth.rejected]: setError,

  [fetchTransactionsSummaryByYear.pending]: () => null,
  [fetchTransactionsSummaryByYear.rejected]: setError,

  [fetchAllTransactionsByCategory.pending]: () => null,
  [fetchAllTransactionsByCategory.rejected]: () => setError,

  [fetchAddTransaction.pending]: () => null,
  [fetchAddTransaction.rejected]: setError,

  [fetchDeleteTransaction.pending]: () => null,
  [fetchDeleteTransaction.rejected]: setError,

  [actions.resetError]: () => null,
});

export default combineReducers({
  transactionsByMonth,
  transactionsByCategory,
  summaryByYear,
  selectedDate,
  isLoading,
  error,
});
