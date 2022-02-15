import CalendarPicker from '../CalendarPicker/CalendarPicker';
import sprite from '../../images/transactionIcons/symbol-defs.svg';
import s from './CalendarForm.module.css';

export default function CalendarForm({ date, handleCalendarClick, closePicker, picker, align }) {
  return (
    <div onClick={handleCalendarClick} className={s.calendarWrapper}>
      <div className={s.calendarOverlay}>
        <svg width="25" height="18">
          <use href={`${sprite}#icon-calendar`}></use>
        </svg>
        {picker && <CalendarPicker closeHandler={closePicker} startDate={date} align={align} />}
      </div>
      <p>{date}</p>
    </div>
  );
}
