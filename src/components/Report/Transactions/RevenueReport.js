import { useSelector } from 'react-redux';
// <<<<<<< HEAD
import { useEffect, useState } from 'react';
import s from './Transactions.module.scss';
import sprite from '../../../images/spriteReport.svg';
import transactionSelectors from '../../../reduxV2/transaction/transaction-selector';
import Diagram from '../../Diagram/Diagram.js';

export function RevenueReport() {
  const report = useSelector(transactionSelectors.getReport);
  // <<<<<<< HEAD
  const [currentCategory, setCurrentCategory] = useState('salary');
  const [inFocus, setInFocus] = useState('');
  // =======
  //   const [currentCategory, setCurrentCategory] = useState('');

  // >>>>>>> dev
  const incomeArray = report?.income;
  useEffect(() => {
    setInFocus('hover');
  }, []);

  useEffect(() => {
    if (currentCategory !== 'salary') {
      setInFocus('');
    }
  });

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
          {salaryTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(salaryTotalSum)}.00</p>
              <div className={s.picBox} data-focus={inFocus}>
                <svg width="59" height="56" className={s.itemPic} data-category="salary">
                  <use href={`${sprite}#icon-salary`}></use>
                </svg>
              </div>
              <p>ЗП</p>
            </li>
          ) : null}
          {additionalIncomeTotalSum ? (
            <li className={s.item}>
              <p> {new Intl.NumberFormat().format(additionalIncomeTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="56" className={s.itemPic} data-category="additionalIncome">
                  <use href={`${sprite}#icon-addsalary`}></use>
                </svg>
              </div>
              <p>ДОП. ДОХОД</p>
            </li>
          ) : null}
        </ul>
        <svg className={s.expBorder}></svg>
      </div>
      {/* <<<<<<< HEAD */}
      <section className={s.diagramBg}>
        {incomeArray && <Diagram arrayOfData={incomeArray[currentCategory]} type="доходах" />}
        {/* =======
      <section className={s.expensesDiargBg}>
        {/* {incomeArray && <Diagram arrayOfData={incomeArray[currentCategory]} />} */}
        {/* {currentCategory!=='' && <Diagram arrayOfData={incomeArray[currentCategory]} /> } */}
        {/* >>>>>>> dev */}
      </section>
    </div>
  );
}
