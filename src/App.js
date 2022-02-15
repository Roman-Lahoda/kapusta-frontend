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
import ExpenseMobileForm from './components/Transactions/ExpenseMobileForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import TransactionsWrapper from './components/Transactions/TransactionsWrap';
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
        <TransactionsWrap />
      </BaseView> */}
      <BackgroundForTransactions />
      <ContainerForTransactions>
        <ThemeProvider theme={theme}>
          {/* <TransactionForm /> */}
          {/* <CalendarPicker /> */}
          {/* <TransactionsButtons /> */}
          {/* <ModalForDelete /> */}
          {/* <TransactionsTabsHistory /> */}
          <ExpenseMobileForm />
          <TransactionsWrapper />
          {/* <Summary /> */}
        </ThemeProvider>
      </ContainerForTransactions>
    </>
  );
}

export default App;
