import s from './BalanceForm.module.scss'
import {useState, useEffect} from 'react'
import { ModalBalance } from '../ModalBalance/ModalBalance'



export function BalanceForm(){

    const[inputValue, setInputValue] = useState('')
    const[showModal, setShowModal] = useState(false)
    // const[isActive, setIsActive] = useState(false)

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


    return(
        <>
    <form className={s.form} onSubmit={handleSubmit}> 
    <label htmlFor='balance' className={s.label}>Баланс: </label>
    <div className={s.form_field}>
        <input type = 'text' name='balance' className={s.input} value={inputValue}  onChange = {handleBalanceChange}></input>
        <span  className={s.input_text}>UAH</span>
      </div>  
    <button type = "submit" className={s.button}>Подтвердить</button>  
</form> 
{showModal&&(<ModalBalance onClose={toggleModal}></ModalBalance>)}
    </>)
}