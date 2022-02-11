import s from './DescriptionInput.module.scss';

function DescriptionInput({ descriptionTitle , value, onChange, onBlur}) {
  return (
    // {/* --------------------СТАЛО----------------------- */}
    <input
      id="description"
      type="text"
      name="name"
      value={value}
      className={s.input}
      placeholder={descriptionTitle}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Название может содержать только символы, апостроф, тире и пробел."
      autoComplete="off"
      required
      onChange={onChange}
      onBlur={onBlur}
      />


    // {/* --------------------БЫЛО----------------------- */}
    // <input
    //   id="description"
    //   className={s.input}
    //   type="text"
    //   placeholder={descriptionTitle}
    //   required
    //   autoComplete="off"
    // />
  );
}

export default DescriptionInput;
