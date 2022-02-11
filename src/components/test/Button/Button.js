import React from 'react';
import s from './Button.module.scss';

function Button({ text, type, id, onClick, onSubmit, style, className }) {
  return (
    <button
      id={id}
      type={type}
      className={`${s.button} ${className}`}
      onClick={onClick}
      style={style}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default Button;
