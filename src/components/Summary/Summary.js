import s from './Summary.module.scss';
import { Month } from '../../constants/constants';
import { useEffect, useState } from 'react';

function Summary({ report }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!report || report === []) {
      return;
    }
    const newReport = JSON.parse(JSON.stringify(report));

    newReport.map(i =>
      Object.keys(Month).includes(`${i.month}`) ? (i.month = Month[i.month]) : null,
    );
    setData(newReport);
  }, [report]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>СВОДКА</h1>
      <ul className={s.list}>
        {data &&
          data.map(({ sum, month }) => (
            <li key={`${sum}+${month}`} className={s.item}>
              <span className={s.item_text}>{month}</span>
              <span className={s.item_number}>{sum}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Summary;
