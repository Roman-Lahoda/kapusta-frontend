import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero';
// import Form from '../../components/Form/Form';
import RegistrationForm from '../../components/RegistrationForm/Form';

const HomePage = () => {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      {/* <Form /> */}
      <RegistrationForm />
    </>
  );
};

export default HomePage;
