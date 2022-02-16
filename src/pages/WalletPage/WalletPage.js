import { Link } from 'react-router-dom';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Header from '../../components/Header/Header.js';
import Container from '../../components/Container/Container.js';
import { BalanceContainer } from '../../components/BalanceContainer/BalanceContainer';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const WalletPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperation.fetchTransactionSummary('expense'));
  }, [dispatch]);

  return (
    <>
      <BackgroundHome />
      <Header />
      <Container>
        <BalanceContainer />
      </Container>
    </>
  );
};

export default WalletPage;
