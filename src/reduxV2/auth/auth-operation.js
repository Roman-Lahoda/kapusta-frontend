import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

// import notification from '../../utils/notification';

// axios.defaults.baseURL = 'https://capusta2.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:3000/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = createAsyncThunk(
  'users/registration',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/registration', userData);
      // token.set(data.token);
      // notification.SignupSuccess(data.user.name);
      return data;
    } catch (error) {
      // notification.SignupError();
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk('users/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.userData.token);
    // console.log('data', data);
    localStorage.setItem('user', JSON.stringify(data.userData));
    // notification.LoginSuccess(data.user.name);
    return data;
  } catch (error) {
    // notification.LoginError();
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('users/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    localStorage.removeItem('user');
    // notification.LogoutSuccess();
  } catch (error) {
    // notification.LogoutError();
    return rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const data = JSON.parse(localStorage.getItem('user'));
      if (!data) {
        return rejectWithValue({ status: null, statusText: 'User not found' });
      }
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/users/update', userData);
      localStorage.removeItem('user');
      // localStorage.setItem('data', JSON.stringify(data.userData));
      const user = JSON.parse(localStorage.getItem('user'));
      const updatedUser = { ...user };
      localStorage.setItem('users', JSON.stringify(updatedUser));
      return data;
    } catch (error) {
      return rejectWithValue(error);
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
