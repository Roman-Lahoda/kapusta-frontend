import { useEffect } from "react";
import sprite from '../../images/logOutSprite.svg';

import s from "./UniversalModal.module.scss";

function UniversalModal({text, onClickYes, onClose, active }) {
  return (
      <div className={active ? `${s.modal} ${s.open}` : `${s.modalNone}`}>
        <button type='button' className={s.closeBtn} onClick={onClose}>
            <svg className={s.close}>
                <use href={`${sprite}#icon-cross`} />
            </svg>
        </button>

        <p className={s.text}>{text}</p>

        <ul className={s.list}>
            <li className={s.item}>
            <button type='button' className={`${s.button} ${s.buttonYes}`} onClick={onClickYes}>Yes</button>
            </li>
            <li>
            <button type='button' className={`${s.button} ${s.buttonNo}`} onClick={onClose}>No</button>
            </li>
        </ul>

      </div>

  
  );
}

export default UniversalModal;