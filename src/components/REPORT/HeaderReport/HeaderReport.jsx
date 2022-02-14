import s from './HeaderReport.module.css';
import React from 'react';

export default function HeaderReport({ transactionsMonth }) {
  // const getTotalSum = typeTrans => {
  //   let totalAmount = 0;
  //   const sumArr = transactionsMonth(transaction => transaction.group.type === typeTrans);
  //   sumArr.map(el => (totalAmount += el.total_amounts));
  //   return totalAmount;
  // };

  return (
    <div className={s.headerReport}>
      <div className={s.nameReport}>
        <p className={s.itemReport}>Расходы:</p>
        <span className={`${s.dataReport} ${s.expenses}`}>{`- ${getTotalSum(false)} грн.`}</span>
      </div>
      <div className={s.nameReport}>
        <p className={s.itemReport}>Доходы:</p>
        <span className={`${s.dataReport} ${s.incomes}`}>{`+ ${getTotalSum(true)} грн.`}</span>
      </div>
    </div>
  );
}
