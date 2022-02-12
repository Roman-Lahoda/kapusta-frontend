import React from 'react';
import s from './SelectCategory.module.css';

export default function SelectCategory({ categories, onChange }) {
  return (
    <div>
      <select
        name="category"
        defaultValue="Категория товара"
        className={s.select}
        onChange={onChange}
      >
        <option disabled>Категория товара</option>
        {/* {categories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))} */}
      </select>
    </div>
  );
}
