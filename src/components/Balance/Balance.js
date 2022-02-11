import {Link} from'react-router-dom'
import s from './Balance.module.scss'
import sprite from './sprite.svg'
import { ModalBalance } from './ModalBalance/ModalBalance'
import { getBalance } from '../../services/kapustaAPI'
import { useState, useEffect } from 'react'

export function Balance() {

    const[showModal, setShowModal] = useState(false)
    const[inputValue, setInputValue]=useState('')

    const toggleModal = () =>{
        setShowModal(!showModal)
    }


    const onInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    // const balance = getBalance();
    // console.log(balance);

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
                <input type = 'text' className={s.input} id='balance' value={inputValue} onChange = {onInputChange}></input>
                <button type = "submit" className={s.button}>Подтвердить</button>  
            </form>    
        </div>
        {showModal&&(<ModalBalance onClose={toggleModal}></ModalBalance>)}
        </>
    )
}