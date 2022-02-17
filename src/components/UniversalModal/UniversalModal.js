import { useEffect } from 'react';
// import sprite from '../../images/logOutSprite.svg';
import { ReactComponent as CloseIcon } from '../../images/transactionIcons/close.svg';

import s from './UniversalModal.module.scss';

function UniversalModal({ text, onClickYes, onClose, active }) {
  return (
    <div className={active ? `${s.modal} ${s.open}` : `${s.modalNone}`}>
      <button type="button" className={s.closeBtn} onClick={onClose}>
        {/* <svg className={s.close}> */}
        {/* <use href={`${sprite}#icon-cross`} /> */}
        <CloseIcon width="12" height="12" />
        {/* </svg> */}
      </button>

      <p className={s.text}>{text}</p>

      <ul className={s.list}>
        <li className={s.item}>
          <button type="button" className={`${s.button} ${s.buttonYes}`} onClick={onClickYes}>
            Да
          </button>
        </li>
        <li>
          <button type="button" className={`${s.button} ${s.buttonNo}`} onClick={onClose}>
            Нет
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UniversalModal;
