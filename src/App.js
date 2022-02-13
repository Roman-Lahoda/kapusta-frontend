import './App.css';
// import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { getIsFetchingCurrentUser } from './redux/auth/selectors';
// import { fetchCurrentUser } from './redux/auth/thunks';
import Loader from './components/Loader/Loader';
import TransactionsButtons from './components/Transactions/TransactionsBtn';
import TransactionsTabsHistory from './components/Transactions/TransactionsTabsHistory';
import ModalForDelete from './components/Transactions/ModalForDelete';
import CalendarPicker from './components/Transactions/CalendarPicker';
function App() {
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  // const token = useSelector(getToken);

  // useEffect(() => {
  // if (token) dispatch(fetchCurrentUser());
  // });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <CalendarPicker /> */}
        {/* <TransactionsButtons /> */}
        {/* <ModalForDelete /> */}
        <TransactionsTabsHistory />
        {/* <Summary /> */}
      </ThemeProvider>
    </>
  );
}

export default App;