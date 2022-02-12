const getListOfIncomeTransactions = state => state.summary.income.listOfTransactions;

const getListOfExpenseTransactions = state => state.summary.expense.listOfTransactions;

const getSummaryIncome = state => state.summary.income.summaryList;

const getSummaryExpense = state => state.summary.expense.summaryList;

const isLoading = state => state.isLoading;

const transactionSelectors = {
  getListOfIncomeTransactions,
  getListOfExpenseTransactions,
  getSummaryIncome,
  getSummaryExpense,
  isLoading,
};

export default transactionSelectors;
