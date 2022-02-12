import s from './Balance.module.scss'
import sprite from './sprite.svg'
import {useState, useEffect} from 'react'
import { ModalBalance } from './ModalBalance/ModalBalance'


export function BalanceForm(){

    const[inputValue, setInputValue] = useState('')
    const[showModal, setShowModal] = useState(false)
    const[isActive, setIsActive] = useState(false)

    const toggleModal = () =>{
        setShowModal(!showModal)
    }

    const handleBalanceChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('submit')
    }

    // const inputNormilize = (number) => {
    //     const string = number + ' UAH'
    //     console.log(string)
    //     return string
    // }

    // inputNormilize(10)

    return(
        <>
    <form className={s.form} onSubmit={handleSubmit}> 
    <label htmlFor='balance' className={s.label}>Баланс: </label>
    <div className={s.form_field}>
        <input type = 'text' name='balance' className={s.input} value={inputValue}  onChange = {handleBalanceChange}></input>
        <svg className={s.input_icon}>
       <use href={`${sprite}#icon-hryvnia`}></use>
      </svg>
      </div>  
    <button type = "submit" className={s.button}>Подтвердить</button>  
</form> 
{showModal&&(<ModalBalance onClose={toggleModal}></ModalBalance>)}
    </>)
}