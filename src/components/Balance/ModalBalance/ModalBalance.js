// import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// const modalRoot = document.querySelector('#modalRoot');
import s from './ModalBalance.module.scss'


export function ModalBalance (){

        // return createPortal(
            return (
            <div className={s.overlay}>
                <div className={s.triangle_top}></div>
              <div className={s.modal}>
               <p className={s.text_first}>Привет! Для начала работы внеси текущий баланс своего счета!</p>
               <p className={s.text_second}>Ты не можешь тратить деньги пока их у тебя нет :)</p>
              </div>
            </div>
            )
            // modalRoot,
        //   );  
}