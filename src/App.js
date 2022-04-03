import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense, useState } from 'react';
import authOperation from './reduxV2/auth/auth-operation';
import authSelectors from './reduxV2/auth/auth-selector';
import transactionOperation from './reduxV2/transaction/transaction-operation';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme.js';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
// import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const ExpenseMobileFormPage = lazy(() =>
  import(
    './pages/ExpenseFormMobilePage/ExpenseFormMobilePage.js' /* webpackChunkName: "ExpenseFormMobile" */
  ),
);

const IncomeMobileFormPage = lazy(() =>
  import(
    './pages/IncomeMobileFormPage/IncomeMobileFormPage.js' /* webpackChunkName: "IncomeMobileFormPage" */
  ),
);

const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedIn = JSON.parse(localStorage.getItem('user'));
  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to={redirectTo} />}</Route>;
};

const PublicRoute = ({ children, redirectTo = '/', restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedIn = JSON.parse(localStorage.getItem('user'));
  const shouldRedirect = isLoggedIn && restricted;
  // console.log('🚀 ~ file: App.js ~ line 53 ~ PublicRoute ~ shouldRedirect', shouldRedirect);
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
};

function App() {
  const [email, setEmail] = useState(undefined);
  // console.log('🚀 ~ file: App.js ~ line 58 ~ App ~ email', email);
  const [password, setPassword] = useState(undefined);
  // console.log('🚀 ~ file: App.js ~ line 60 ~ App ~ password', password);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log('isLoggedIn=', isLoggedIn);

  const dispatch = useDispatch();

  const search = window.location?.search;
  useEffect(() => {
    dispatch(authOperation.refresh());
    setEmail(search?.split('&')[0]?.split('=')[1] || null);
    setPassword(search?.split('&')[1]?.split('=')[1] || null);
  }, []);

  useEffect(async () => {
    if (email && password) {
      await dispatch(authOperation.login({ email, password }));
    }
    // console.log('email=', email);
    // console.log('password=', password);
    // console.log(typeof email);
  }, [email, password]);

  // const email = search?.split('&')[0]?.split('=')[1];
  // const password = search?.split('&')[1]?.split('=')[1];
  // console.log('🚀 ~ file: App.js ~ line 68 ~ App ~ email', email);
  // console.log('🚀 ~ file: App.js ~ line 70 ~ App ~ password', password);
  // if (email?.length > 0 && password?.length > 0) {
  //   dispatch(authOperation.login({ email, password }));
  //   toast.error('Error');
  //   console.log('test');
  //   toast.success('Добро пожаловать');
  //   console.log('test 2');
  // }

  // console.log('test');
  return (
    <ThemeProvider theme={theme}>
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

          <PrivateRoute exact path="/incomeform">
            <IncomeMobileFormPage />
          </PrivateRoute>

          <PrivateRoute exact path="/expenseform">
            <ExpenseMobileFormPage />
          </PrivateRoute>
        </Switch>
        {/* <Footer /> */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
