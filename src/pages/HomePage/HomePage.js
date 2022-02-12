import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>HOME</h1>
      <Link to="/wallet" exact="true">
        Wallet
      </Link>
    </>
  );
};

export default HomePage;
