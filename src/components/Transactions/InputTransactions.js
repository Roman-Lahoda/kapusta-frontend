import 'react-datepicker/dist/react-datepicker.css';
// import './DatePicker.module.scss';

import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchAddTransaction } from '../../redux/transaction/transactions-operations';
// import { getSelectedDate } from '../../redux/transaction/transactions-selectors';
// import { transactionsActions } from '../../redux/transaction';

// import calendarIcon from '../../images/transactionIcons/calendar.svg';
// import DatePicker from 'react-datepicker';
import { v4 as uuidv4 } from 'uuid';

import CalendarPicker from './CalendarPicker';
import MyDatePicker from './MyDatePicker/MyDatePicker';
import ss from './MyDatePicker/MyDatePicker.scss';
import { buttonGroupStyles } from '../../styles/buttonGroupStyles';
import calculatorIcon from '../../images/transactionIcons/calculator.svg';
import Calculator from './Calculator/Calculator';
import expenseCategories from './expenseCategories.json';
import s from './Transactions.module.scss';
import { selectStyles } from '../../styles/selectStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';
// import getTransactionsError from '../../reduxV2/transaction/transaction-selector';

const useStyles = makeStyles({
  categoryListItem: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '12px',
    // lineHeight: 1.16,
    letterSpacing: '0.02em',
    color: '#c7ccdc',
  },
});

function Transaction({ categories, isIncome, placeholder, value }) {
  const dispatch = useDispatch();
  // const selectedDate = useSelector(getSelectedDate);
  // const [date, setDate] = useState(
  //   new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day),
  // );
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [calc, setCalc] = useState(false);
  const [sum, setSum] = useState('');
  const classes = useStyles();

  // console.log(Date.parse(date));
  const dayCreate = date.getDate();
  const monthCreate = date.getMonth() + 1;
  const yearCreate = date.getFullYear();
  // console.log(dayCreate);
  // const monthCreate = date.getMonth() + 1;
  // const yearCreat = date.getFullYear();

  const changeDate = date => {
    setDate(date);
  };
  // console.log(typeof date);
  // const [selectedDay, setSelectedDay] = useState();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const isTablet = useMediaQuery(theme.breakpoints.only('tablet'));
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  // const stringifyDate = JSON.parse(JSON.stringify(date));
  const newTransaction = {
    category: category,
    // date: stringifyDate,
    sum: Number(sum),
    description: description,
  };

  const onClick = () => {
    const addTransaction = {
      ...newTransaction,
      idT: uuidv4(),
      transactionType: value,
      dayCreate,
      monthCreate,
      yearCreate,
    };
    // console.log(value);
    dispatch(transactionOperation.addTransaction(addTransaction));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    // dispatch(
    //   fetchAddTransaction({
    //     year,
    //     month,
    //     day,
    //     description,
    //     category,
    //     sum,
    //     isIncome,
    //   }),
    // );

    reset();
  };

  // const handleSubmit = useCallback(
  //   e => {
  //     e.preventDefault();
  //     if (!description || !date || !category || !sum) {
  //       dispatch(getTransactionsError.errorMessage('Все поля обязательны для заполнения'));
  //       return;
  //     }
  //     dispatch(transactionOperation.addTransaction(addTransaction));

  //     reset();
  //   },
  //   [dispatch, description, category, date, sum],
  // );

  const reset = () => {
    setDate(new Date());
    setDescription('');
    setCategory('');
    setSum('');
  };

  // const handleChangeDate = data => {
  //   dispatch(
  //     transactionsActions.selectedDate({
  //       day: data.getDate(),
  //       month: data.getMonth() + 1,
  //       year: data.getFullYear(),
  //     }),
  //   );
  //   setDate(data);
  // };
  const closeCalc = result => {
    setSum(result);

    setCalc(false);
  };
  const handleCalcClick = () => {
    setCalc(true);
  };

  // useEffect(() => {
  //   setValue('categories', placeholderCategories.data);
  // }, [expenseCategories, setValue]);

  // useEffect(() => {
  //   dateFinder(setDate);
  //   setValue('date', selectedDate);
  // }, [setDate, setValue, dateFinder]);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapInputs}>
        {/* <div className={s.box}>
          <CalendarPicker date={date} changeDate={changeDate} />
        </div> */}
        <div className={s.box}>
          <MyDatePicker selectedDate={date} handleChange={date => setDate(date)} />
        </div>
        <input
          className={s.desc}
          // className={s.description}
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
        />

        <FormControl className={s.formControl}>
          <InputLabel sx={{ fontSize: '12px' }} className={s.InputSelect}>
            Категория
          </InputLabel>
          <Select
            sx={
              isMobile
                ? {
                    width: '280px',
                    marginBottom: '30px',
                    borderRadius: '0 0 16px 0',
                    border: '2px solid #FFF',
                    fontSize: '12px',
                  }
                : isTablet
                ? {
                    width: '168px',
                    marginBottom: 0,
                    borderRight: 'none',
                    borderRadius: '0',
                    fontSize: '12px',
                  }
                : selectStyles
            }
            id="select"
            name="category"
            value={category}
            onChange={handleChange}
            required
            className={s.select}
          >
            {categories.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                id={option.value}
                style={{ fontSize: '12px' }}
                className={classes.categoryListItem}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <label className={s.sumWrap}>
          <input
            className={s.sum}
            type="number"
            name="sum"
            value={sum}
            onChange={handleChange}
            placeholder="0.00 грн"
            min="0"
            pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
            required
            autoComplete="off"
          />
          <img
            onClick={handleCalcClick}
            className={s.iconCalc}
            src={calculatorIcon}
            alt="калькулятор"
          />
          {calc && <Calculator onCloseCalculator={closeCalc} />}
        </label>
      </div>
      <ButtonGroup color="secondary" variant="outlined" sx={buttonGroupStyles}>
        <div className={s.formButton}>
          <button type="submit" onClick={onClick} className={s.button}>
            Ввод
          </button>

          <button type="button" onClick={reset} className={s.button}>
            Очистить
          </button>
        </div>
      </ButtonGroup>
    </form>
  );
}

Transaction.defaultProps = {
  // isIncome: false,
  categories: expenseCategories,
  placeholder: 'Описание расхода',
  selectLabel: 'Категория товара',
};

export default Transaction;
