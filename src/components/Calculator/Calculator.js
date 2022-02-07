import s from './Calculator.module.scss';
import sprite from '../../images/sprite.svg';

function Calculator() {
  return (
    <div className={s.container}>
      <input
        id="amount"
        className={s.input}
        type="number"
        min="0"
        step="1"
        placeholder="00"
        required
      />
      <div className={s.calcContainer}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-calculator`}></use>
        </svg>
      </div>
    </div>
  );
}

export default Calculator;
