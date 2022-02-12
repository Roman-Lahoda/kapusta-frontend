import sprite from '../../images/sprite.svg';
import s from './ExpensesAndIncomes.module.scss';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState, useRef } from 'react';
import { parseISO, lightFormat } from 'date-fns';
import {
  addTransaction,
  deleteTransaction,
  fetchMonthlyData,
  getByTypeFromLastHalfYear,
} from '../../api/transactionsAPI';
import Summary from 'components/Summary';
import TransactionHistoryList from 'components/TransactionHistoryList';
import TransactionInput from 'components/TransactionInput';
import ProductForm from 'components/ProductForm';
import Calendar from 'components/Calendar';

// import { authOperations, authSelectors } from '../../redux/auth';
import * as authOperations from '../../services/fetchApi';
import * as authSelectors from '../../redux/auth/auth-selectors';

import { useDispatch, useSelector } from 'react-redux';

export default function ExpensesAndIncomes({
  transactionType,
  stateDashboardButton,
  changeStateDashboardButton,
}) {
  // <<<<<<< HEAD
  const dispatch = useDispatch();
  const { type, category } = transactionType;
  const token = useSelector(authSelectors.getCurrentToken);
  // =======

  const dataProcessingForm = data => {
    console.log(data);
  };
  // const dispatch = useDispatch();
  // const { type, category } = transactionType;
  // // const token = useSelector(authSelectors.getToken);
  // >>>>>>> dev

  const initialDate = new Date();
  const [date, setDate] = useState(initialDate);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [yearTransactions, setYearTransactions] = useState([]);
  const [monthTransactions, setMonthTransactions] = useState([]);
  const [dayTransactions, setDayTransactions] = useState([]);
  const [categoryValue, setCategoryValue] = useState(null);
  const [submit, setSubmit] = useState(false);

  const formElement = useRef(null);
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    if (submit && token) {
      dispatch(authOperations.fetchLogin());
      setSubmit(false);
    }
  }, [dispatch, submit, token]);

  useEffect(() => {
    if (!type || !year || !month || !token) {
      return;
    }
    async function fetchData() {
      setReqStatus('pending');
      const data = await fetchMonthlyData(type, year, month);
      setMonthTransactions(data);
      setReqStatus('resolved');
    }
    fetchData();
  }, [month, token, type, year]);

  useEffect(() => {
    if (!type || !token) {
      return;
    }
    async function fetchLastHalfYearData() {
      const { lastMonthsArray } = await getByTypeFromLastHalfYear(type);
      setYearTransactions(lastMonthsArray);
    }
    fetchLastHalfYearData();
  }, [token, type]);

  useEffect(() => {
    if (!monthTransactions || monthTransactions === [] || !token) {
      return;
    }
    const filerTransactions = month =>
      month.filter(
        trans =>
          lightFormat(parseISO(`${trans.date}`), 'dd.MM.yyyy') === lightFormat(date, 'dd.MM.yyyy'),
      );
    setDayTransactions(filerTransactions(monthTransactions));
  }, [date, monthTransactions, token]);

  useEffect(() => {
    if (type === 'расход') {
      return;
    }
    setCategoryValue(null);
    formElement.current.reset();
  }, [type]);

  const handleSubmit = async e => {
    e.preventDefault();

    const { description, category, amount } = e.target;
    if (!category.value) {
      Notify.failure('Выберите категорию', {
        timeout: 3000,
        clickToClose: true,
        pauseOnHover: true,
      });
      return;
    }

    const stringifyDate = JSON.parse(JSON.stringify(date));
    const newTransaction = {
      type,
      category: category.value,
      date: stringifyDate,
      amount: Number(amount.value),
      description: description.value,
    };

    await addTransaction(newTransaction);
    e.target.reset();
    setCategoryValue(null);

    const data = await fetchMonthlyData(type, year, month);
    setMonthTransactions(data);
    setSubmit(true);
  };

  const clearForm = e => {
    setDate(initialDate);
    e.target.form.reset();
    setCategoryValue(null);
  };

  const changeDate = date => {
    setDate(date);
  };

  const handleDelete = async id => {
    const filteredTransactions = dayTransactions.filter(el => el._id !== id);
    setDayTransactions(filteredTransactions);
    await deleteTransaction(`${id}`);
    setSubmit(true);
  };

  const hideDashboard = () => {
    changeStateDashboardButton(true);
  };

  const hideForm = () => {
    return stateDashboardButton === true && s.hideForm;
  };

  const hidePicker = () => {
    return stateDashboardButton === false && s.hidePicker;
  };

  return (
    <div className={s.wrapper}>
      {reqStatus === 'pending' && <Loader />}
      <div className={s.imgBack}>
        <div className={s.container}>
          <div className={`${s.flex} ${hidePicker()}`}>
            <div className={s.box}>
              <Calendar date={date} changeDate={changeDate} />
            </div>
          </div>
          {stateDashboardButton === false && (
            <button className={s.wrapperArrow} onClick={hideDashboard}>
              <svg width="18" height="12">
                <use href={`${sprite}#icon-arrowGoBack`}></use>
              </svg>
            </button>
          )}
          {/* <<<<<<< HEAD */}
          <form ref={formElement} className={`${s.form} ${hideForm()}`} onSubmit={handleSubmit}>
            <TransactionInput
              transactionType={transactionType}
              value={categoryValue}
              onChange={v => setCategoryValue(v)}
            />
            {/* ======= */}

            {/* --------------------СТАЛО----------------------- */}
            {/* <ProductForm onSubmit={dataProcessingForm} transactionType={transactionType} /> */}

            {/* --------------------БЫЛО----------------------- */}
            {/* <form className={`${s.form}`}>
            <TransactionInput transactionType={transactionType} />
// >>>>>>> dev
            <ul className={s.list}>
              <li className={s.item}>
                <Button type="submit" text={'Ввод'} className={s.enterButton} />
              </li>
              <li>
                <Button
                  type="button"
                  text={'Очистить'}
                  onClick={clearForm}
                  className={s.clearButton}
                />
              </li>
            </ul>*/}
          </form>
        </div>
      </div>
      <div
        className={`${s.report} ${stateDashboardButton === true ? s.showHistory : s.hideHistory}`}
      >
        <TransactionHistoryList
          handleDelete={handleDelete}
          data={dayTransactions}
          category={category}
          status={reqStatus}
          type={type}
        />
      </div>
      <div className={s.position}>
        <Summary report={yearTransactions} />
      </div>
    </div>
  );
}
