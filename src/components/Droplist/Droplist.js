import { useState, useRef, useEffect } from 'react';
import s from './Droplist.module.scss';

function Droplist({ categories, categoryTitle, data, value, onChange }) {
  const [open, setOpen] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   document.addEventListener('click', close);
  //   return () => document.removeEventListener('click', close);
  // }, []);

  // function close(e) {
  //   setOpen(e && e.target === ref.current);
  // }

  function handleChange(e) {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    } 
  }
  

  return (
    <>
       {/* --------------------СТАЛО----------------------- */}
      
      <div className={s.dropdown}>
        <div className={s.control} onClick={handleChange}>
          <p className={s.selectedValue}>
            {value}
          </p>

          <div className={`${s.arrow} ${open ? s.open : null}`}></div>
        </div> 
        
        <div className={`${s.options} ${open ? s.open : null}`}>
          {categories.map(category => (
            <div
              key={category.value}
              className={`${s.option} ${data === category ? s.selected : null}`}
              onClick={() => {
                  onChange({value: category.value, label:category.label});
                  setOpen(false);
                }}
            >
              {category.label}
            </div>
          ))}
        </div> 
      </div>




      {/* --------------------БЫЛО----------------------- */}
      {/* <input
        id="category"
        type="hidden"
        value={data ? data.value : ''}
        onChange={() => console.log('change')}
        required
      /> */}

      {/* <div className={s.dropdown} tabIndex="0">
        <div className={s.control} onClick={() => setOpen(prev => !prev)}>
          <div className={s.selectedValue} ref={ref} style={data && { color: '#52555F' }}>
            {data ? data.label : categoryTitle}
          </div>
          <div className={`${s.arrow} ${open ? s.open : null}`}></div>
        </div>
        <div className={`${s.options} ${open ? s.open : null}`}>
          {categories.map(category => (
            <div
              key={category.value}
              className={`${s.option} ${data === category ? s.selected : null}`}
              onClick={() => {
                onChange(category);
                setOpen(false);
              }}
            >
              {category.label}
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Droplist;
