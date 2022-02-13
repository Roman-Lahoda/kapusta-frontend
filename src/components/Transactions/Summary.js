import React, { useEffect } from 'react';
// import {
//   transactionsOperations,
//   transactionsSelectors,
// } from '../../redux/transaction';
// import { useDispatch, useSelector } from 'react-redux';

// import { getBalance } from '../../redux/balance/balance-selectors';
import monthWord from './monthWord';
import s from './Summary.module.scss';

// import { getToken } from '../../redux/login/auth-selectors';

const Summary = ({ value }) => {
  //   const dispatch = useDispatch();
  //   const year = useSelector(transactionsSelectors.getSelectedYear);
  //   const balance = useSelector(getBalance);
  //   const transactionsByYear = useSelector(transactionsSelectors.getSummaryByYear);

  //   useEffect(() => {
  //     console.log(balance);
  //     dispatch(transactionsOperations.fetchTransactionsSummaryByYear(year));
  //   }, [dispatch, year, balance]);

  let transactionsByYear = 12;
  let summary = {};
  const summaryByYear = transactionsByYear['data'];
  if (transactionsByYear) {
    switch (value) {
      case 'expense':
        summary = transactionsByYear['expense'];
        break;
      case 'income':
        summary = transactionsByYear['income'];
        break;
      default:
        summary = {};
    }
  }

  let arrSummary = [];

  for (const key in summary) {
    const total = Math.round(summary[`${key}`]['total'] * 100) / 100;
    arrSummary.push({
      month: monthWord(key),
      total,
      id: +key,
    });
  }

  arrSummary = arrSummary.sort((a, b) => b.id - a.id);
  if (arrSummary.length > 6) {
    arrSummary = arrSummary.slice(0, 6);
  }
  return (
    <div className={s.summaryBox}>
      <h3 className={s.title}>сводка</h3>
      {arrSummary.length > 0 ? (
        <ul>
          {arrSummary.map(item => (
            <li key={item.id} className={s.item}>
              <div className={s.itemBox}>
                <p className={s.itemMonth}>{item.month}</p>
                <p className={s.itemTotal}>{item.total}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className={s.item}>
            <div className={s.itemBox} style={{ height: '231px' }}></div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Summary;
