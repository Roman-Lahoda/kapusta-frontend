import s from './ReportLink.module.scss'
import sprite from './sprite.svg'


export function ReportLink(){
    return (
        <a href='' className={s.link}>
          <span className={s.link_text}>Перейти к отчетам</span> 
          <svg className={s.icon}>
          <use href={`${sprite}#icon-vector`}></use>
          </svg>
        </a> 
    )
 {/* <Link className={s.link}>
 <span className={s.link_text}>Перейти к отчетам</span> 
          <svg className={s.icon}>
          <use href={`${sprite}#icon-vector`}></use>
          </svg>
</Link> */}
}
