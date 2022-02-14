import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import { CurrentMonth } from '../CurrentPeriod/CurrentMonth';
import { BalanceForm } from '../BalanceForm/BalanceForm';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
import authSelectors from '../../reduxV2/auth/auth-selector';
// import authSelectors from '../../reduxV2/auth/auth-selector';

export default function Header() {
  // const isLoading = useSelector(transactionSelectors.isLoading);
  // console.log(isLoading);
  const report = useSelector(transactionSelectors.getReport);
  console.log(report);
  const balance = useSelector(authSelectors.getUserBalance);

  return (
    <>
      <div className={s.headerReport}>
        <section className={s.balanceHeader}>
          <Link to="/wallet" exact="true">
            <div className={s.returnToMain}>
              <svg width="24" height="24" className={s.returnBtn}>
                <use href={`${sprite}#icon-backbutton`}></use>
              </svg>
              <p className={s.returnToMainText}>Вернуться на главную</p>
            </div>
          </Link>

          <form className={s.form}>
            <label htmlFor="balance" className={s.label}>
              Баланс:{' '}
            </label>
            <div className={s.form_field}>
              <input
                type="number"
                name="balance"
                disabled="disabled"
                placeholder={new Intl.NumberFormat('ru-RU').format(balance)}
                // value={inputValue}
                // onChange={handleBalanceChange}
                className={s.input__disable}
              ></input>
              <span className={s.input_text}>UAH</span>
            </div>
          </form>

          {/* <BalanceForm className={s.balance} id="balance" /> */}
          {/* <form className={s.balanceState}>
            <label className={s.balance}>Баланс:</label>
            <input
              type="text"
              className={s.inputBalance}
              name="balance"
              placeholder="55 000.00 UAN"
            ></input>
            <button type="submit" className={s.inputSubmit}>
              Подтвердить
            </button>
          </form> */}

          <CurrentMonth />
          <svg width="75" height="25" className={s.returnBtnBig}>
            <use href={`${sprite}#icon-backbutton`}></use>
          </svg>
        </section>
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
      </div>
    </>
  );
}
