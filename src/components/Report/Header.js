import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import { CurrentMonth } from '../CurrentPeriod/CurrentMonth';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
// import authSelectors from '../../reduxV2/auth/auth-selector';

export default function Header() {
  // const isLoading = useSelector(transactionSelectors.isLoading);
  // console.log(isLoading);
  const report = useSelector(transactionSelectors.getReport);
  // console.log(report?.totalIncome);
  // const user = useSelector(authSelectors.getUser);
  // console.log(user);

  //const onSetBalance = e => {
  //   e.preventDefault();
  //   dispatch(какая-то коллбек-функция, которая отправляет указанную сумму и записывает в стайт);
  //};
  return (
    <>
      <div className={s.headerReport}>
        {/* link to main Route */}
        <section className={s.balanceHeader}>
          <Link to="/wallet" exact="true">
            <div className={s.returnToMain}>
              <svg width="24" height="24" className={s.returnBtn}>
                <use href={`${sprite}#icon-backbutton`}></use>
              </svg>
              <p className={s.returnToMainText}>Вернуться на главную</p>
            </div>
          </Link>
          <form className={s.balanceState}>
            <label className={s.balance}>Баланс:</label>
            <input
              type="text"
              className={s.inputBalance}
              name="balance"
              // value={balance}
              placeholder="55 000.00 UAN"
            ></input>
            <button
              type="submit"
              className={s.inputSubmit}
              // onSubmit={onSetBalance}
            >
              Подтвердить
            </button>
          </form>

          <CurrentMonth />
          <svg width="75" height="25" className={s.returnBtnBig}>
            <use href={`${sprite}#icon-backbutton`}></use>
          </svg>
        </section>
        <section className={s.balanceDetailsBox}>
          <ul className={s.balanceDetails}>
            <li className={s.statesOfBalance}>
              Расходы:<span className={s.expensesState}>- {report?.totalExpense} грн</span>
            </li>
            <svg className={s.balanceBorder}></svg>
            <li className={s.statesOfBalance}>
              Доходы:<span className={s.revenueState}>+ {report?.totalIncome} грн</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
