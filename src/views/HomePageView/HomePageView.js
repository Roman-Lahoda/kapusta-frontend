import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';

import s from './HomePageView.module.scss';

import imgText from 'images/Union.svg';

import Form from 'components/Form';

// import { loginGoogleSuccess } from 'redux/auth';
import { getLoader } from 'redux/transactions/transactions-selectors';
import Loader from 'components/Loader';

const HomePageView = ({ location }) => {
  const { token } = queryString.parse(location.search);
  const dispatch = useDispatch();
  const loader = useSelector(getLoader);

  useEffect(() => {
    if (token) {
      dispatch(loginGoogleSuccess(token));
    }
  }, [dispatch, token]);

  const [login, setLogin] = useState(true);
  const onRegisterClick = () => {
    setLogin(false);
  };

  const onLoginClick = () => {
    setLogin(true);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className={s.container}>
          <div className={s.firstSection}>
            <div className={s.bcgImage}></div>
            <div className={s.text}>
              <img className={s.imgText} src={imgText} alt="Kapusta" />
              <h1 className={s.fontText}>SMART FINANCE</h1>
            </div>
          </div>

          <div className={s.secondSection}>
            {login ? (
              <Form onClickRegister={onRegisterClick} />
            ) : (
              <Form onClickLogin={onLoginClick} />
            )}
            <div className={s.bcgImageBottom}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePageView;
