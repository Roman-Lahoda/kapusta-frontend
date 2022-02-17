import axios from 'axios';

const BASE_URL = 'https://capusta3.herokuapp.com/api/transactions';

export async function getBalance() {
  const balance = axios.get(`${BASE_URL}/balance`);
  return balance;
}
export async function setBalance(sum) {
  const result = axios.post(sum);
  // или PUT
  return result;
}
