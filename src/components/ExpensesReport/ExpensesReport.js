import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
// import Diagram from '../Diagram/Diagram';

export default function ExpensesReport() {
  return (
    <>
      <ul className={s.expensesCategories}>
        <li className={s.item}>
          <p>5 000.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-products`}></use>
            </svg>
          </div>
          <p>ПРОДУКТЫ</p>
        </li>
        <li className={s.item}>
          <p>200.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-cocktail`}></use>
            </svg>
          </div>
          <p>АЛКОГОЛЬ</p>
        </li>
        <li className={s.item}>
          <p>800.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-kite`}></use>
            </svg>
          </div>
          <p>РАЗВЛЕЧЕНИЯ</p>
        </li>
        <svg className={s.expBorder}></svg>
        <li className={s.item}>
          <p>900.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-health`}></use>
            </svg>
          </div>
          <p>ЗДОРОВЬЕ</p>
        </li>
        <li className={s.item}>
          <p>2 000.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-car`}></use>
            </svg>
          </div>
          <p>ТРАНСПОРТ</p>
        </li>
        <li className={s.item}>
          <p>1 500.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-couch`}></use>
            </svg>
          </div>
          <p>ВСЕ ДЛЯ ДОМА</p>
        </li>
        <svg className={s.expBorder}></svg>
        <li className={s.item}>
          <p>800.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-tools`}></use>
            </svg>
          </div>
          <p>ТЕХНИКА</p>
        </li>
        <li className={s.item}>
          <p>2 200.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-invoice`}></use>
            </svg>
          </div>
          <p>КОММУНАЛКА, СВЯЗЬ</p>
        </li>
        <li className={s.item}>
          <p>1 800.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-hobby`}></use>
            </svg>
          </div>
          <p>СПОРТ, ХОББИ</p>
        </li>
        <svg className={s.expBorder}></svg>
        <li className={s.item}>
          <p>2 400.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-education`}></use>
            </svg>
          </div>
          <p>ОБРАЗОВАНИЕ</p>
        </li>
        <li className={s.item}>
          <p>3 000.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-ufo`}></use>
            </svg>
          </div>
          <p>ПРОЧЕЕ</p>
        </li>
        <svg className={s.expBorder}></svg>
      </ul>

      {/* <section className={s.expensesDiargBg}><Diargam /></section> */}
    </>
  );
}
