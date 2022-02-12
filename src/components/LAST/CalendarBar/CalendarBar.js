import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from '../ModalWindows/Modal/Modal';
import calendarImg from '../../../images/calendar.svg';
import s from './CalendarBar.module.css';

const CalendarBar = ({ value, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const date = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const fullDate = `${String(date).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;

  const toggleCalendar = () => {
    setShowCalendar(prevState => !prevState);
  };

  return (
    <div className={s.wrapper}>
      <button onClick={toggleCalendar} className={s.button}>
        <img src={calendarImg} alt="calendar" className={s.calendarImg} />
        <span className={s.calendarText}>{fullDate}</span>
      </button>

      {showCalendar && (
        <Modal onClose={toggleCalendar}>
          <Calendar className={s.calendar} onChange={onChange} value={value} />
        </Modal>
      )}
    </div>
  );
};

export default CalendarBar;
