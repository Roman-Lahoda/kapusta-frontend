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
import Footer from '../../components/Footer/Footer';
import s from './ReportPage.module.scss';
const ReportPage = () => {
  const isLoading = useSelector(transactionSelectors.isLoading);

  return (
    <div className={s.flex}>
      <div className={s.block}>
        {/* {isLoading && <Loader />} */}
        <Loader visibility={isLoading} />
        <BackgroundHome />
        <Header />
        <Container>
          <Report />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
