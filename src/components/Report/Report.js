import { ExpensesReport, RevenueReport } from '././Transactions';
import Header from './Header/Header';
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
      <section className={s.sectionsBg}>
        <div className={s.transactionsChangeBlock}>
          <div className={s.currentTransactionBlock}>
            <button className={s.button}>
              <svg width="10" height="20" onClick={onClickTransactionType} name="prev">
                <use href={`${sprite}#icon-vectorleft`}></use>
              </svg>
            </button>
            <p className={s.currentTransactionType}>{transactionType}</p>
            <button className={s.button}>
              <svg width="10" height="20" onClick={onClickTransactionType} name="next">
                <use href={`${sprite}#icon-vectorright`}></use>
              </svg>
            </button>
          </div>
        </div>
        {transactionType === 'РАСХОДЫ' ? <ExpensesReport /> : <RevenueReport />}
      </section>
    </>
  );
}
