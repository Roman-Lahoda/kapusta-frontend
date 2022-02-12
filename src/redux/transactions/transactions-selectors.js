const getAllTransactions = ({transactions}) => transactions.allTransactions;
const getAllIncome = ({transactions}) => transactions.allTransactions.income;
const getAllExpenses = ({transactions}) => transactions.allTransactions.expense;
const getTransactionsByCategories = ({transactions}) => transactions.transactionsByCategories;
const getTransactionsForPeriod = ({transactions}) => transactions.transactionsForPeriod;
const getIsLoading = ({transactions}) => transactions.isLoading;
const getError = ({transactions}) => transactions.error;

const transactionsSelectors = {
  getAllTransactions,
  getAllIncome,
  getAllExpenses,
  getTransactionsByCategories,
  getTransactionsForPeriod,
  getIsLoading,
  getError
};

export default transactionsSelectors;
