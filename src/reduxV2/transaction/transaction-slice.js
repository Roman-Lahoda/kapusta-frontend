import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchTransactionSummary,
  fetchTransactionReport,
} from './transaction-operation';

const initialState = {
  summary: null,
  report: null,
  isLoading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [addTransaction.pending](state, action) {
      state.isLoading = true;
    },
    [addTransaction.fulfilled](state, action) {
      state.isLoading = false;

      switch (action.payload.transactionType) {
        case 'income':
          state.summary.summaryListIncome.find(el => {
            if (el.id === action.payload.monthCreate) {
              el.sum = el.sum + action.payload.sum;
            }
          });
          break;
        case 'expense':
          state.summary.summaryListExpense.find(el => {
            if (el.id === action.payload.monthCreate) {
              el.sum = el.sum + action.payload.sum;
            }
          });
          break;
        default:
          break;
      }
      state.summary.listOfTransactions.push(action.payload);
      state.error = null;
    },
    [addTransaction.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload?.response?.data;
    },
    [deleteTransaction.pending](state, action) {
      state.isLoading = true;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.isLoading = false;

      // switch (action.payload.type) {
      //   case 'income':
      //     state.transaction.income = state.transaction.income.filter(
      //       tr => tr.idT !== action.payload.idT,
      //     );
      //     break;
      //   case 'expense':
      //     state.transaction.expense = state.transaction.income.filter(
      //       tr => tr.idT !== action.payload.idT,
      //     );
      //     break;
      //   default:
      //     break;
      // }
      switch (action.payload.transactionType) {
        case 'income':
          state.summary.summaryListIncome.find(el => {
            if (el.id === action.payload.monthCreate) {
              el.sum = el.sum - action.payload.sum;
            }
          });
          break;
        case 'expense':
          state.summary.summaryListExpense.find(el => {
            if (el.id === action.payload.monthCreate) {
              el.sum = el.sum - action.payload.sum;
            }
          });
          break;
        default:
          break;
      }
      state.summary.listOfTransactions = state.summary.listOfTransactions.filter(
        el => el.idT !== action.payload.idT,
      );
      state.error = null;
    },
    [deleteTransaction.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.response.data;
    },
    [fetchTransactionSummary.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTransactionSummary.fulfilled](state, action) {
      state.isLoading = false;
      // switch (action.payload.data.type) {
      //   case 'income':
      //     state.summary.income = action.payload.data;
      //     break;
      //   case 'expense':
      //     state.summary.expense = action.payload.data;
      //     break;
      //   default:
      //     break;
      // }
      state.summary = action.payload.data;
      state.error = null;
    },
    [fetchTransactionSummary.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.data;
    },
    [fetchTransactionReport.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTransactionReport.fulfilled](state, action) {
      state.isLoading = false;
      state.report = action.payload.data;
      state.error = null;
    },
    [fetchTransactionReport.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default transactionSlice.reducer;
