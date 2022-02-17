import { useState, useRef, useEffect } from 'react';
import s from './DropList.module.scss';

function DropList({ categories, categoryTitle, data, value, onChange }) {
  const [open, setOpen] = useState(false);

  function handleChange(e) {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <div className={s.dropdown}>
        <div className={s.control} onClick={handleChange}>
          <p className={s.selectedValue}>{value}</p>

          <div className={`${s.arrow} ${open ? s.open : null}`}></div>
        </div>

        <div className={`${s.options} ${open ? s.open : null}`}>
          {categories.map(category => (
            <div
              key={category.value}
              className={`${s.option} ${data === category ? s.selected : null}`}
              onClick={() => {
                onChange({ value: category.value, label: category.label });
                setOpen(false);
              }}
            >
              {category.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DropList;
