import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './Form.module.scss';
import authOperation from '../../reduxV2/auth/auth-operation';
import images from '../../images/google.png';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = value => {
    const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return re.test(String(value).trim().toLowerCase());
  };
  const validatePassword = value => {
    const re = /^[A-Za-z0-9][^\s]{7,16}/;
    return re.test(String(value).trim().toLowerCase());
  };
  const loginUser = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return alert('Невалидная почта');
    }
    if (!validatePassword(password)) {
      return alert(
        'Пароль должен состоять только с латинских букв или цифр,не содержать пробелы и быть длинной от 8 до 16 символов',
      );
    }
    dispatch(authOperation.login({ email, password }));
  };

  const signupUser = async () => {
    if (!validateEmail(email)) {
      return alert('Невалидная почта');
    }
    if (!validatePassword(password)) {
      return alert(
        'Пароль должен состоять только с латинских букв или цифр,не содержать пробелы и быть длинной от 8 до 16 символов',
      );
    }
    dispatch(authOperation.signup({ email, password }));
  };

  return (
    <div className={s.container}>
      <form
        // onSubmit={handleSubmit}
        className={s.container_form}
      >
        <h1 className={s.title_gb}>
          Вы можете авторизоваться с помощью <br /> Google Account:
        </h1>
        <a
          href="https://capusta3.herokuapp.com/auth/google"
          className={s.g_link}
          title="Google Account"
        >
          <div className={s.g_btn}>
            <img src={images} alt="" className="g_svg" width="17" height="18" />
            Google
          </div>
        </a>
      </form>
      <form className={s.container_form}>
        <h1 className={s.title_registe}>
          Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
        </h1>
        <div className={s.form_row}>
          <label htmlFor="email">Электронная почта:</label>
          <input
            type="mail"
            name="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className={s.form_row}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={s.btn_form}>
          <button type="submit" onClick={loginUser}>
            ВОЙТИ
          </button>
          <button type="button" className={s.btn_reg} onClick={signupUser}>
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </form>
      <div className={s.btn_form}>
        <button type="submit" className={s.btn_login} onClick={loginUser}>
          ВОЙТИ
        </button>
        <button type="button" className={s.btn_reg} onClick={signupUser}>
          РЕГИСТРАЦИЯ
        </button>
      </div>
    </div>
  );
}
