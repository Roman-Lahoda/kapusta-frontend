import s from './Calculator.module.scss';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import CalculatorInput from './CalculatorInput';

function Calculator() {
  const [calc, setCalc] = useState(false);
  const [sum, setSum] = useState('');

  const handleCalcClick = () => {
    setCalc(true);
  };

  const closeCalc = result => {
    setSum(result);

    setCalc(false);
  };

  const handleChangeSum = e => {
    setSum(e.target.value);
  };

  return (
    <div className={s.container}>
      <input
        // id="amount"
        className={s.inputSum}
        value={sum}
        name="sum"
        id="sum"
        type="number"
        min="0"
        step="1"
        placeholder="00.00 UAH"
        required
        onChange={handleChangeSum}
        autoComplete="off"
        // onBlur={onBlur}
      />

      <div className={s.calcContainer} onClick={handleCalcClick}>
        <div className={s.positionIcon}>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-calculator`}></use>
          </svg>
          {calc && <CalculatorInput onCloseCalculator={closeCalc} />}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
