import axios from 'axios';
axios.defaults.baseURL = `https://kapusta-api-project.herokuapp.com/api`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function signUpUser(credentials) {
  const { email, password } = credentials;
  const { data } = await axios.post('/auth/signup', credentials);

  if (data.status === 'success') {
    const user = await logInUser({ email, password });
    return user;
  }
}

export async function logInUser(credentials) {
  const { data } = await axios.post(`/auth/login`, credentials);
  token.set(data.data.user.token);
  return data.data.user;
}

export async function logOutUser() {
  await axios.get(`/auth/logout`);
  token.unset();
}

export async function fetchCurrentUser(savedToken) {
  token.set(savedToken);
  const { data } = await axios.get(`/auth/current`);
  return data.data.result;
}

export async function updateBalance(balance) {
  const { data } = await axios.put(`/auth/balance`, balance);
  return data;
}

export async function getUserBalance() {
  const { data } = await axios.get(`/auth/balance`);
  return data;
}
