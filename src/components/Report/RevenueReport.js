import { useSelector } from 'react-redux';
import {useState} from 'react'
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
import Diagram from '../Diagram/Diagram';



export default function RevenueReport() {
  const report = useSelector(transactionSelectors.getReport);
  const [currentCategory, setCurrentCategory] = useState ('salary')

  const incomeArray = report?.income;

  console.log("incomeArray = ", incomeArray);
  console.log("incomeArray.salary = ", incomeArray.salary);

  const selectionCategory = (event) => {
    if (event.target.nodeName== 'LI') {
      setCurrentCategory (event.target.dataset.category)
      console.log("Сработала функция. event.target.dataset.category =   ", event.target.dataset.category);
    }
  }

  return (
    <>
      <section>
        <ul className={s.revenueCategories} onClick = {selectionCategory}>
          <li className={s.item} data-category = 'salary'>
            <p>45 0000.00</p>
            <div className={s.picBox}>
              <svg width="59" height="56" className={s.itemPic}>
                <use href={`${sprite}#icon-salary`}></use>
              </svg>
            </div>
            <p>ЗП</p>
          </li>
          <li className={s.item} data-category = 'additionalincome' >
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
      <section className={s.expensesDiargBg}>
      
        { incomeArray &&  <Diagram arrayOfData = {incomeArray[currentCategory] } /> }
      </section>
    </>
  );
}
