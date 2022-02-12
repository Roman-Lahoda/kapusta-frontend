import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.scss';
// import { textAnimation } from '../../helpers/animationText';
// import { gsap, Power1 } from 'gsap';

const modalRoot = document.querySelector('#modal-root');

function Modal({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonLeft = 'Да',
  modalButtonRight = ' Нет',
  styleReg,
}) {
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  // let text = useRef(null);
  // useEffect(() => {
  //   textAnimation(text);
  // }, []);

  // let buttons = useRef(null);
  // useEffect(() => {
  //   gsap.fromTo(
  //     buttons,
  //     0.5,
  //     {
  //       y: -100,
  //     },
  //     {
  //       y: 13,
  //       ease: Power1.easeInOut,
  //     },
  //   );
  // }, []);

  return createPortal(
    <div className={s.modalBackground} onClick={handleOverlayClick}>
      <div className={`${s.modalContainer} ${styleReg}`}>
        <span className={s.closeBtn} onClick={onClose}>
          &#10006;
        </span>

        <div className={s.title} ref={el => (text = el)}>
          <p>{modalTitle}</p>
        </div>

        {/* <p className={styles.title}>{modalTitle}</p> */}

        <div className={s.buttons}>
          <div ref={el => (buttons = el)}>
            <button className={s.commonStyles} onClick={handleClickLeft}>
              {modalButtonLeft}
            </button>
            <button className={s.commonStyles} onClick={handleClickRight}>
              {modalButtonRight}
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
