import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero';
import Form from '../../components/Form/Form';

const HomePage = () => {
  return (
    <>
      <Link to="/wallet" exact="true">
        Wallet
      </Link>
      <Background />
      <Header />
      <Hero />
      <Form />
    </>
  );
};

export default HomePage;
