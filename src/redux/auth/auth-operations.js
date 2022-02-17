import Alert from '../../components/Alert';
import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  loginRequest,
  loginSuccess,
  loginError,
} from './auth-actions';

import { token, fetchSignUp, fetchLogin, fetchLogout } from '../../services/fetchApi';

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await fetchSignUp(credentials);
    dispatch(registerSuccess(response.data));
  } catch ({ response }) {
    dispatch(registerError(response.data.message));
    Alert(response.data.message);
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await fetchLogin(credentials);
    token.set(response.data.data);
    dispatch(loginSuccess(response.data.data));
  } catch ({ response }) {
    dispatch(loginError(response.data.message));
    Alert(response.data.message);
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await fetchLogout();
    token.unset();
    dispatch(logoutSuccess());
  } catch ({ response }) {
    token.unset();
    dispatch(logoutSuccess());
  }
};

export { register, logOut, logIn };
