import { createSlice } from '@reduxjs/toolkit'
import { transactionsOperations } from '.'

const initialState = {
  allTransactions: {
    income: [],
    expense: []
  },
  transactionsByCategories: [],
  transactionsForPeriod: [],
  isLoading: false,
  errorMessage: null
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: (builder) => {
    // GET SUMMARY
    builder.addCase(
      transactionsOperations.getSummary.fulfilled,
      ({ allTransactions, isLoading }, { payload }) => {
        console.log('transactions received successfully')
        allTransactions[payload.transactionType] = payload.data
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.getSummary.rejected,
      ({ isLoading, error }, { payload }) => {
        console.log('something went wrong, transactions are not received')
        error = payload.message
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.getSummary.pending,
      ({ isLoading, error }, _) => {
        console.log('wait, pending...')
        error = null
        isLoading = true
      }
    )

    // GET SUMMARY BY CATEGORY
    builder.addCase(
      transactionsOperations.getSummaryByCategory.fulfilled,
      ({ transactionsByCategories, isLoading }, { payload }) => {
        console.log('transactions received successfully')
        console.log(payload)
        transactionsByCategories = [...payload]
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.getSummaryByCategory.rejected,
      ({ isLoading, error }, { payload }) => {
        console.log('something went wrong, transactions are not received')
        error = payload.message
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.getSummaryByCategory.pending,
      ({ isLoading, error }, _) => {
        console.log('wait, pending...')
        error = null
        isLoading = true
      }
    )

    // GET TRANSACTION FOR PERIOD
    builder.addCase(
      transactionsOperations.getTransForPeriod.fulfilled,
      ({ transactionsForPeriod, isLoading }, { payload }) => {
        console.log('transactions received successfully')
        transactionsForPeriod[payload.period] = [...payload.data]
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.getTransForPeriod.rejected,
      ({ isLoading, error }, { payload }) => {
        console.log('something went wrong, transactions are not received')
        error = payload.message
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.getTransForPeriod.pending,
      ({ isLoading, error }, _) => {
        console.log('wait, pending...')
        error = null
        isLoading = true
      }
    )

    // ADD INCOME TRANSACTION
    builder.addCase(
      transactionsOperations.income.fulfilled,
      ({ allTransactions, isLoading }, { payload }) => {
        console.log('income transaction have been added')
        allTransactions.income = [...allTransactions.income, payload]
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.income.rejected,
      ({ isLoading, error }, { payload }) => {
        console.log('something went wrong, transaction are not added')
        error = payload.message
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.income.pending,
      ({ isLoading, error }, _) => {
        console.log('wait, pending...')
        error = null
        isLoading = true
      }
    )

    // ADD EXPENSES TRANSACTION
    builder.addCase(
      transactionsOperations.expenses.fulfilled,
      ({ allTransactions, isLoading }, { payload }) => {
        console.log('expenses transaction have been added')
        allTransactions.expense = [...allTransactions.expense, payload]
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.expenses.rejected,
      ({ isLoading, error }, { payload }) => {
        console.log('something went wrong, transaction are not added')
        error = payload.message
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.expenses.pending,
      ({ isLoading, error }, _) => {
        console.log('wait, pending...')
        error = null
        isLoading = true
      }
    )

    // DELETE TRANSACTION
    builder.addCase(
      transactionsOperations.deleteTransaction.fulfilled,
      ({ allTransactions, isLoading }, { payload }) => {
        console.log('transaction have been deleted')
        allTransactions[payload.transactionType] = allTransactions[
          payload.transactionType
        ].filter((transaction) => transaction._id !== payload.transactionId)
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.deleteTransaction.rejected,
      ({ isLoading, error }, { payload }) => {
        console.log('something went wrong, transaction are not deleted')
        error = payload.message
        isLoading = false
      }
    )

    builder.addCase(
      transactionsOperations.deleteTransaction.pending,
      ({ isLoading, error }, _) => {
        console.log('wait, pending...')
        error = null
        isLoading = true
      }
    )
  }
})

export default transactionsSlice.reducer
