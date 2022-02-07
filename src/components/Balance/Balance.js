import s from './Balance.module.scss'
import sprite from './sprite.svg'
import { ModalBalance } from './ModalBalance/ModalBalance'

export function Balance() {
    const onInputChange = (e) => {
        const inputValue = e.target.value
        console.log(inputValue)
    }

    return (
        <>
        <div className={s.container}>
                {/* ссылка на страницу отчетов */}
            <a href='' className={s.link}>
            <span className={s.link_text}>Перейти к отчетам</span> 
            <svg className={s.icon}>
       <use href={`${sprite}#icon-vector`}></use>
      </svg>
            </a>
            <form className={s.form}> 
                <label htmlFor='balance' className={s.label}>Баланс: </label>
                <input className={s.input} id='balance' onChange = {onInputChange}></input>
                <button type = "submit" className={s.button}>Подтвердить</button>  
            </form>        
        </div>
        <ModalBalance></ModalBalance>
        </>
    )
}