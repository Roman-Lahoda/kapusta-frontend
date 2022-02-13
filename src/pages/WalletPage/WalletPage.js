import { Link } from 'react-router-dom';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Header from '../../components/Header';
import { BalanceContainer } from '../../components/BalanceContainer/BalanceContainer';

const WalletPage = () => {
  return (
    <>
      <BackgroundHome />
      <Header />
      <BalanceContainer />
    </>
  );
};

export default WalletPage;
