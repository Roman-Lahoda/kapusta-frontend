import { useState } from 'react';
import { useDispatch } from 'react-redux';

import UniversalModal from '../UniversalModal';
import authOperation from '../../reduxV2/auth/auth-operation';
import sprite from '../../images/logOutSprite.svg';

import s from './UserLogout.module.scss';

const UserLogout = () => {
  const dispatch = useDispatch();
  const [modalOpenOne, setModalOpenOne] = useState(false);
  const [modalOpenTwo, setModalOpenTwo] = useState(false);

  const openModalOne = () => {
    setModalOpenOne(true);
  };

  const openModalTwo = () => {
    setModalOpenTwo(true);
    setModalOpenOne(false);
  };

  const closeModal = () => {
    setModalOpenOne(false);
    setModalOpenTwo(false);
  };

  const userlogOut = () => {
    dispatch(authOperation.logout());
  };

  return (
    <>
      <button type="button" className={s.logoutBtn} onClick={openModalOne}>
        <p className={s.textBtn}>Выйти</p>
      </button>

      <button type="button" className={s.btnLogout} onClick={openModalOne}>
        <svg className={s.iconLogout}>
          <use href={`${sprite}#logOut`} />
        </svg>
      </button>

      {modalOpenOne && (
        <UniversalModal
          text={'Вы уверены?'}
          onClickYes={openModalTwo}
          onClose={closeModal}
          active={modalOpenOne}
        />
      )}

      {modalOpenTwo && (
        <UniversalModal
          text={'Вы действительно хотите выйти?'}
          onClickYes={userlogOut}
          onClose={closeModal}
          active={modalOpenTwo}
        />
      )}
    </>
  );
};

export default UserLogout;
