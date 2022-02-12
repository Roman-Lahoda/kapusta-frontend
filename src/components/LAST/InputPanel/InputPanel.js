import SelectCategory from '../SelectCategory/SelectCategory';

import s from './InputPanel.module.css';
import sumImg from '../../../images/calculator.svg';

export default function InputPanel({
  description,
  setDescription,
  setCategory,
  sum,
  setSum,
  categories,
}) {
  return (
    <form className={s.formPanel} id="formPanel">
      <input
        className={s.description}
        type="text"
        name="description"
        placeholder="Описание товара"
        value={description}
        onChange={e => setDescription(e.currentTarget.value)}
      />

      <SelectCategory categories={categories} onChange={e => setCategory(e.currentTarget.value)} />

      <div className={s.wrapperSum}>
        <input
          className={s.sum}
          // type="number"
          name="sum"
          placeholder="0.00"
          value={sum}
          onChange={e => setSum(e.currentTarget.value)}
        />
        <button type="button" className={s.sumButton}>
          <img src={sumImg} alt="sum" />
        </button>
      </div>
    </form>
  );
}
