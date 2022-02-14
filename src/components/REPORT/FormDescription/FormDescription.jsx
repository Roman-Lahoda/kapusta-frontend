import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import s from './FormDescription.module.css';
import calculator from '../../../images/transactionIcons/calculator.svg';
import calendar from '../../../images/transactionIcons/calendar.svg';
import arrow from '../../../images/transactionIcons//arrow-back.svg';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUserBalance } from '../../redux/balance';
// import { addTransaction } from '../../redux/transactions/transactionsOperations';
// import { getCategories } from '../../redux/categories/categoriesSelectors';
import { useState, useRef, useEffect } from 'react';
import DropDownCategory from '../DropDownCategory/DropDownCategory';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
// import { getReportList } from '../../redux/report';
import ru from 'date-fns/locale/ru'; // the locale you want
registerLocale('ru', ru); // register it with the name you want

const FormSchema = Yup.object().shape({
  sum: Yup.number().min(1).positive().integer().required('Required'),
  name: Yup.string().required(),
  categories: Yup.string().required(),
});

export default function FormDescription({ typeForm, dateFinder }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const [open, setOpen] = useState(false);
  const [placeholderCategories, setPlaceholderCategories] = useState('');

  // const categoriesState = useSelector(getCategories);
  const ref = useRef();
  // const dispatch = useDispatch();

  // function updateReportList(type) {
  //   let reportType;
  //   type === true ? (reportType = 'i') : (reportType = 'o');
  //   dispatch(getReportList({ reportType: reportType, year: new Date().getFullYear() }));
  // }

  const onSubmit = async data => {
    const { date, name, sum } = data;
    const newData = {
      type: typeForm,
      category: placeholderCategories.id,
      date: moment(date).format('YYYY-MM-DD'),
      description: name,
      sum: +sum,
    };

    await dispatch(addTransaction(newData));

    updateReportList(typeForm);
    setPlaceholderCategories('');
    dispatch(getUserBalance());
    reset({
      name: '',
      categories: '',
      sum: '',
    });
  };
  useEffect(() => {
    const checkClickOutside = e => {
      if (open) {
        setOpen(false);
      }
    };
    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [open]);

  const changerPlaceholder = (data, id) => {
    setPlaceholderCategories({ data, id });
    setOpen(false);
  };

  // useEffect(() => {
  //   setValue('categories', placeholderCategories.data);
  // }, [placeholderCategories, setValue]);

  // useEffect(() => {
  //   dateFinder(selectedDate);
  //   setValue('date', selectedDate);
  // }, [selectedDate, setValue, dateFinder]);

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className={s.formStyles} ref={ref}>
        <div className={s.productInfo}>
          <div className={s.datePosition}>
            <DatePicker
              {...register('date')}
              locale="ru"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              className={s.inputProductDate}
            />
            <div className={s.calendarPos}>
              <img src={calendar} alt="Calendar" />
            </div>
          </div>
          <div className={s.productPosition}>
            <div>
              <input
                {...register('name')}
                className={s.inputProductName}
                placeholder={typeForm ? 'Описание дохода' : 'Описание товара'}
              />
              {errors.name && <p className={s.errors}>Required</p>}
            </div>
            <div className={s.DropDownPos}>
              <input
                autoComplete="off"
                {...register('categories')}
                className={s.inputСategoryName}
                placeholder={typeForm ? 'Категория дохода' : 'Категория товара'}
                onClick={() => setOpen(!open)}
                readOnly
              />
              {open ? (
                <div className={s.arrowPos}>
                  <img src={arrow} alt="arrow" />
                </div>
              ) : (
                <div className={s.arrowPosDown}>
                  <img src={arrow} alt="arrow" />
                </div>
              )}
              {placeholderCategories === '' && errors.categories && (
                <p className={s.errors}>Required</p>
              )}
              {open && (
                <DropDownCategory
                  changerDescription={changerPlaceholder}
                  categoriesList={categoriesState}
                  typeForm={typeForm}
                />
              )}
            </div>
            <div className={s.inputValueProductPostion}>
              <input
                {...register('sum')}
                type="sum"
                className={s.inputValueProduct}
                onFocus={e => (e.target.placeholder = '')}
                placeholder="0"
              />
              {errors.sum && <p className={s.errors}>Required</p>}
            </div>
            <div className={s.calculatorPos}>
              <img src={calculator} alt="Calculator" />
            </div>
          </div>
        </div>
        <div className={s.btnPosition}>
          <ButtonBlock
            firstButtonText="ввод"
            secondButtonText="очистить"
            secondButtonHandler={() => {
              setPlaceholderCategories('');
              reset({
                name: '',
                categories: '',
                sum: '',
              });
            }}
            firstButtonType="submit"
            secondButtonType="button"
          />
        </div>
      </form>
      <div className={s.formStyles}></div>
    </div>
  );
}

FormDescription.propTypes = {
  typeForm: PropTypes.bool,
  dateFinder: PropTypes.func,
};
