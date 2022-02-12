import BackgroundContainer from './BackgroundContainer';
import s from './Container.module.scss';

const Container = ({ children }) => (
  <BackgroundContainer>
    <div className={s.container}>{children}</div>
  </BackgroundContainer>
);

export default Container;
