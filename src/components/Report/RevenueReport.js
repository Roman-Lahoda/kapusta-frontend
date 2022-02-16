import { useSelector } from 'react-redux';
// <<<<<<< HEAD
import { useState } from 'react';
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
import Diagram from '../Diagram/Diagram.js';

export default function RevenueReport() {
  const report = useSelector(transactionSelectors.getReport);
  const [currentCategory, setCurrentCategory] = useState('salary');

  const incomeArray = report?.income;

  const selectionCategory = event => {
    if (event.target.nodeName == 'svg') {
      setCurrentCategory(event.target.dataset.category);
    }
  };
  const salaryTotalSum = report?.income?.salary?.reduce((a, b) => a + b.sum, 0);
  const additionalIncomeTotalSum = report?.income?.additionalIncome?.reduce((a, b) => a + b.sum, 0);

  return (
    <div>
      <div className={s.transactionsCategories}>
        <ul className={s.revenueCategories} onClick={selectionCategory}>
          <li className={s.item}>
            <p>{new Intl.NumberFormat('ru-RU').format(salaryTotalSum)}.00</p>
            <div className={s.picBox}>
              <svg width="59" height="56" className={s.itemPic} data-category = 'salary'>
                <use href={`${sprite}#icon-salary`}></use>
              </svg>
            </div>
            <p>ЗП</p>
          </li>
          <li className={s.item}>
            <p> {new Intl.NumberFormat().format(additionalIncomeTotalSum)}.00</p>
            <div className={s.picBox}>
              <svg width="59" height="56" className={s.itemPic} data-category = 'additionalIncome'>
                <use href={`${sprite}#icon-addsalary`}></use>
              </svg>
            </div>
            <p>ДОП. ДОХОД</p>
          </li>
        </ul>
        <svg className={s.expBorder}></svg>
      </div>
      <section className={s.expensesDiargBg}>
        {incomeArray && <Diagram arrayOfData={incomeArray[currentCategory]} />}
      </section>
    </div>
  );
}
