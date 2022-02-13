import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import authOperation from './reduxV2/auth/auth-operation';
import authSelectors from './reduxV2/auth/auth-selector';
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

  return (
    <Suspense fallback={<h1>LOADING</h1>}>
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
  );
}
export default App;
