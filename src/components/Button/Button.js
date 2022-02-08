import React from 'react';
import s from './Button.module.scss';

function Button({ text, type, onClick, onSubmit, active }) {
  return (
    <button type={type} className={s.button} onClick={onClick} style={active} onSubmit={onSubmit}>
      {text}
    </button>
  );
}

export default Button;
