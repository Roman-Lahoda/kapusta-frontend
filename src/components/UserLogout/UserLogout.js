import { useState } from 'react';
import { useDispatch } from 'react-redux';

import UniversalModal from '../UniversalModal';
import authOperation from '../../reduxV2/auth/auth-operation';
import sprite from '../../images/logOutSprite.svg';

import s from './UserLogout.module.scss';

const UserLogout = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const userlogOut = () => {
    dispatch(authOperation.logout());
  };

  return (
    <>
      <button type="button" className={s.logoutBtn} onClick={openModal}>
        <p className={s.textBtn}>Выйти</p>
      </button>

      <button type="button" className={s.btnLogout} onClick={openModal}>
        <svg className={s.iconLogout}>
          <use href={`${sprite}#logOut`} />
        </svg>
      </button>

     
      {modalOpen && (
        <UniversalModal
          text={'Вы действительно хотите выйти?'}
          onClickYes={userlogOut}
          onClose={closeModal}
          active={modalOpen}
        />
      )}
    </>
  );
};

export default UserLogout;
