import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import { CurrentMonth } from '../CurrentPeriod/CurrentMonth';
import { useDispatch } from 'react-redux';

export default function Header() {
  // const dispatch = useDispatch();

  //const onSetBalance = e => {
  //   e.preventDefault();
  //   dispatch(какая-то коллбек-функция, которая отправляет указанную сумму и записывает в стайт);
  //};
  return (
    <div className={s.headerReport}>
      {/* link to main Route */}
      <section className={s.balanceHeader}>
        <div className={s.returnToMain}>
          <svg width="24" height="24" className={s.returnBtn}>
            <use href={`${sprite}#icon-backbutton`}></use>
          </svg>
          <p className={s.returnToMainText}>Вернуться на главную</p>
        </div>
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
            Расходы:<span className={s.expensesState}>-18 000.00 грн</span>
          </li>
          <svg className={s.balanceBorder}></svg>
          <li className={s.statesOfBalance}>
            Доходы:<span className={s.revenueState}>+45 000.00 грн</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
