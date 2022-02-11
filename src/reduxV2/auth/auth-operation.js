import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

// import notification from '../../utils/notification';

axios.defaults.baseURL = 'https://capusta2.herokuapp.com/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
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

export const logIn = createAsyncThunk('users/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    // notification.LoginSuccess(data.user.name);
    return data;
  } catch (error) {
    // notification.LoginError();
    return rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('users/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    // notification.LogoutSuccess();
  } catch (error) {
    // notification.LogoutError();
    return rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue({ status: null, statusText: 'Token not found' });
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authOperation = {
  signUp,
  logIn,
  logOut,
  refresh,
};
export default authOperation;
