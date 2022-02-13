import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://capusta3.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';
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
      console.log('response', data);
      return data;
    } catch (error) {
      return rejectWithValue({ error: err.message });
    }
  },
);

export const login = createAsyncThunk('users/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.userData.token);
    localStorage.setItem('user', JSON.stringify(data.userData));
    return data;
  } catch (error) {
    return rejectWithValue({ error: err.message });
  }
});

export const logout = createAsyncThunk('users/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    localStorage.removeItem('user');
  } catch (error) {
    return { error: err.message };
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
      return rejectWithValue({ error: err.message });
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/users/update', userData);
      const user = JSON.parse(localStorage.getItem('user'));
      localStorage.removeItem('user');
      const updatedUser = { ...user, ...data.userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return data;
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
