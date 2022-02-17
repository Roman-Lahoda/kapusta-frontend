import React from 'react';
import DatePicker from 'react-datepicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.scss';
import ru from 'date-fns/locale/ru';

const MyDatePicker = ({ selectedDate, handleChange }) => (
  <div class="datepicker__container">
    <label class="datepicker__Icon" htmlFor="datepicker" />
    <DatePicker
      className="datepicker"
      id="datepicker"
      locale={ru}
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      name="date"
      // todayButton="Сегодня"
      fixedHeight
      withPortal
    />
  </div>
);

export default MyDatePicker;
