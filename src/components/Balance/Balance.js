import {Link} from'react-router-dom'
import s from './Balance.module.scss'
import sprite from './sprite.svg'
import { ModalBalance } from './ModalBalance/ModalBalance'
import { getBalance } from '../../services/kapustaAPI'

export function Balance() {
    const onInputChange = (e) => {
        const inputValue = e.target.value
        console.log(inputValue)
    }

    const balance = getBalance();
    console.log(balance);

    return (
        <>
        <div className={s.container}>
                {/* <Link className={s.link}></Link> */}
            <a href='' className={s.link}>
            <span className={s.link_text}>Перейти к отчетам</span> 
            <svg className={s.icon}>
       <use href={`${sprite}#icon-vector`}></use>
      </svg>
            </a>
            <form className={s.form}> 
                <label htmlFor='balance' className={s.label}>Баланс: </label>
                <input type = 'text' className={s.input} id='balance' value='123' onChange = {onInputChange}></input>
                <button type = "submit" className={s.button}>Подтвердить</button>  
            </form>        
        </div>
        {/* Добавлю условный рендеринг */}
        <ModalBalance></ModalBalance>
        </>
    )
}