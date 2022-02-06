import { useState } from "react";
import Select from 'react-select';
import options from './selectData.json';
import { Notification } from 'react-pnotify';
import sprite from './calculator-sprite.svg'
// import s from "./ProductForm.module.scss";


function ProductForm({ onSubmit, s}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [sum, setSum] = useState("");

  const [titleDirty, setTitleDirty] = useState(false);
  const [sumDirty, setSumDirty] = useState(false);

  const [titleError, setTitleError] = useState(null);
  const [sumError, setSumError] = useState(null);

  const [submitError, setSubmitError] = useState(null);
 

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setTitle(value);
        break;

      case "sum":
        setSum(value.replace(/\s/g, ''));
        break;

      default:
        return;
    }

  };


  const handleSubmit = (evt) => {
    evt.preventDefault();

    if ((title === '') || (category === null) || (sum === '')) {
      return setSubmitError('Ошибка!')
    } 

    const obg = {
        title: title,
        category: category.value,
        sum: String(Number(sum).toFixed(2)),
      };
    onSubmit(obg);
      
    reset();
  };

  const cleanForm = () => {
    reset();
  }

  function reset() {
    setTitle("");
    setCategory(null);
    setSum("");
  }

  const blurChange = (e) => {
    const { name, value } = e.currentTarget;

    if (value === '') {
      switch (name) {
        case "name":
          setTitleDirty(true);
          setTitleError(null)
          break;

        case "sum":
          setSumDirty(true);
          setSumError(null)
          break;

        default:
          return;
      }
    } else {
      setTitleDirty(false);
      setSumDirty(false);
    } 

  };

  const validate = () => {
    const reTitle = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
    const reSum = /\d+(\.\d{2})?/

    if (title === ""){
      setTitleError(null)
    } else if (!reTitle.test(title.toLowerCase())) {
      setTitleError('Некорректные данные')
    } else {
      setTitleError(null)
    }
 
    if (sum === ""){
      setSumError(null)
    } else if (!reSum.test(Number(sum))) {
      setSumError('Некорректные данные')
    } else {
      setSumError(null)
    }

  };


  return (
    <form onSubmit={handleSubmit} className={s.form} onChange={validate}>

      {submitError && <Notification
        type='error'
        title='Ошибка!'
        text='Все поля должны быть заполнены!'
        delay={2500}
        shadow={true}
        hide={true}
        nonblock={false}
        desktop={false}
      />}

      <div>
        {titleDirty && <span style={{color:'red'}}>*  Это поле обязательное для заполнения</span>}
        <input
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
        /> 

        {titleError && <span style={{ color: 'red' }}>{titleError}</span>}
      </div>

      <div>
        <Select
          name="category"
          value={category}
          options={options}
          noOptionsMessage="Категория товара"
          placeholder="Категория товара"
          onChange={setCategory}
          required
          className={ s.categoryInput }
        />
      </div>

      <div>
        {sumDirty && <span style={{color:'red'}}>*  Это поле обязательное для заполнения</span>}
        <div className={s.fieldPosition}> 
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
       </div>

        {sumError && <span style={{ color: 'red' }}>{sumError}</span>}
      </div>
      

      <button type="submit" className={s.button}>ВВОД</button>

      <button type="button" className={s.button} onClick={cleanForm}>ОЧИСТИТЬ</button>
    </form>
  );
}

export default ProductForm;
