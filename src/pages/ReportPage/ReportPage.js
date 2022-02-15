import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Report from '../../components/Report/Report';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Loader from '../../components/Loader/Loader';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';

{
  /* <BackgroundHome />; */
}

const ReportPage = () => {
  const dispatch = useDispatch();
  const currentMonth = { month: new Date().getMonth() + 1, year: new Date().getFullYear() };
  useEffect(() => {
    dispatch(transactionOperation.fetchTransactionReport(currentMonth));
  }, [dispatch]);

  const isLoading = useSelector(transactionSelectors.isLoading);
  // console.log(isLoading);

  return (
    <>
    {isLoading&&<Loader />}
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
