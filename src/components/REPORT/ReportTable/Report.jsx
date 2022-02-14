import s from './Report.module.css';
import deleteBtn from '../../../images/transactionIcons/delete.svg';

function Report({ date, category, amount, description, id, handleDelete, type }) {
  const amountType = type ? amount : -amount;

  return (
    <li className={s.tableTr}>
      <div className={s.divWrap}>
        <div className={`${s.tableTd}, ${s.tableDate}`}>{date}</div>
        <div className={`${s.tableTd}, ${s.tableDesc}`}>{description}</div>
      </div>

      <div className={`${s.tableTd}, ${s.tableCat}`}>{category}</div>
      <div className={type === true ? s.tableSumI : s.tableSumO}>{`${amountType} грн.`}</div>
      <div className={`${s.tableTd}, ${s.tableDelete}`}>
        <button type="button" className={s.deleteBtn} onClick={() => handleDelete(id, type)}>
          <img
            src={deleteBtn}
            alt="delete button"
            width="18px"
            height="18px"
            className={s.deleteBtnImg}
          />
        </button>
      </div>
    </li>
  );
}

export default Report;
