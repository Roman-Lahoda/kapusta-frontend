const getListOfIncomeTransactions = state => state.transaction.summary.income.listOfTransactions;

const getListOfExpenseTransactions = state => state.transaction.summary.expense.listOfTransactions;

const getSummaryIncome = state => state.summary.transaction.income.summaryList;

const getSummaryExpense = state => state.transaction.summary.expense.summaryList;

const getReport = state => state.transaction.report;

// const getReportTotalIncome = state => state.transaction.report.totalIncome;

const isLoading = state => state.transaction.isLoading;

const transactionSelectors = {
  getListOfIncomeTransactions,
  getListOfExpenseTransactions,
  getSummaryIncome,
  getSummaryExpense,
  getReport,
  isLoading,
  // getReportTotalIncome,
};

export default transactionSelectors;
