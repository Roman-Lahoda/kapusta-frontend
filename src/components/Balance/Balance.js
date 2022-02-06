import s from './Balance.module.scss'
import sprite from './sprite.svg'

export function Balance() {
    return (
        <div className={s.container}>
            <a href='' className={s.link}>
                {/* ссылка на страницу отчетов */}
            <span className={s.link_text}>Перейти к отчетам</span> 
            <svg className={s.icon}>
       <use href={`${sprite}#icon-vector`}></use>
      </svg>
            </a>
            <form className={s.form}> 
                <label htmlFor='balance' className={s.label}>Баланс: </label>
                <input className={s.input} id='balance'></input>
                <button type = "submit" className={s.button}>Подтвердить</button>  
            </form>
                   
        </div>
    )
}