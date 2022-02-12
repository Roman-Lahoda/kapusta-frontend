import React from 'react';
import { useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { v4 } from 'uuid';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
// import { transactionsOperations } from '../../../redux/transactions/transactions-operations';
import deleteImg from '../../../images/delete.svg';
import s from './Table.module.css';

function Table({ array, transactionType }) {
  const dispatch = useDispatch();

  if (array) {
    if (array.length < 9) {
      const draft = {
        date: '',
        description: '',
        category: '',
        sum: '',
        transactionType: '',
        emptyItem: true,
      };
      const position = array.length;
      array.length = 9;
      array.fill(draft, position);
    }
  }
  return (
    <SimpleBar className={s.simpleBar}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.borderLeft}>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th className={s.borderRight} colSpan={2}>
              Сумма
            </th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {array &&
            array.map(item => (
              <tr key={!item._id ? (item.id = v4()) : item._id} className={s.tr}>
                <td>{item.date}</td>
                <td>
                  <EllipsisText text={item.description} length={30} />
                </td>
                <td>{item.category}</td>
                {item.transactionType === 'income' ? (
                  <td className={s.incomeTrsn}>{item.sum && `+ ${item.sum.toFixed(2)}`}</td>
                ) : (
                  <td className={s.expenseTrsn}>{item.sum && `- ${item.sum.toFixed(2)}`}</td>
                )}
                <td>
                  {!item.emptyItem && (
                    <button
                      className={s.deleteBtn}
                      // onClick={() =>
                      //   dispatch(
                      //     transactionsOperations.deleteTransaction({
                      //       transactionId: item._id,
                      //       transactionType: transactionType,
                      //     }),
                      //   )
                      // }
                    >
                      <img src={deleteImg} alt="delete bucket" className={s.deleteImg} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </SimpleBar>
  );
}

export default Table;
