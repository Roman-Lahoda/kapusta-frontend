// import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import s from './ReportTable.module.css';
import Report from './Report';
// import formatDate from 'utils/formatingDate';
import moment from 'moment';
// import { getLoading } from '../../redux/transactions/transactionsSelectors';
import SmallSpinner from '../Spinner/SmallSpinner';

function formatDate(date) {
  return moment(date).utc().format('DD.MM.YYYY');
}

function ReportTable({ transactions, handleDelete, type }) {
  // const isLoading = useSelector(getLoading);

  return (
    <>
      {/* {isLoading ? (        <LoadingSpiner />      ) : ( */}
      <div className={s.tableWrap}>
        <ul className={s.tableHead}>
          <li key={v4()} className={`${s.tableHeadName} ${s.tableDate}`}>
            Дата
          </li>
          <li key={v4()} className={`${s.tableHeadName} ${s.tableDesc}`}>
            Описание
          </li>
          <li key={v4()} className={`${s.tableHeadName} ${s.tableCat}`}>
            Категория
          </li>
          <li key={v4()} className={`${s.tableHeadName} ${s.tableSum}`}>
            Сумма
          </li>
          <li key={v4()} className={`${s.tableHeadName} ${s.tableDelete}`}></li>
        </ul>
        {isLoading ? (
          <SmallSpinner />
        ) : (
          <SimpleBar style={{ maxHeight: 360 }}>
            <div className={s.scrollWrap}>
              <ul>
                {transactions.map(i => (
                  <Report
                    type={type}
                    key={i._id}
                    id={i._id}
                    date={formatDate(i.date)}
                    category={i.category.name}
                    amount={i.amount}
                    description={i.description}
                    handleDelete={handleDelete}
                  />
                ))}
              </ul>
            </div>
          </SimpleBar>
        )}
      </div>
      {/* )} */}
    </>
  );
}

export default ReportTable;
