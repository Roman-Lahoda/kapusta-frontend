import s from './BalanceForm.module.scss'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModalBalance } from '../ModalBalance/ModalBalance'
import authSelectors from '../../reduxV2/auth/auth-selector'
import authOperation from '../../reduxV2/auth/auth-operation'



export function BalanceForm(){

    const[inputValue, setInputValue] = useState('')
    const[showModal, setShowModal] = useState(false)
    const[isDisable, setIsDisable] = useState(false)

    const dispatch = useDispatch();
    const balance = useSelector(authSelectors.getUserBalance);

    useEffect(()=>{
        // setInputValue(balance)
        if (balance === 0){
            setShowModal(true)
        }
        if(balance!==0){
            setIsDisable(true)
        }
    });
    
    const toggleModal = () =>{
        setShowModal(!showModal)
    };

    const handleBalanceChange = (e) => {
        setInputValue(e.target.value)
        // console.log(e.target.value)
    };

    const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log('submit')
    const data = {
        balance: inputValue
    };
    dispatch(authOperation.updateUser(data));
    setInputValue('');
    };


    return(
        <>
    <form className={s.form} onSubmit={handleSubmit}> 
    <label htmlFor='balance' className={s.label}>Баланс: </label>
    <div className={s.form_field}>
        <input 
        type = 'number' 
        name='balance' 
        disabled = {isDisable} 
        placeholder = {balance}
        value={inputValue}  
        onChange = {handleBalanceChange} 
        className={isDisable?s.input__disable:s.input}
        >
        </input>
        <span  className={s.input_text}>UAH</span>
      </div>  
    <button type = "submit" disabled = {isDisable} className={isDisable?s.button__disable:s.button}>Подтвердить</button>  
</form> 
{showModal&&(<ModalBalance onClose={toggleModal}></ModalBalance>)}
    </>)
}