import { Link } from 'react-router-dom';

const ReportPage = () => {
  return (
    <>
      <h1>REPORT</h1>
      <Link to="/wallet" exact="true">
        Wallet
      </Link>
    </>
  );
};

export default ReportPage;
