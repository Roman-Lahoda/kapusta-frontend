import React, { forwardRef, useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarPicker.module.scss';
import sprite from '../../images/transactionIcons/sprite.svg';
// import calendar from '../../images/transactionIcons/calendar.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';

// const CalendarPicker = ({ date, changeDate }) => {
//   const selectDate = date => {
//     changeDate(date);
//   };

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className={s.datepickerButton} onClick={onClick} ref={ref}>
    <div className={s.wrapper}>
      <svg width="20" height="20" className={s.icon}>
        <use href={`${sprite}#icon-calendar`}></use>
      </svg>
      {value}
    </div>
  </button>
));

export default function CalendarPicker({ startDate, closeHandler, date, changeDate }) {
  const selectDate = date => {
    changeDate(date);
  };

  const ref = useRef();
  const [selectedDay, setSelectedDay] = useState();
  const [close, setClose] = useState(false);
  useOnClickOutside(ref, () => closeHandler(selectedDay));
  // useEffect(() => {
  //   setSelectedDay(startDate);
  //   if (close) {
  //     closeHandler(selectedDay);
  //   }
  //   /*eslint-disable-next-line*/
  // }, [close, startDate]);

  // const formatDate = date => {
  //   const splittedDate = date.split('.');
  //   return new Date(Number(splittedDate[2]), Number(splittedDate[1] - 1), Number(splittedDate[0]));
  // };

  const handleDayClick = day => {
    setSelectedDay(day);
    setClose(true);
  };

  const modifiers = {
    today: new Date(),
    selectedDay: selectedDay,
  };
  const modifiersStyles = {
    today: {
      color: '#ff751d',
      backgroundColor: 'white',
    },
    selectedDay: {
      color: 'white',
      backgroundColor: '#ff751d',
    },
  };

  return (
    <>
      <div ref={ref}>
        <DatePicker
          locale={ru}
          selectedDays={[selectedDay, modifiers.today]}
          onDayClick={handleDayClick}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          selected={date}
          onChange={date => selectDate(date)}
          dateFormat="dd.MM.yyyy"
          todayButton="Сегодня"
          maxDate={new Date()}
          customInput={<CustomInput />}
          fixedHeight
          required
        />
      </div>
    </>
  );
}

// export default CalendarPicker;

// // import { useDispatch, useSelector } from 'react-redux';
// // import { transactionsActions } from '../../redux/transaction';
// // import { getSelectedDate } from '../../redux/transaction/transactions-selectors';
// // import { useState } from 'react';

// export const DatePicker = () => {
//   // const dispatch = useDispatch();
//   //   const selectedDate = useSelector(getSelectedDate);
//   //   const [date, setDate] = useState(
//   //   new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day),
//   //     );
//   const [date, setDate] = useState('');
//   const handleChange = data => {
//     // dispatch(
//     //   transactionsActions.selectedDate({
//     //     day: data.getDate(),
//     //     month: data.getMonth() + 1,
//     //     year: data.getFullYear(),
//     //   }),
//     // );
//     setDate(data);
//   };
//   return (
//     <div className={s.wrapper}>
//       <img src={calendar} className={s.imgCalendar} alt="calendar" />
//       <DatePicker
//         id="date"
//         // className={s.date}
//         name="date"
//         dateFormat="dd.MM.yyyy"
//         fixedHeight
//         selected={date}
//         onChange={handleChange}
//         maxDate={new Date()}
//       />
//     </div>
//   );
// };
