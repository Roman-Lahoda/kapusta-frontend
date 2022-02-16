import './App.module.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { useEffect, Suspense } from 'react';
import { Routes, Route, Switch, Redirect } from 'react-router-dom';

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
import ExpenseMobileForm from './components/Transactions/ExpenseMobileForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import TransactionsWrapper from './components/Transactions/TransactionsWrap';

import IncomeMobileForm from './components/Transactions/IncomeMobileForm';
// import CalendarPicker from './components/Transactions/CalendarPicker';

const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = true;
  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to={redirectTo} />}</Route>;
};

const PublicRoute = ({ children, redirectTo = '/', restricted = false, ...routeProps }) => {
  const isLoggedIn = false;
  const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
};

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
    // <>
    //   {/* <BaseView>
    //     <div className="home-mob-wrap">{isMobile && <CalendarPicker />}</div>
    //     <TransactionsWrap />
    //   </BaseView> */}
    //   {/* <BackgroundForTransactions /> */}
    //   <ContainerForTransactions>
    //     <ThemeProvider theme={theme}>
    //       {/* <TransactionForm /> */}
    //       {/* <CalendarPicker /> */}
    //       {/* <TransactionsButtons /> */}
    //       {/* <ModalForDelete /> */}
    //       {/* <TransactionsTabsHistory /> */}
    //       <ExpenseMobileForm />
    //       <TransactionsWrapper />
    //       {/* <Summary /> */}
    //     </ThemeProvider>
    //   </ContainerForTransactions>
    // </>
    <>
      {/* <div className={s.App}>
        <BackgraundHome />
        <Header />
      </div> */}

      <Suspense fallback={<h1>LOADING</h1>}>
        <Switch>
          <PublicRoute exact restricted path="/">
            <p>Home</p>
          </PublicRoute>

          <PrivateRoute exact path="/wallet">
            <ContainerForTransactions>
              <ThemeProvider theme={theme}>
                {/* <ExpenseMobileForm /> */}
                <TransactionsWrapper />
              </ThemeProvider>
            </ContainerForTransactions>
          </PrivateRoute>

          <PrivateRoute exact path="/report">
            <p>report</p>
          </PrivateRoute>

          <PrivateRoute exact path="/incomeform">
            <IncomeMobileForm />
          </PrivateRoute>

          <PrivateRoute exact path="/expenseform">
            <ExpenseMobileForm />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
