import React from 'react';

import Form from './components/Form/Form';

import Diagram from './components/Diagram';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import authOperation from './reduxV2/auth/auth-operation';
// import authSelectors from './reduxV2/auth/auth-selector';
import transactionOperation from './reduxV2/transaction/transaction-operation';

import './App.css';

import Test from './components/test/test';
import { Balance } from './components/Balance/Balance';

// import Container from 'components/Container/Container';
// import Dashboard from 'components/Dashboard';

function App() {
  const dispatch = useDispatch();
  // const state = useSelector(authSelectors.getAllState);
  // console.log(state);

  useEffect(() => {
    dispatch(authOperation.refresh());
  }, [dispatch]);

  const Signup = () => {
    dispatch(authOperation.signup({ email: 'test123456789@mail.com', password: '123456789' }));
  };

  const Login = () => {
    dispatch(authOperation.login({ email: 'test123456789@mail.com', password: '123456789' }));
  };

  const Logout = () => {
    dispatch(authOperation.logout());
  };

  const Update = () => {
    dispatch(authOperation.updateUser({ name: 'test', balance: 10000 }));
  };

  const addTr = () => {
    dispatch(transactionOperation.addTransaction());
  };

  return (
    <div className="App">
      <button type="button" onClick={Signup}>
        Signup
      </button>
      <button type="button" onClick={Login}>
        Login
      </button>
      <button type="button" onClick={Logout}>
        Logout
      </button>
      <button type="button" onClick={Update}>
        Update
      </button>
      {/* <Test /> */}
      {/* <Balance></Balance> */}
      {/* <Container>
        <Dashboard />
      </Container>
      <Form />*/}
      {/* <Diagram /> */}
    </div>
  );
}
export default App;
