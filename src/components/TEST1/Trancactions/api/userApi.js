import axios from 'axios';

axios.defaults.baseURL = 'https://capusta2.herokuapp.com/api';

export async function signUp(credentials) {
  const data = await axios.post(`/users/registration`, credentials);
  return data;
}

export async function signIn(credentials) {
  const data = await axios.post(`/users/login`, credentials);
  return data;
}

// export async function getCurrentUser() {
//   const data = await axios.get(`/api/user/current`);
//   return data;
// }

export async function signOut() {
  const data = await axios.get(`/users/logout`);
  return data;
}

export async function googleAuth(credentials) {
  const data = await axios.post(`/api/user/user-google`, credentials);
  // console.log(data);
  return data;
}

export async function changeBalance(balance) {
  const { data } = await axios.patch('/users/update', balance);
  // console.log(data.result.updateBalance)
  return data.result.updateBalance;
}

// GET:/user/google - зарегистрировать/залогинить нового пользователя через гугл
// редиректит по ссылке FRONTEND_URL/?token=”userToken”&email=”test@gmail.com”
