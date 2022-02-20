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
const WalletPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(transactionSelectors.isLoading);

  useEffect(() => {
    dispatch(transactionOperation.fetchTransactionSummary('expense'));
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
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
      <Footer />
    </>
  );
};

export default WalletPage;
