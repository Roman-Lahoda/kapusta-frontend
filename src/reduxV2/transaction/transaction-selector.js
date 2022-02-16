// const getListOfIncomeTransactions = state => state.transaction.summary.income.listOfTransactions;

// const getListOfExpenseTransactions = state => state.transaction.summary.expense.listOfTransactions;

// const getSummaryIncome = state => state.summary.transaction.income.summaryList;

// const getSummaryExpense = state => state.transaction.summary.expense.summaryList;

const getListOfTransactions = state => state.transactions.summary?.listOfTransactions;

const getSummaryExpense = state => state.transactions.summary?.summaryListExpense;

const getSummaryIncome = state => state.transactions.summary?.summaryListIncome;

const getReport = state => state.transactions.report;

// const getReportTotalIncome = state => state.transaction.report.totalIncome;

const isLoading = state => state.transactions.isLoading;

const transactionSelectors = {
  // getListOfIncomeTransactions,
  // getListOfExpenseTransactions,
  getSummaryIncome,
  getSummaryExpense,
  getReport,
  isLoading,
  // getReportTotalIncome,
  getListOfTransactions,
};

export default transactionSelectors;
