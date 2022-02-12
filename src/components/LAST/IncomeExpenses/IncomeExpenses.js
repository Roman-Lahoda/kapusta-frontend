// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import transactionsSelectors from "../../redux/transactions/transactions-selectors";

import s from './incomeExpenses.module.css';

export default function IncomeExpenses() {
  // const Income = useSelector(transactionsSelectors.getAllIncome);
  // const Expenses = useSelector(transactionsSelectors.getAllExpenses);
  const Income = 1000000;
  const Expenses = 1000000;

  const allIncome = Income.reduce(function (accumulator, { sum }) {
    return (accumulator += parseFloat(sum));
  }, 0);
  const allExpenses = Expenses.reduce(function (accumulator, { sum }) {
    return (accumulator += parseFloat(sum));
  }, 0);

  return (
    <div className={s.field}>
      <div className={s.expenses_field}>
        <p className={s.title}>Расходы:</p>
        <p className={s.expenses}>{allExpenses ? '-' + allExpenses : '00.00'} грн.</p>
      </div>
      <div className={s.income_field}>
        <p className={s.title}>Доходы:</p>
        <p className={s.income}>{allIncome > 0 ? '+' + allIncome : '00.00'} грн.</p>
      </div>
    </div>
  );
}
