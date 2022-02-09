import s from './DescriptionInput.module.scss';

function DescriptionInput({ descriptionTitle }) {
  return (
    <input
      id="description"
      className={s.input}
      type="text"
      placeholder={descriptionTitle}
      required
      autoComplete="off"
    />
  );
}

export default DescriptionInput;
