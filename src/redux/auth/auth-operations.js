import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://kapusta-team-project-back.herokuapp.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 409) {
        message = "User with such email already exists";
      }

      return thunkAPI.rejectWithValue({ ...error.response.data, message });
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      const { status } = error.response;
      let message;
      if (status === 400) {
        message = "Please check email for verification";
      }
      if (status === 401) {
        message = "Incorrect email or password";
      }
      return thunkAPI.rejectWithValue({ ...error.response.data, message });
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("/auth/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(``);
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/auth/current");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const balanceInit = createAsyncThunk(
  "auth/balance",
  async (balance, thunkAPI) => {
    try {
      console.log(balance);
      const { data } = await axios.post("/auth/balance", balance);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// TODO: need to move all requests to APIservice file
//
