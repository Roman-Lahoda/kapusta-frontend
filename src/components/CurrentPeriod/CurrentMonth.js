import s from './CurrentMonth.module.scss';
import sprite from '../../images/spriteReport.svg';
import { Month } from '../../constants/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';

export function CurrentMonth() {
  const dispatch = useDispatch();

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    dispatch(transactionOperation.fetchTransactionReport({ month, year }));
  }, [month]);

  const onPrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
      return;
    }
    setMonth(month - 1);
  };
  const onNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
      return;
    }
    setMonth(month + 1);
    if (month === currentMonth) {
      setMonth(currentMonth);
      return;
    }
  };

  return (
    <section className={s.currentSection}>
      <p className={s.currentPeriod}>Текущий период</p>
      <div className={s.currentBlock}>
        <svg width="10" height="20" onClick={onPrevMonth} name="prev">
          <use href={`${sprite}#icon-vectorleft`}></use>
        </svg>
        <p className={s.currentDates}>
          {Month[`${month}`]} {year}
        </p>
        <svg width="10" height="20" onClick={onNextMonth} name="next">
          <use href={`${sprite}#icon-vectorright`}></use>
        </svg>
      </div>
    </section>
  );
}
