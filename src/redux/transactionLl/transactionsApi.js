import axios from 'axios';

axios.defaults.baseURL = 'https://capusta3.herokuapp.com/api';

export async function allTransactions() {
  const { data } = await axios.get(`/api/transactions/`);
  return data;
}

export async function allTransactionsByYear(year) {
  const { data } = await axios.get(`/api/transactions/byYear/${year}`);
  return data;
}

export async function allTransactionsByCategory(year, month) {
  const { data } = await axios.get(`/api/transactions/byCategory/${year}/${month}`);
  return data;
}

export async function allTransactionsByMonth({ year, month }) {
  const { data } = await axios.get(`/api/transactions/byMonth/${year}/${month}`);
  return data.data;
}

export async function addTransaction(transaction) {
  const { data } = await axios.post(`/api/transactions/`, transaction);
  return data;
}
export async function deleteTransaction(idTransaction) {
  const { data } = await axios.delete(`/api/transactions/${idTransaction}`);
  return data;
}
