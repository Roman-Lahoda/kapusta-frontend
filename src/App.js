import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';
import Diagram from './components/Diagram';
import Form from './components/Form/Form';
import authOperation from './reduxV2/auth/auth-operation';
import authSelectors from './reduxV2/auth/auth-selector';
import transactionOperation from './reduxV2/transaction/transaction-operation';
import { v4 as uuidv4 } from 'uuid';
import HomePage from './pages/HomePage/HomePage';
import WalletPage from './pages/WalletPage/WalletPage';
import ReportPage from './pages/ReportPage/ReportPage';
import './App.css';

import { Balance } from './components/Balance/Balance';

// import Container from 'components/Container/Container';
// import Dashboard from 'components/Dashboard';

// const HomePage = lazy(() =>
//   import('./pages/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */),
// );
// const WalletPage = lazy(() =>
//   import('./pages/WalletPage/WalletPage.js' /* webpackChunkName: "WalletPage" */),
// );
// const ReportPage = lazy(() =>
//   import('./pages/ReportPage/ReportPage.js' /* webpackChunkName: "ReportPage" */),
// );

function App() {
  const dispatch = useDispatch();
  const getIsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(getIsLoggedIn);

  // useEffect(() => {
  //   dispatch(authOperation.refresh());
  // }, [dispatch]);

  // const Signup = () => {
  //   dispatch(authOperation.signup({ email: 'test10@mail.com', password: '123456789' }));
  // };

  // const Login = () => {
  //   dispatch(authOperation.login({ email: 'test10@mail.com', password: '123456789' }));
  // };

  // const Logout = () => {
  //   dispatch(authOperation.logout());
  // };

  // const Update = () => {
  //   dispatch(authOperation.updateUser({ name: 'test', balance: 10000 }));
  // };
  // const createTrIncome = () => {
  //   const TrIncome = {
  //     transactionType: 'income',
  //     sum: 10000,
  //     category: 'salary',
  //     description: 'meat',
  //     dayCreate: 6,
  //     monthCreate: 2,
  //     yearCreate: 2022,
  //     idT: uuidv4(),
  //   };
  //   return TrIncome;
  // };

  // const createTrExpense = () => {
  //   const TrExpense = {
  //     transactionType: 'expense',
  //     sum: 5000,
  //     category: 'food',
  //     description: 'meat',
  //     dayCreate: 6,
  //     monthCreate: 2,
  //     yearCreate: 2022,
  //     idT: uuidv4(),
  //   };
  //   return TrExpense;
  // };

  // const RtDeleted = {
  //   transactionType: 'income',
  //   sum: 10000,
  //   category: 'food',
  //   description: 'meat',
  //   dayCreate: 6,
  //   monthCreate: 2,
  //   yearCreate: 2022,
  //   idT: '6ef5e4cf-3427-41c3-b61b-ee0d490fd44c',
  // };

  // const addTrIncome = () => {
  //   dispatch(transactionOperation.addTransaction(createTrIncome()));
  // };
  // const addTrExpense = () => {
  //   dispatch(transactionOperation.addTransaction(createTrExpense()));
  // };

  // const deleteTr = () => {
  //   dispatch(transactionOperation.deleteTransaction(RtDeleted));
  // };

  // const fetchAllTrEx = () => {
  //   dispatch(transactionOperation.fetchTransactionSummary('expense'));
  // };

  // const fetchAllTrIn = () => {
  //   dispatch(transactionOperation.fetchTransactionSummary('income'));
  // };

  // const chosedMonth = {
  //   month: 2,
  //   year: 2022,
  // };
  // const fetchReport = () => {
  //   dispatch(transactionOperation.fetchTransactionReport(chosedMonth));
  // };

  return (
    <div className="App">
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/wallet" exact>
        <WalletPage />
      </Route>

      <Route path="/report" exact>
        <ReportPage />
      </Route>

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

      {/* <Diagram /> */}
      <Form />
    </div>
  );
}
export default App;
