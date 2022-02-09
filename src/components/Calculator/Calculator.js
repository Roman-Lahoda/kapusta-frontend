import s from './Calculator.module.scss';
import sprite from '../../images/sprite.svg';

function Calculator({value, onChange, onBlur}) {
  return (
    <div className={s.container}>
     {/* --------------------СТАЛО----------------------- */}
      <input
        id="amount"
        type="text"
        name="sum"
        min="0"
        value={value}
        className={s.input}
        placeholder="00.00 UAH"
        autoComplete="off"
        required
        onChange={onChange}
        onBlur={onBlur}
      />

      {/* --------------------БЫЛО----------------------- */}
      {/* <input
        id="amount"
        className={s.input}
        type="number"
        min="0"
        step="1"
        placeholder="00"
        required
      /> */}
      <div className={s.calcContainer}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-calculator`}></use>
        </svg>
      </div>
    </div>
  );
}

export default Calculator;
