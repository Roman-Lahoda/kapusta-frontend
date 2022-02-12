import { createAsyncThunk } from '@reduxjs/toolkit'
import { transactionsShelfAPI } from '../../apiService'

export const getSummary = createAsyncThunk(
  'transactions/getSummary',
  async ({ transactionType, date }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchSummary(transactionType, date)
      return {
        transactionType,
        data
      }
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 404) {
        message = "Not found";
      }
      return rejectWithValue({ ...error.response.data, message })
    }
  }
)

export const getSummaryByCategory = createAsyncThunk(
  'transactions/categories/getSummaryByCategory',
  async ({ transactionType, date }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchSummaryByCategory(
        transactionType,
        date
      )
      const year = date.substr((date.length - 4), (date.length - 1))
      const dataWithYear = data.map(({ category, sum }) => ({ year, category, sum }))
      
      return dataWithYear;
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 404) {
        message = "Not found";
      }
      return rejectWithValue({ ...error.response.data, message })
    }
  }
)

export const getTransForPeriod = createAsyncThunk(
  'transactions/categories/getTransForPeriod',
  async ({ transactionType, period }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchTransForPeriod(
        transactionType,
        period
      )
      return {
        period,
        data
      }
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 404) {
        message = "Not found";
      }
      return rejectWithValue({ ...error.response.data, message })
    }
  }
)

export const income = createAsyncThunk(
  'transaction/income',
  async ({ transactionType, date, description, category, sum }, { rejectWithValue }) => {
    try {
      const result = await transactionsShelfAPI.patchIncome({
        transactionType,
        date,
        description,
        category,
        sum
      })
      console.log(result);
      return result;
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 404) {
        message = "Not found";
      }
      return rejectWithValue({ ...error.response.data, message })
    }
  }
)

export const expenses = createAsyncThunk(
  'transaction/expenses',
  async ({ transactionType, date, description, category, sum }, { rejectWithValue }) => {
    try {
      const result = await transactionsShelfAPI.patchExpenses({
        transactionType,
        date,
        description,
        category,
        sum
      })
      return result;
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 404) {
        message = "Not found";
      }
      return rejectWithValue({ ...error.response.data, message })
    }
  }
)

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async ({transactionId, transactionType}, { rejectWithValue }) => {
    try {
      await transactionsShelfAPI.deleteTransaction(transactionId)
      return {transactionId, transactionType};
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 404) {
        message = "Not found";
      }
      return rejectWithValue({ ...error.response.data, message })
    }
  }
)
