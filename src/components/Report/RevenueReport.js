import { useSelector } from 'react-redux';
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';

export default function RevenueReport() {
  const report = useSelector(transactionSelectors.getReport);
  const salaryTotalSum = report?.expense?.salary?.reduce((a, b) => a + b.sum, 0);
  const additionalincomeTotalSum = report?.expense?.additionalincome?.reduce(
    (a, b) => a + b.sum,
    0,
  );
  return (
    <>
      <ul className={s.revenueCategories}>
        <li className={s.item}>
          <p>{new Intl.NumberFormat('ru-RU').format(salaryTotalSum)}.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-salary`}></use>
            </svg>
          </div>
          <p>ЗП</p>
        </li>
        <li className={s.item}>
          <p>{new Intl.NumberFormat('ru-RU').format(additionalincomeTotalSum)}.00</p>
          <div className={s.picBox}>
            <svg width="59" height="56" className={s.itemPic}>
              <use href={`${sprite}#icon-addsalary`}></use>
            </svg>
          </div>
          <p>ДОП. ДОХОД</p>
        </li>
      </ul>

      <svg className={s.expBorder}></svg>
    </>
  );
}
