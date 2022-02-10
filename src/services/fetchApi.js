import axios from 'axios';

//👇 это изменил
axios.defaults.baseURL = 'https://capusta2.herokuapp.com/api';

//--------------------------------auth-operations-------------------------------
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
//👇 это изменил
const fetchSignUp = credentials => axios.post('/users/registration', credentials);

const fetchLogin = credentials => axios.post('/users/login', credentials);

const fetchLogout = () => axios.post('/users/logout');
//👇 этого нет
// const fetchCurrent = () => axios.get('/users/current');
//👇 этого нет
// const fetchRefreshToken = () => axios.get('/users/refresh');
//👇 этого нет
// const fetchRepeatVerify = email => axios.post('/users/verify', email);
//👇 этого нет
// const fetchAvatar = formData =>
//   axios.patch(
//     '/users/avatars',
//     formData,
//     // {
//     // headers: {
//     //   'Content-Type': 'multipart/form-data',
//     // }
//     // }
//   );

//--------------------------transactions-operations-------------------------------
//можно либо этот 👇 использовать но обязательно указывать тип транзкции ,баланс передавать не надо
const addTransaction = transaction => axios.post('/transactions', { transaction });
//либо эти 👇,здесь указывать тип транзакции не надо,такие энд-поинты по ТЗ

// const addTransactionIncome = (transaction) =>
//   axios.post('/transaction/income', { transaction });

// const addTransactionExpense = (transaction) =>
//   axios.post('/transaction/expense', { transaction });
const deleteTransaction = transactionId => axios.delete(`/transactions/${transactionId}`);
//👇 баланс передавать не надо
const editTransaction = transaction => axios.put(`/transactions/${transaction._id}`, transaction);
//👇 этого нет
// const getTransactionsByDate = date => axios.get(`/transactions/${date}`);

//👇 это изменил, это для страницы отчётов
const getTransactionsByPeriod = (month_number, year_number) =>
  axios.get(`/transactions/month?month=${month_number}&year=${year_number}`);

//👇 это добавил, это для страницы где расходы/доходы и сводка
const getTransactionByType = transactionType =>
  axios.get(`/transactions/summary?type=${transactionType}`);

//👇 это изменил
const setBalance = balance => axios.patch('/users/update', { balance });

const fetch = {
  addTransaction,
  deleteTransaction,
  editTransaction,
  // getTransactionsByDate,
  getTransactionsByPeriod,
  setBalance,
  getTransactionByType,
};

export {
  token,
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  // fetchCurrent,
  // fetchRefreshToken,
  // fetchRepeatVerify,
  // fetchAvatar,
  fetch,
};
