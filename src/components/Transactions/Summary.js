import s from './Summary.module.scss';

const Summary = ({ value }) => {
  return (
    <div className={s.summaryBox}>
      <h3 className={s.title}>сводка</h3>
      <ul>
        {value?.map(item => (
          <li key={item.id} className={s.item}>
            <div className={s.itemBox}>
              <p className={s.itemMonth}>{item.month}</p>
              <p className={s.itemTotal}>{item.sum}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
