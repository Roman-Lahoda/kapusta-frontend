import React from 'react';

import Form from './components/Form/Form';

import Diagram from './components/Diagram';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import authOperation from './reduxV2/auth/auth-operation';
// import authSelectors from './reduxV2/auth/auth-selector';
import transactionOperation from './reduxV2/transaction/transaction-operation';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

import './App.css';

import Test from './components/test/test';
import { Balance } from './components/Balance/Balance';

// import Container from 'components/Container/Container';
// import Dashboard from 'components/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.refresh());
  }, [dispatch]);

  const Signup = () => {
    dispatch(authOperation.signup({ email: 'test10@mail.com', password: '123456789' }));
  };

  const Login = () => {
    dispatch(authOperation.login({ email: 'test10@mail.com', password: '123456789' }));
  };

  const Logout = () => {
    dispatch(authOperation.logout());
  };

  const Update = () => {
    dispatch(authOperation.updateUser({ name: 'test', balance: 10000 }));
  };
  const createTrIncome = () => {
    const TrIncome = {
      transactionType: 'income',
      sum: 10000,
      category: 'salary',
      description: 'meat',
      dayCreate: 6,
      monthCreate: 2,
      yearCreate: 2022,
      idT: uuidv4(),
    };
    return TrIncome;
  };

  const createTrExpense = () => {
    const TrExpense = {
      transactionType: 'expense',
      sum: 5000,
      category: 'food',
      description: 'meat',
      dayCreate: 6,
      monthCreate: 2,
      yearCreate: 2022,
      idT: uuidv4(),
    };
    return TrExpense;
  };

  const RtDeleted = {
    transactionType: 'income',
    sum: 10000,
    category: 'food',
    description: 'meat',
    dayCreate: 6,
    monthCreate: 2,
    yearCreate: 2022,
    idT: '6ef5e4cf-3427-41c3-b61b-ee0d490fd44c',
  };

  const addTrIncome = () => {
    dispatch(transactionOperation.addTransaction(createTrIncome()));
  };
  const addTrExpense = () => {
    dispatch(transactionOperation.addTransaction(createTrExpense()));
  };

  const deleteTr = () => {
    dispatch(transactionOperation.deleteTransaction(RtDeleted));
  };

  const fetchAllTrEx = () => {
    dispatch(transactionOperation.fetchTransactionSummary('expense'));
  };

  const fetchAllTrIn = () => {
    dispatch(transactionOperation.fetchTransactionSummary('income'));
  };

  const chosedMonth = {
    month: 2,
    year: 2022,
  };
  const fetchReport = () => {
    dispatch(transactionOperation.fetchTransactionReport(chosedMonth));
  };

  return (
    <div className="App">
      {/* <button type="button" onClick={Signup}>
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
      <br />
      <button type="button" onClick={addTrIncome}>
        Add TR income
      </button>
      <button type="button" onClick={addTrExpense}>
        Add TR expense
      </button>
      <button type="button" onClick={deleteTr}>
        Delete TR
      </button>
      <br />
      <button type="button" onClick={fetchAllTrEx}>
        Fetch all expense
      </button>
      <button type="button" onClick={fetchAllTrIn}>
        Fetch all income
      </button>
      <button type="button" onClick={fetchReport}>
        Fetch report
      </button> */}
      {/* <Test /> */}
      {/* <Balance></Balance> */}
      {/* <Container>
        <Dashboard />

      </Container>
      <Form />

      </Container>
      <Form />*/}

      <Diagram />
    </div>
  );
}
export default App;
