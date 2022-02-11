import ExpensesReport from './ExpensesReport';
import Header from './Header';
import RevenueReport from './RevenueReport';
import { useState } from 'react';
import sprite from '../../images/spriteReport.svg';
import s from './Report.module.scss';

export default function Report() {
  const [transactionType, setTransactionType] = useState('РАСХОДЫ');
  const onClickTransactionType = () => {
    if (transactionType === 'РАСХОДЫ') {
      setTransactionType('ДОХОДЫ');
      return;
    }
    setTransactionType('РАСХОДЫ');
  };
  return (
    <>
      <Header />
      <section className={s.expensesBg}>
        <div className={s.currentBlock}>
          <svg width="10" height="20" onClick={onClickTransactionType} name="prev">
            <use href={`${sprite}#icon-vectorleft`}></use>
          </svg>
          <p className={s.currentTransactionType}>{transactionType}</p>
          <svg width="10" height="20" onClick={onClickTransactionType} name="next">
            <use href={`${sprite}#icon-vectorright`}></use>
          </svg>
        </div>

        {transactionType === 'РАСХОДЫ' ? <ExpensesReport /> : <RevenueReport />}
      </section>
    </>
  );
}
