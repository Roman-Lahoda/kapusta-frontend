import { Link } from 'react-router-dom';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Header from '../../components/Header';
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
      <BalanceContainer />
    </>
  );
};

export default WalletPage;
