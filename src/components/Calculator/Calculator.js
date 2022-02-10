import s from './Calculator.module.scss';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import CalculatorInput from './CalculatorInput';


function Calculator({value, onChange, onBlur}) {

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
        className={s.inputSum}
        value={sum}
        name="sum"
        id="sum"
        type="number"
        min="0"
        step="1"
        placeholder="0.00"
        required

      /> */}
      {/* <div className={s.calcContainer}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-calculator`}></use>
        </svg>

        onChange={handleChangeSum}
      />*/}

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
