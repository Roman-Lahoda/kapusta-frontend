import s from './Dashboard.module.scss';
import Button from '../Button/Button';
import ExpensesAndIncomes from '../ExpensesAndIncomes/ExpensesAndIncomes';
import { useEffect, useState } from 'react';
import { EXPENSES, INCOMES } from '../../constants/constants';

const buttons = ['Расход', 'Доход'];
const changeStyle = (active, text) => {
  return active === text ? s.activeButton : s.button;
};

function Dashboard({
  active,
  changeActiveState,
  stateDashboardButton,
  changeStateDashboardButton,
}) {
  const [transactionType, setTransactionType] = useState(EXPENSES);

  useEffect(() => {
    if (active === 'Доход') {
      setTransactionType(INCOMES);
    } else if (active === 'Расход') {
      setTransactionType(EXPENSES);
    }
  }, [active]);

  const handleClick = e => {
    const { innerHTML } = e.target;
    changeActiveState(innerHTML);
  };

  return (
    <>
      <div className={s.buttonWrapper}>
        {buttons.map(text => (
          <Button
            key={text}
            type="button"
            className={changeStyle(active, text)}
            text={text}
            onClick={handleClick}
          />
        ))}
      </div>

      <ExpensesAndIncomes
        transactionType={transactionType}
        active={active}
        stateDashboardButton={stateDashboardButton}
        changeStateDashboardButton={changeStateDashboardButton}
      />
    </>
  );
}

export default Dashboard;
