import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://capusta3.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:3000/api';
// axios.defaults.baseURL = 'https://capusta.herokuapp.com/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// import '@pnotify/core/dist/BrightTheme.css';
// import { alert as alertPnotify, defaultModules, notice, info, success, error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';

// defaultModules.set(PNotifyMobile, {});
import { toast } from 'react-toastify';

export const signup = createAsyncThunk(
  'users/registration',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/registration', userData);
      // success({
      //   text: 'Регистрация успешна',
      // });
      // ! при логинизации через гугл выскакивает два уведомления
      toast.success('Регистрация успешна');
      return data;
    } catch (err) {
      // console.log(err.toString());
      toast.error('Произошла ошибка,попробуйте ещё раз либо используйте другой почтовый ящик', {
        autoClose: 5000,
      });

      // error({
      //   text: 'Что-то пошло не так,попробуйте позже',
      // });
      return rejectWithValue({ error: err.message });
    }
  },
);

export const login = createAsyncThunk('users/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user;
    }
    //TODO
    toast.success('Добро пожаловать');
    // console.log('test');
    token.set(data.userData.token);
    localStorage.setItem('user', JSON.stringify(data.userData));
    return data.userData;
  } catch (error) {
    toast.error('Произошла ошибка,попробуйте позже', {
      autoClose: 5000,
    });
    return rejectWithValue({ error: err.message });
  }
});

export const logout = createAsyncThunk('users/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    localStorage.removeItem('user');
  } catch (error) {
    toast.error('Произошла ошибка,попробуйте перезагрузить стрницу', {
      autoClose: 5000,
    });
    return { error: err.message };
  }
});

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const data = JSON.parse(localStorage.getItem('user'));
      // if (window.location.href.includes(['wallet', 'report', 'incomeform', 'expenseform'])) {
      //   // if (window.location.includes('wallet')) {
      //   console.log('test');
      // }
      if (!data) {
        // console.log(window.history);
        // toast.error('Произошла ошибка,пожалуйста войдите в учётную запись повторно', {
        //   autoClose: 5000,
        // });
        return rejectWithValue({ status: null, statusText: 'User not found' });
      }
      token.set(data.token);
      return data;
    } catch (error) {
      // console.log(error.includes('401'));
      // toast.error('Произошла ошибка,пожалуйста войдите в учётную запись повторно', {
      //   autoClose: 5000,
      // });
      return rejectWithValue({ error: err.message });
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/users/update', userData);
      // console.log('🚀 ~ file: auth-operation.js ~ line 117 ~ data', data);
      const user = JSON.parse(localStorage.getItem('user'));
      // console.log('🚀 ~ file: auth-operation.js ~ line 119 ~ user', user);
      localStorage.removeItem('user');
      const updatedUser = { ...user, ...data.userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      toast.success('Успешно обновлено');
      // return data;
      // console.log('🚀 ~ file: auth-operation.js ~ line 122 ~ updatedUser', updatedUser);
      return updatedUser;
    } catch (error) {
      return rejectWithValue({ error: err.message });
    }
  },
);

const authOperation = {
  signup,
  login,
  logout,
  refresh,
  updateUser,
};
export default authOperation;
