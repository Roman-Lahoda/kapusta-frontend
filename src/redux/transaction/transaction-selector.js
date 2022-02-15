const getListOfIncomeTransactions = state => state.transaction.summary.income.listOfTransactions;

const getListOfExpenseTransactions = state => state.transaction.summary.expense.listOfTransactions;

const getSummaryIncome = state => state.summary.transaction.income.summaryList;

const getSummaryExpense = state => state.transaction.summary.expense.summaryList;

const getReport = state => state.transaction.report;

// const getReportTotalIncome = state => state.transaction.report.totalIncome;

const isLoading = state => state.transaction.isLoading;

export const getAllTransactions = state => state.transaction.transactionsByMonth;
const getSelectedDate = state => state.transaction.selectedDate;
const getSelectedMonth = state => state.transaction.selectedDate.month;
const getSelectedYear = state => state.transaction.selectedDate.year;

const transactionSelectors = {
  getListOfIncomeTransactions,
  getListOfExpenseTransactions,
  getSummaryIncome,
  getSummaryExpense,
  getReport,
  isLoading,
  // getReportTotalIncome,
  getSelectedDate,
  getSelectedMonth,
  getAllTransactions,
};

export default transactionSelectors;
