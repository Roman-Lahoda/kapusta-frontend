import axios from 'axios';

axios.defaults.baseURL = `https://capusta2.herokuapp.com/api`;

/**
 * 1. getTransactionsByMonts
 * 2. addTransaction
 * 3. removeTransaction
 * 4. updateTransaction
 */

export async function getTransactionsByMonts(date) {
  const { data } = await axios.get(`/transactions?YYYYMM=${date}`);
  return data;
}

export async function addTransaction(newTransaction) {
  const { data } = await axios.post(`/transactions/`, newTransaction);
  return data;
}

export async function removeTransaction(transactionId) {
  const { data } = await axios.delete(`/transactions/${transactionId}`);
  return data.result;
}

export async function updateTransaction(transactionId) {
  const { data } = await axios.put(`/transactions/${transactionId}`);
  return data;
}
