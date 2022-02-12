import {Link} from'react-router-dom'
import s from './Balance.module.scss'
import sprite from './sprite.svg'
import { ModalBalance } from './ModalBalance/ModalBalance'
import { BalanceForm } from './BalanceForm'
import { getBalance } from '../../services/kapustaAPI'
import { useState, useEffect } from 'react'

export function Balance() {

    // const balance = getBalance();
    // console.log(balance);

    return (
        <div className={s.container}>
                {/* <Link className={s.link}></Link> */}
            <a href='' className={s.link}>
            <span className={s.link_text}>Перейти к отчетам</span> 
            <svg className={s.icon}>
       <use href={`${sprite}#icon-vector`}></use>
      </svg>
            </a>
        <BalanceForm></BalanceForm>
        </div>
    )
}