import s from './State.module.scss';
import { useSelector } from 'react-redux';
import transactionSelectors from '../../../reduxV2/transaction/transaction-selector';

export default function BalanceState() {
  const report = useSelector(transactionSelectors.getReport);
  return (
    <section className={s.balanceDetailsBox}>
      <ul className={s.balanceDetails}>
        <li className={s.statesOfBalance}>
          Расходы:
          <span className={s.expensesState}>
            - {new Intl.NumberFormat('ru-RU').format(report?.totalExpense) || 0}.00 грн
          </span>
        </li>
        <svg className={s.balanceBorder}></svg>
        <li className={s.statesOfBalance}>
          Доходы:
          <span className={s.revenueState}>
            + {new Intl.NumberFormat('ru-RU').format(report?.totalIncome)}.00 грн
          </span>
        </li>
      </ul>
    </section>
  );
}
