import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import data from '../../data/month.json';
import s from './Summary.module.scss';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import Loader from 'components/Loader';
import { getLoader } from 'redux/transactions/transactions-selectors';

const Summary = ({ year }) => {
  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getTotalBalance);
  const loader = useSelector(getLoader);

  useEffect(() => {
    if (year > 0) {
      dispatch(transactionsOperations.getMonthlyBalancesYear(year));
    }
  }, [totalBalance, year, dispatch]);

  const balances = useSelector(selectors.getMonthlyBalances);

  const sortedBalances = [...balances].sort((a, b) => b.month - a.month);

  return (
    <div className={s.summaryContainer}>
      {loader && <Loader />}
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {sortedBalances.map(({ month, value }, index) => (
          <li key={index} className={s.summaryItem}>
            <p className={s.summaryDescription}>
              {data.find(monthData => monthData.id === month).name}
            </p>
            <p className={s.summaryDescription}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
