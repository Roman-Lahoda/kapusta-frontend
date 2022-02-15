import { useSelector } from 'react-redux';
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
import Diagram from '../Diagram';

export default function RevenueReport() {
  const report = useSelector(transactionSelectors.getReport);

  const salaryTotalSum = report?.income?.salary?.reduce((a, b) => a + b.sum, 0);
  const additionalIncomeTotalSum = report?.income?.additionalincome?.reduce((a, b) => a + b.sum, 0);

  return (
    <div>
      <div className={s.transactionsCategories}>
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
            <p> {new Intl.NumberFormat().format(additionalIncomeTotalSum)}.00</p>
            <div className={s.picBox}>
              <svg width="59" height="56" className={s.itemPic}>
                <use href={`${sprite}#icon-addsalary`}></use>
              </svg>
            </div>
            <p>ДОП. ДОХОД</p>
          </li>
        </ul>

        <svg className={s.expBorder}></svg>
      </div>
      <article className={s.diargBg}>
        <Diagram />
      </article>
    </div>
  );
}
