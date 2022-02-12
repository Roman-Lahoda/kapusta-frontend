import { Link } from 'react-router-dom';

const WalletPage = () => {
  return (
    <>
      <h1>WALLET</h1>
      <Link to="/report" exact="true">
        Reports
      </Link>
    </>
  );
};

export default WalletPage;
