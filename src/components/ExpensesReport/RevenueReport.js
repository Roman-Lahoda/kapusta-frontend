import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
// import Diagram from '../Diagram/Diagram';

export default function RevenueReport() {
  return (
    <>
      <section>
        <ul className={s.revenueCategories}>
          <li className={s.item}>
            <p>45 0000.00</p>
            <div className={s.picBox}>
              <svg width="59" height="56" className={s.itemPic}>
                <use href={`${sprite}#icon-salary`}></use>
              </svg>
            </div>
            <p>ЗП</p>
          </li>
          <li className={s.item}>
            <p>1 500.00</p>
            <div className={s.picBox}>
              <svg width="59" height="56" className={s.itemPic}>
                <use href={`${sprite}#icon-addsalary`}></use>
              </svg>
            </div>
            <p>ДОП. ДОХОД</p>
          </li>
        </ul>
      </section>
      <svg className={s.expBorder}></svg>
      <section className={s.expensesDiargBg}>{/* <Diargam /> */}</section>
    </>
  );
}
