import Media from 'react-media';
// import { store } from '../../redux/store';
// import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import spriteGlobal from '../../images/transactionIcons/symbol-defs.svg';
// import transactionsOperations from 'redux/transactions/transactions-operations';
// import {
//     getTransactionsDay,
//     getTotalBalance,
// } from '../../redux/transactions/transactions-selectors';
// import {
//     getTransactionsByDate,
//     getTransactionsByPeriod,
// } from '../../services/transactionApi';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import sprite from '../../images/transactionIcons/symbol-defs.svg';
import s from './TransactionTable.module.css';
import st from '../Modal/Modal.module.css';

export default function TransactionTable({
  date,
  setNewDate,
  sum,
  category,
  subCategory,
  // transaction,
}) {
  // const dispatch = useDispatch();
  const [transactionId, setTransactionId] = useState('');
  const [modalDelete, setModalDelete] = useState(false);
  // const transactionsList = useSelector(getTransactionsDay);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  //   useEffect(() => {
  //     const data = transactionsList.filter(item => item.date === date).reverse();
  //     setFilteredTransactions(data);
  //   }, [transactionsList, date]);

  const toggleModal = () => {
    setModalDelete(!modalDelete);
  };

  const handleDeleteClick = id => {
    toggleModal();
    setTransactionId(id);
  };
  const onDeleteCancel = () => {
    // setTransactionId('');
    setModalDelete(false);
  };
  const onDeleteOk = id => {
    const transactionToDelete = filteredTransactions.find(item => {
      console.log(item.id === id);
      return item.id === id;
    });
    if (transactionToDelete) {
      dispatch(transactionsOperations.deleteTransactionOperation(transactionToDelete));
      setTransactionId('');
      toggleModal();
    } else {
      alert(`Problem on delete onDeleteOk`);
    }
  };

  return (
    <>
      {modalDelete && (
        <Modal
          // handleClickRight={onDeleteCancel}
          // handleClickLeft={onDeleteOk(transactionId)}
          onClose={onDeleteCancel}
        >
          <button className={st.close} onClick={toggleModal}>
            <svg width="12" height="12">
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
          <p className={st.modalTxt}>Вы уверены?</p>
          <div className={st.modalBtns}>
            <Button type="button" onClick={() => onDeleteOk(transactionId)} text={'да'} />
            <Button type="button" onClick={onDeleteCancel} text={'нет'} />
          </div>{' '}
        </Modal>
      )}

      <Media
        query="(min-width: 768px)"
        render={() => (
          <div className={s.tableWrapper}>
            <table className={s.transactionTable}>
              <thead className={s.thead}>
                <tr>
                  <th className={`${s.name} ${s.date}`}>Дата</th>
                  <th className={`${s.name} ${s.description}`}>Описание</th>
                  <th className={`${s.name} ${s.category}`}>Категория</th>
                  <th className={`${s.name} ${s.sum}`}>Сумма</th>
                  <th className={`${s.name} ${s.icon}`}></th>
                </tr>
              </thead>

              <tbody className={s.tbody}>
                {filteredTransactions?.length > 0 &&
                  filteredTransactions.map(({ date, subCategory, category, sum, id, type }) => (
                    <tr key={id} className={s.tableRow}>
                      <td className={s.date}>{date}</td>
                      <td className={s.description}>{subCategory}</td>
                      <td className={s.category}>{category}</td>
                      <td className={s.sum}>
                        {type === 'cost' ? (
                          <span className={s.cost}>
                            - {sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} UAH
                          </span>
                        ) : (
                          <span className={s.incomes}>
                            {sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} UAH
                          </span>
                        )}
                      </td>
                      <td className={s.icon}>
                        <button
                          type="button"
                          className={s.button}
                          onClick={() => handleDeleteClick(id)}
                        >
                          <svg width="18" height="18" className={s.basket}>
                            <use href={`${spriteGlobal}#icon-delete`}></use>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      />
    </>
  );
}
