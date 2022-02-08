import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
// import { logOut } from "../../redux/auth/operations";
import ModalBtn from '../../components/Button/Button';

import s from './LogoutModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

function LogoutModal({ onCancel, text }) {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const isLogOut = () => {
    dispatch(logOut());
    onCancel();
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCancel();
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
    return createPortal(
      <div className={s.ModalOverlay} onClick={handleOverlayClick}>
        <div className={s.ModalWindow}>
          <div className={s.CloseModalBtnWrap}>
            <button type="button" onClick={onCancel} className={s.CloseModalBtn}></button>
          </div>
          <div className={s.ModalWindowWrap}>
            <p className={s.ModalText}> {text}</p>
          </div>
          <div className={s.ModalWindowWrap}>
            <div className={s.btnWrapper}>
              <ModalBtn text={'modal.btnYes'} onClick={isLogOut} />
            </div>
            <div className={s.btnWrapper}>
              <ModalBtn text={'modal.btnNo'} onClick={onCancel} />
            </div>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  };
}

export default LogoutModal;
