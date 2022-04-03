import Background from '../../components/Background';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero';
import RegistrationForm from '../../components/RegistrationForm/Form';
import Footer from '../../components/Footer/Footer';
import s from './HomePage.module.scss';
import Container from '../../components/Container/Container';

const HomePage = () => {
  return (
    <div className={s.flex}>
      <div className={s.block}>
        <Header />
        <Background />
        <Container>
          <div className={s.flexbox}>
            <Hero />
            <RegistrationForm />
          </div>
        </Container>
      </div>
      <div className={s.block2}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
