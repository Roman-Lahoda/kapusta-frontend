import { NavLink } from 'react-router-dom';
import arrowBack from '../../images/transactionIcons/arrow-back.svg';
import s from './GoToMainBtn.module.scss';

const GoToMainBtn = () => {
  return (
    <NavLink exact to="/" className={s.link}>
      <img src={arrowBack} alt="стрелка" className={s.imgArrow} />
      <p className={s.title}>Вернуться на главную</p>
    </NavLink>
  );
};

export default GoToMainBtn;
