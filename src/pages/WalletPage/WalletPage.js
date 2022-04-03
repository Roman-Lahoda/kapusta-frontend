import { Link } from 'react-router-dom';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Header from '../../components/Header/Header.js';
import Container from '../../components/Container/Container.js';
import { BalanceContainer } from '../../components/BalanceContainer/BalanceContainer';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContainerForTransactions from '../../components/Transactions/TransPageWrapper/Container/ContainerForTransactions.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme.js';
import TransactionsWrapper from '../../components/Transactions/TransactionsWrap.js';
import MyDatePicker from '../../components/Transactions/MyDatePicker/MyDatePicker';
import TransactionsButtons from '../../components/Transactions/TransactionsBtn';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import authOperation from '../../reduxV2/auth/auth-operation.js';
import s from './WalletPage.module.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WalletPage = () => {
  // toast.success('test');
  const dispatch = useDispatch();
  const isLoading = useSelector(transactionSelectors.isLoading);
  // console.log('isLoading= ', isLoading);

  useEffect(() => {
    // dispatch(authOperation.refresh());

    dispatch(transactionOperation.fetchTransactionSummary('expense'));
  }, [dispatch]);

  return (
    <div className={s.flex}>
      <div className={s.block}>
        {/* {isLoading && <Loader />} */}
        <Loader visibility={isLoading} />
        <BackgroundHome />
        <Header />
        <Container>
          <BalanceContainer />
          {/* <ContainerForTransactions> */}
          <ThemeProvider theme={theme}>
            {/* <ExpenseMobileForm /> */}
            <TransactionsWrapper />
          </ThemeProvider>
          {/* </ContainerForTransactions> */}
        </Container>
      </div>
      {/* <div className={s.block2}> */}
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default WalletPage;
