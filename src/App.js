// // import './App.css';
// // // import { LinearProgress } from '@mui/material';
// // import { ThemeProvider } from '@mui/material/styles';
// // import theme from './styles/theme';
// // import { useEffect } from 'react';
// // import { Routes, Route } from 'react-router-dom';

// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { getIsFetchingCurrentUser } from './redux/auth/selectors';
// // // import { fetchCurrentUser } from './redux/auth/thunks';
// // import Loader from './components/Loader/Loader';
// // import TransactionsButtons from './components/Transactions/TransactionsBtn';
// // import TransactionsTabsHistory from './components/Transactions/TransactionsTabsHistory';
// // import ModalForDelete from './components/Transactions/ModalForDelete';
// // import CalendarPicker from './components/Transactions/CalendarPicker';
// // import FormDescription from './components/REPORT/FormDescription/FormDescription';
// // import HeaderReport from './components/REPORT/HeaderReport/HeaderReport';
// // import ReportTabs from './components/REPORT/ReportTabs/ReportTabs';
// // import Modal from './components/REPORT/Modal/Modal';
// // import FormDescriptionModal from './components/REPORT/Modal/FormDescriptionModal';
// // import Transaction from './components/Transactions/Transactions';
// // function App() {
// //   // const dispatch = useDispatch();
// //   // const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
// //   // const token = useSelector(getToken);

// //   // useEffect(() => {
// //   // if (token) dispatch(fetchCurrentUser());
// //   // });

// //   return (
// //     <>
// //       <ThemeProvider theme={theme}>
// //         {/* <CalendarPicker /> */}
// //         {/* <TransactionsButtons /> */}
// //         {/* <ModalForDelete /> */}
// //         <TransactionsTabsHistory />
// //         {/* <Summary /> */}
// //         {/* <Transaction /> */}
// //         {/* <HeaderReport /> */}
// //         {/* <FormDescriptionModal /> */}
// //         {/* <FormDescription /> */}
// //         {/* <ReportTabs /> */}
// //       </ThemeProvider>
// //     </>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, lazy, Suspense } from 'react';

// // import Form from './components/RegistrationForm/Form';

// import authOperation from './redux/auth/auth-operation';
// import authSelectors from './redux/auth/auth-selector';
// import transactionOperation from './redux/transaction/transaction-operation';
// // import RegistrationForm from './components/RegistrationForm/Form';

// // import './App.css';

// import { Route, Switch, Redirect } from 'react-router-dom';

// import s from './App.module.scss';

// const HomePage = lazy(() =>
//   import('./pages/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */),
// );
// const WalletPage = lazy(() =>
//   import('./pages/WalletPage/WalletPage.js' /* webpackChunkName: "WalletPage" */),
// );
// const ReportPage = lazy(() =>
//   import('./pages/ReportPage/ReportPage.js' /* webpackChunkName: "ReportPage" */),
// );

// const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to={redirectTo} />}</Route>;
// };

// const PublicRoute = ({ children, redirectTo = '/', restricted = false, ...routeProps }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
// };

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperation.refresh());
//   }, [dispatch]);

//   return (
//     <Suspense fallback={<h1>LOADING</h1>}>
//       <Switch>
//         <PublicRoute exact redirectTo="/wallet" restricted path="/">
//           <HomePage />
//         </PublicRoute>

//         <PrivateRoute exact redirectTo="/" path="/wallet">
//           <WalletPage />
//         </PrivateRoute>

//         <PrivateRoute exact redirectTo="/" path="/report">
//           <ReportPage />
//         </PrivateRoute>
//       </Switch>
//     </Suspense>
//   );
// }
// export default App;

import './App.module.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { getIsFetchingCurrentUser } from './redux/auth/selectors';
// import { fetchCurrentUser } from './redux/auth/thunks';
import Loader from './components/Loader/Loader';
// import TransactionsButtons from './components/Transactions/TransactionsBtn';
import TransactionsTabsHistory from './components/Transactions/TransactionsTabsHistory';
import ModalForDelete from './components/Transactions/ModalForDelete';
import CalendarPicker from './components/Transactions/CalendarPicker';
import BackgroundForTransactions from './components/Transactions/TransPageWrapper/Background/BackgroundForTransactions';
import ContainerForTransactions from './components/Transactions/TransPageWrapper/Container/ContainerForTransactions';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import TransactionsWrap from './components/Transactions/TransactionsWrap';
import BaseView from './pages/WalletPage/BaseView';
// import CalendarPicker from './components/Transactions/CalendarPicker';

function App() {
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  // const token = useSelector(getToken);
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  // useEffect(() => {
  // if (token) dispatch(fetchCurrentUser());
  // });

  return (
    <>
      {/* <BaseView>
        <div className="home-mob-wrap">{isMobile && <CalendarPicker />}</div>
        <TransactionsWrapper />
      </BaseView> */}
      <BackgroundForTransactions />
      <ContainerForTransactions>
        <ThemeProvider theme={theme}>
          {/* <CalendarPicker /> */}
          {/* <TransactionsButtons /> */}
          {/* <ModalForDelete /> */}
          <TransactionsTabsHistory />
          {/* <Summary /> */}
        </ThemeProvider>
      </ContainerForTransactions>
    </>
  );
}

export default App;
