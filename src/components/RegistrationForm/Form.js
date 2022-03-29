import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './Form.module.scss';
import authOperation from '../../reduxV2/auth/auth-operation';
import images from '../../images/google.png';

import '@pnotify/core/dist/BrightTheme.css';
import { alert as alertPnotify, defaultModules, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(true);

  const validateEmail = value => {
    const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return re.test(String(value).trim().toLowerCase());
  };
  const validatePassword = value => {
    const re = /^[A-Za-z0-9][^\s]{7,15}$/;
    return re.test(String(value).trim().toLowerCase());
  };
  const loginUser = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return setEmailCorrect(false);
      // return alert('Невалидная почта');
      // return error({
      //   text: 'Невалидная почта',
      // });
    } else {
      setEmailCorrect(true);
    }
    if (!validatePassword(password)) {
      return setPasswordCorrect(false);
      // return alert(
      //   'Пароль должен состоять только с латинских букв или цифр,не содержать пробелы и быть длинной от 8 до 16 символов',
      // );
    } else {
      setPasswordCorrect(true);
    }
    dispatch(authOperation.login({ email, password }));
    //TODO
  };

  const signupUser = async () => {
    if (!validateEmail(email)) {
      return setEmailCorrect(false);

      // return alert('Невалидная почта');
      //   return error({
      //     text: 'Невалидная почта',
      //   });
    } else {
      setEmailCorrect(true);
    }
    if (!validatePassword(password)) {
      return setPasswordCorrect(false);
      // return alert(
      //   'Пароль должен состоять только с латинских букв или цифр,не содержать пробелы и быть длинной от 8 до 16 символов',
      // );
    } else {
      setPasswordCorrect(true);
    }
    dispatch(authOperation.signup({ email, password }));
    //TODO
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
        <a href="http://localhost:3000/auth/google" className={s.g_link} title="Google Account">
          <div className={s.g_btn}>
            <img src={images} alt="" className={s.g_svg} width="17" height="18" />
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
          <p className={emailCorrect ? `${s.hidden}` : `${s.showMessage}`}>Невалидная почта</p>
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
          <p className={passwordCorrect ? `${s.hidden}` : `${s.showMessage}`}>
            Пароль должен состоять только с латинских букв или цифр,не содержать пробелы и быть
            длинной от 8 до 16 символов
          </p>
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
      {/* <div className={s.btn_form}>
        <button type="submit" className={s.btn_login} onClick={loginUser}>
          ВОЙТИ
        </button>
        <button type="button" className={s.btn_reg} onClick={signupUser}>
          РЕГИСТРАЦИЯ
        </button>
      </div> */}
    </div>
  );
}
