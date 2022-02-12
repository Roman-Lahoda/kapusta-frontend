import s from './Calendar.module.scss';

import CalendarPicker from './DayPicker/DayPicker';
import СalendarIcon from './СalendarIcon/СalendarIcon';

const Calendar = ({ date, handleCalendarClick, closePicker, picker, align }) => {
  return (
    <div className={s.dateForm} onClick={handleCalendarClick}>
      <div className={s.calendarOverlay}>
        <СalendarIcon />
        {picker && <CalendarPicker closeHandler={closePicker} startDate={date} align={align} />}
      </div>
      <p>{date}</p>
    </div>
  );
};

export default Calendar;

// import React, { forwardRef } from 'react';
// import DatePicker from 'react-datepicker';
// import ru from 'date-fns/locale/ru';
// import 'react-datepicker/dist/react-datepicker.css';
// import s from './Calendar.module.scss';
// import sprite from '../../images/sprite.svg';

// const CalendarPicker = ({ date, changeDate }) => {
//   const selectDate = date => {
//     changeDate(date);
//   };

//   const CustomInput = forwardRef(({ value, onClick }, ref) => (
//     <button className={s.datepickerButton} onClick={onClick} ref={ref}>
//       <div className={s.wrapper}>
//         <svg width="20" height="20" className={s.icon}>
//           <use href={`${sprite}#icon-calendar`}></use>
//         </svg>
//         {value}
//       </div>
//     </button>
//   ));

//   return (
//     <>
//       <div>
//         <DatePicker
//           locale={ru}
//           selected={date}
//           onChange={date => selectDate(date)}
//           dateFormat="dd.MM.yyyy"
//           todayButton="Сегодня"
//           maxDate={new Date()}
//           customInput={<CustomInput />}
//           fixedHeight
//         />
//       </div>
//     </>
//   );
// };

// export default CalendarPicker;
