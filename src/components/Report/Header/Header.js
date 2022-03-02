import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
import sprite from '../../../images/spriteReport.svg';

import authSelectors from '../../../reduxV2/auth/auth-selector';
import authOperation from '../../../reduxV2/auth/auth-operation';
import Loader from '../../Loader/Loader';
import { CurrentMonth } from '../../CurrentPeriod/CurrentMonth';
import { ModalBalance } from '../../ModalBalance/ModalBalance';
import BalanceState from '../BalanceState/BalanceState';

export default function Header() {
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const isLoading = useSelector(authSelectors.getIsLoading);
  const balance = useSelector(authSelectors.getUserBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    if (balance === 0) {
      setShowModal(true);
    }
    if (balance !== 0) {
      setIsDisable(true);
    }
  }, [balance]);

  const handleBalanceChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.updateUser({ balance: inputValue }));
    if (inputValue !== 0) {
      setShowModal(false);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.headerReport}>
        <section className={s.balanceHeader}>
          <Link to="/wallet" exact="true">
            <div className={s.returnToMain}>
              <svg width="24" height="24" className={s.returnBtn}>
                <use href={`${sprite}#icon-backbutton`}></use>
              </svg>
              <p className={s.returnToMainText}>Вернуться на главную</p>
            </div>
          </Link>

          <form className={s.form} onSubmit={handleSubmit}>
            <label htmlFor="balance" className={s.label}>
              Баланс:
            </label>
            <div className={s.form_field}>
              <input
                type="number"
                name="balance"
                disabled={isDisable}
                placeholder={new Intl.NumberFormat('ru-RU').format(balance)}
                value={inputValue}
                onChange={handleBalanceChange}
                className={isDisable ? s.input__disable : s.input}
              ></input>
              <span className={s.input_text}>UAH</span>
            </div>
            <button
              type="submit"
              disabled={isDisable}
              className={isDisable ? s.button__disable : s.button}
            >
              Подтвердить
            </button>
          </form>
          {showModal && <ModalBalance />}
          <CurrentMonth />
          <Link to="/wallet" exact="true" className={s.returnBtnBig}>
            <svg width="75" height="25">
              <use href={`${sprite}#icon-backbutton`}></use>
            </svg>
          </Link>
        </section>
        <BalanceState />
      </div>
    </>
  );
}
