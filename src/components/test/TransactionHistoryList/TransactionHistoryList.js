import s from './TransactionHistoryList.module.scss';
import sprite from '../../images/sprite.svg';
// import Modal from '../Modal/Modal';
// import useModal from '../Modal/useModal';
import Loader from '../Loader/Loader';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

function TransactionHistoryList({ data, type, category, handleDelete, status }) {
  // const { isShowingModal, toggle, handleBackdropClick } = useModal();

  const [id, setId] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (data && data !== []) {
      const preparedTransactions = JSON.parse(JSON.stringify(data));

      preparedTransactions.forEach(i =>
        category.forEach(el => {
          if (i.category === el.value) {
            i.category = el.label;
          }
        }),
      );
      setTransactions(preparedTransactions);
    }
  }, [category, data]);

  const getId = (e, id) => {
    const { localName } = e.target;

    if (localName === 'li' || localName === 'span') {
      return;
    }
    setId(id);
    // toggle();
  };

  // const deleteTransaction = id => {
  //   handleDelete(id);
  //   toggle();
  // };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p>Дата</p>
        <p>Описание</p>
        <p>Категория</p>
        <p>Сумма</p>
      </div>
      <div className={s.blok}>
        <ul className={s.list}>
          {status === 'pending' && <Loader />}

          {transactions &&
            status !== 'pending' &&
            transactions.map(({ _id, date, description, category, amount }) => (
              <li className={s.item} key={_id} onClick={e => getId(e, _id)}>
                <span className={s.itemDate}>{format(new Date(date), 'dd.MM.yyyy')}</span>
                <span className={s.itemDesc}>{description}</span>
                <span className={s.itemCategory}>{category}</span>
                {type === 'income' && <span className={s.itemSum}>{amount} грн.</span>}
                {type === 'expense' && <span className={s.itemSumRed}>- {amount} грн.</span>}
                <span className={s.itemBtn}>
                  <button className={s.itemBtn}>
                    <svg className={s.itemSvg} width="20" height="20">
                      <use href={`${sprite}#icon-delete`}></use>
                    </svg>
                  </button>
                </span>
              </li>
            ))}
          {/* {isShowingModal && (
          <Modal
            textContent={'Вы уверены?'}
            toLogout={() => deleteTransaction(id)}
            closeModal={toggle}
            handleBackdropClick={handleBackdropClick}
          />
        )} */}
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
          <li className={s.item}></li>
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistoryList;
