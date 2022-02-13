import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import Modal from 'components/Modal';
// import { logOut } from '../../redux/auth';
import authOperation from '../../reduxV2/auth/auth-operation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import logOutImg from '../../images/logOutSprite.svg';

import s from './UserLogout.module.scss';

const UserLogout = () => {
  const dispatch = useDispatch();

  // const toggleModal = () => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // };

  // const logoutModal = () => {
  //   dispatch(logOut());
  //   toggleModal();
  // };

  // const [setModalOpen, setShowModal] = useState(false);

  const viewPort = useWindowDimensions();
  const logout = () => {
    console.log('test');
    dispatch(authOperation.logout());
  };

  return (
    <>
      {viewPort.width >= 768 && (
        <button type="button" onClick={() => logout()} className={s.logoutBtn}>
          <p className={s.textBtn}>Выйти</p>
        </button>
      )}
      {viewPort.width < 768 && (
        <button type="button" onClick={() => logout()} className={s.btnLogout}>
          <svg className={s.iconLogout}>
            <use href={`${logOutImg}#logOut`} />
          </svg>
        </button>
      )}
      {/* {setModalOpen && (
        <Modal
          text={'Вы действительно хотите выйти?'}
          handleClickLeft={logoutModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )} */}
    </>
  );
};

export default UserLogout;
