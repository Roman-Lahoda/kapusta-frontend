import { useState } from 'react';
import sprite from '../../images/spriteReport.svg';
import s from './Report.module.scss';

export default function TransactionType() {
  const [transactionType, setTransactionType] = useState('РАСХОДЫ');
  const onClickTransactionType = () => {
    if (transactionType === 'РАСХОДЫ') {
      setTransactionType('ДОХОДЫ');
      return;
    }
    setTransactionType('РАСХОДЫ');
  };
  return (
    <div className={s.currentBlock}>
      <svg width="10" height="20" onClick={onClickTransactionType} name="prev">
        <use href={`${sprite}#icon-vectorleft`}></use>
      </svg>
      <p className={s.currentTransactionType}>{transactionType}</p>
      <svg width="10" height="20" onClick={onClickTransactionType} name="next">
        <use href={`${sprite}#icon-vectorright`}></use>
      </svg>
    </div>
  );
}
