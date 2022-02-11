import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './ModalBalance.module.scss'
const modalRoot = document.querySelector('#modalRoot');



export function ModalBalance (){

        return createPortal(
            <div className={s.overlay}>
              <div className={s.modal}>
               <p className={s.text_first}>Привет! Для начала работы внеси текущий баланс своего счета!</p>
               <p className={s.text_second}>Ты не можешь тратить деньги пока их у тебя нет :)</p>
              </div>
            </div>,
            modalRoot,
          );  
}