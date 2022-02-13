import s from './BalanceForm.module.scss';
import { useState, useEffect } from 'react';
import { ModalBalance } from '../ModalBalance/ModalBalance';
import authOperation from '../../reduxV2/auth/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../reduxV2/auth/auth-selector';

export function BalanceForm() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  const isLoading = useSelector(authSelectors.getIsLoading);

  const [inputValue, setInputValue] = useState(user.balance);
  const [showModal, setShowModal] = useState(false);
  // const[isActive, setIsActive] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBalanceChange = e => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    dispatch(authOperation.updateUser({ balance: inputValue }));
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="balance" className={s.label}>
          Баланс:{' '}
        </label>
        <div className={s.form_field}>
          <input
            type="text"
            name="balance"
            className={s.input}
            value={inputValue}
            onChange={handleBalanceChange}
          ></input>
          <span className={s.input_text}>UAH</span>
        </div>
        <button type="submit" className={s.button}>
          Подтвердить
        </button>
      </form>
      {showModal && <ModalBalance onClose={toggleModal}></ModalBalance>}
    </>
  );
}
