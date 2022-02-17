import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Report from '../../components/Report/Report';
import Container from '../../components/Container/Container.js';
import Header from '../../components/Header/Header.js';
import Loader from '../../components/Loader/Loader';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';

const ReportPage = () => {
  const dispatch = useDispatch();
  const currentMonth = { month: new Date().getMonth() + 1, year: new Date().getFullYear() };
  useEffect(() => {
    dispatch(transactionOperation.fetchTransactionReport(currentMonth));
  }, [dispatch]);

  const isLoading = useSelector(transactionSelectors.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <BackgroundHome />
          <Header />
          <Container>
            <Report />
          </Container>
        </>
      )}
    </>
  );
};

export default ReportPage;
