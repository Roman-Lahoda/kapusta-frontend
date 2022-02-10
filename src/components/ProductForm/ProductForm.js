import { useState } from 'react';
// import Select from 'react-select';
// import options from './selectData.json';
import { Notification } from 'react-pnotify';

import DescriptionInput from '../DescriptionInput';
import DropList from '../DropList';
import Calculator from '../Calculator';

import Button from '../Button/Button';

import s from './ProductForm.module.scss';

function ProductForm({ onSubmit, transactionType }) {
  const [product, setProduct] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [sum, setSum] = useState('');
  const [valueCategoryInput, setValueCategoryInput] = useState('Категория товара');

  const [productDirty, setProductDirty] = useState(false);
  const [sumDirty, setSumDirty] = useState(false);

  const [productError, setProductError] = useState(null);
  const [sumError, setSumError] = useState(null);

  const [submitError, setSubmitError] = useState(null);

  const { category, title, description } = transactionType;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setProduct(value);
        break;

      case 'sum':
        setSum(value.replace(/\s/g, ''));
        break;

      default:
        return;
    }
  };

  const handlecategory = data => {
    const { value, label } = data;
    setCategoryValue(value);
    setValueCategoryInput(label);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (product === '' || categoryValue === '' || sum === '') {
      return setSubmitError('Ошибка!');
    }

    const obg = {
      product: product,
      categoryValue: categoryValue,
      sum: String(Number(sum).toFixed(2)),
    };
    onSubmit(obg);

    reset();
  };

  const cleanForm = () => {
    reset();
  };

  function reset() {
    setProduct('');
    setCategoryValue('');
    setSum('');
    setValueCategoryInput('Категория товара');
  }

  const blurChange = e => {
    const { name, value } = e.currentTarget;

    if (value === '') {
      switch (name) {
        case 'name':
          setProductDirty(true);
          setProductError(null);
          break;

        case 'sum':
          setSumDirty(true);
          setSumError(null);
          break;

        default:
          return;
      }
    } else {
      setProductDirty(false);
      setSumDirty(false);
    }
  };

  const validate = () => {
    const reProduct = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const reSum = /\d+(\.\d{2})?/;

    if (product === '') {
      setProductError(null);
    } else if (!reProduct.test(product.toLowerCase())) {
      setProductError('Некорректные данные');
    } else {
      setProductError(null);
    }

    if (sum === '') {
      setSumError(null);
    } else if (!reSum.test(Number(sum))) {
      setSumError('Некорректные данные');
    } else {
      setSumError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form} onChange={validate}>
      {submitError && (
        <Notification
          type="error"
          title="Ошибка!"
          text="Все поля должны быть заполнены!"
          delay={2500}
          shadow={true}
          hide={true}
          nonblock={false}
          desktop={false}
        />
      )}

      <div className={s.container}>
        <div className={s.position}>
          {productDirty && <span className={s.dirtyText}>*поле обязательное</span>}
          {/* --------------------СТАЛО----------------------- */}
          <DescriptionInput
            descriptionTitle={description}
            value={product}
            onChange={handleChange}
            onBlur={blurChange}
          />

          {/* --------------------БЫЛО----------------------- */}
          {/* <input
          type="text"
          name="name"
          value={title}
          className={s.nameInput}
          placeholder="Описание товара"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Название может содержать только символы, апостроф, тире и пробел."
          autoComplete="off"
          required
          onChange={handleChange}
          onBlur={blurChange}
        /> */}

          {productError && <span className={s.errorText}>{productError}</span>}
        </div>

        <div className={s.position}>
          {/* --------------------СТАЛО----------------------- */}
          <DropList
            categories={category}
            categoryTitle={title}
            data={categoryValue}
            value={valueCategoryInput}
            onChange={handlecategory}
          />

          {/* --------------------БЫЛО----------------------- */}
          {/* <Select
          name="category"
          value={category}
          options={options}
          noOptionsMessage="Категория товара"
          placeholder="Категория товара"
          onChange={setCategoryValue}
          required
          className={s.categoryInput}
        /> */}
        </div>

        <div className={s.position}>
          {sumDirty && <span className={s.dirtyText}>*поле обязательное </span>}

          {/* --------------------СТАЛО----------------------- */}
          <Calculator value={sum} onChange={handleChange} onBlur={blurChange} />

          {/* --------------------БЫЛО----------------------- */}
          {/* <div className={s.fieldPosition}>
          <input
            type="text"
            name="sum"
            value={sum}
            className={s.sumInput}
            placeholder="00.00 UAH"
            autoComplete="off"
            required
            onChange={handleChange}
            onBlur={blurChange}
          />
          <svg width="20" height="20">
            <use href={`${sprite}#icon-calculator`}></use>
          </svg>
        </div> */}

          {sumError && <span className={s.errorText}>{sumError}</span>}
        </div>
      </div>

      {/* --------------------СТАЛО----------------------- */}
      <ul className={s.list}>
        <li className={s.item}>
          <Button type="submit" text={'Ввод'} className={s.enterButton} />
        </li>
        <li>
          <Button type="button" text={'Очистить'} className={s.clearButton} onClick={cleanForm} />
        </li>
      </ul>

      {/* --------------------БЫЛО----------------------- */}
      {/* <button type="submit" className={s.button}>
        ВВОД
      </button>

      <button type="button" className={s.button} onClick={cleanForm}>
        ОЧИСТИТЬ
      </button> */}
    </form>
  );
}

export default ProductForm;
