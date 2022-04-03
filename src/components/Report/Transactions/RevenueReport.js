import { useSelector } from 'react-redux';
// <<<<<<< HEAD
import { useEffect, useState } from 'react';
import s from './Transactions.module.scss';
import sprite from '../../../images/spriteReport.svg';
import transactionSelectors from '../../../reduxV2/transaction/transaction-selector';
import Diagram from '../../Diagram/Diagram.js';

export function RevenueReport() {
  // <<<<<<< HEAD
  const [currentCategory, setCurrentCategory] = useState('');
  const report = useSelector(transactionSelectors.getReport);
  // const [inFocus, setInFocus] = useState('');
  // =======
  //   const [currentCategory, setCurrentCategory] = useState('');

  // >>>>>>> dev
  // useEffect(() => {
  //   setInFocus('hover');
  // }, []);

  // useEffect(() => {
  //   if (currentCategory !== 'salary') {
  //     setInFocus('');
  //   }
  // });

  // const selectionCategory = event => {
  //   if (event.target.nodeName == 'svg') {
  //     setCurrentCategory(event.target.dataset.category);
  //   }
  // };
  const incomeArray = report?.income;

  const totalSum = category => {
    return report?.income?.[category]?.reduce((a, b) => a + b.sum, 0);
  };

  // const salaryTotalSum = report?.income?.salary?.reduce((a, b) => a + b.sum, 0);
  const salaryTotalSum = totalSum('salary');
  // const additionalIncomeTotalSum = report?.income?.additionalIncome?.reduce((a, b) => a + b.sum, 0);
  const additionalIncomeTotalSum = totalSum('additionalIncome');

  useEffect(() => {
    setCurrentCategory('');
    const incomeArray = report?.income;
    let needCategory = '';
    if (incomeArray) {
      const keys = Object.keys(incomeArray);
      needCategory = keys?.find(key => incomeArray[key]?.length !== 0);
      if (needCategory?.length > 0) {
        setCurrentCategory(needCategory);
      }
    }
  }, [report]);

  const choseNextCategory = e => {
    if (currentCategory !== e.currentTarget.dataset.category) {
      console.log('test');
      // console.log('now', currentCategory);
      // console.log('current', e.currentTarget.dataset.category);
      setCurrentCategory(e.currentTarget.dataset.category);
      // console.log('now new', currentCategory);
    }
  };
  // console.log(currentCategory);

  useEffect(() => {
    // console.log('test effect');
    const elements = document.querySelectorAll('.category-btn');
    const array = Array.from(elements);
    array.forEach(elem => elem.removeEventListener('click', choseNextCategory));
    array.forEach(elem => elem.addEventListener('click', choseNextCategory));
  }, [report]);

  const choseCategory = x => {
    if (currentCategory === x) {
      return 'hover';
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className={s.transactionsCategories}>
        <ul
          className={s.revenueCategories}
          // onClick={selectionCategory}
        >
          {salaryTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(salaryTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                // data-focus={inFocus}
                data-focus={choseCategory('salary')}
                data-category="salary"
              >
                <svg
                  width="59"
                  height="56"
                  className={s.itemPic}
                  // data-category="salary"
                >
                  <use href={`${sprite}#icon-salary`}></use>
                </svg>
              </button>
              <p>ЗП</p>
            </li>
          ) : null}
          {additionalIncomeTotalSum ? (
            <li className={s.item}>
              <p> {new Intl.NumberFormat().format(additionalIncomeTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                data-focus={choseCategory('additionalIncome')}
                data-category="additionalIncome"
              >
                <svg
                  width="59"
                  height="56"
                  className={s.itemPic}
                  // data-category="additionalIncome"
                >
                  <use href={`${sprite}#icon-addsalary`}></use>
                </svg>
              </button>
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
