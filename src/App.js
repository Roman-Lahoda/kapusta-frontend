import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

import Form from './components/RegistrationForm/Form';

import authOperation from './reduxV2/auth/auth-operation';
import authSelectors from './reduxV2/auth/auth-selector';
import transactionOperation from './reduxV2/transaction/transaction-operation';
import RegistrationForm from './components/RegistrationForm/Form';

import Loader from './components/Loader/Loader';

// import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import s from './App.module.scss';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const WalletPage = lazy(() =>
  import('./pages/WalletPage/WalletPage.js' /* webpackChunkName: "WalletPage" */),
);
const ReportPage = lazy(() =>
  import('./pages/ReportPage/ReportPage.js' /* webpackChunkName: "ReportPage" */),
);

const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to={redirectTo} />}</Route>;
};

const PublicRoute = ({ children, redirectTo = '/', restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.refresh());
  }, [dispatch]);

  const search = window.location?.search;
  const email = search?.split('&')[0]?.split('=')[1];
  const password = search?.split('&')[1]?.split('=')[1];
  if (email && password) {
    dispatch(authOperation.login({ email, password }));
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact redirectTo="/wallet" restricted path="/">
            <HomePage />
          </PublicRoute>

          <PrivateRoute exact redirectTo="/" path="/wallet">
            <WalletPage />
          </PrivateRoute>

          <PrivateRoute exact redirectTo="/" path="/report">
            <ReportPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
export default App;
