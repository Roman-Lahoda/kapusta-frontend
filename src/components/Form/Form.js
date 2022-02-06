import React from 'react';
import { Formik } from 'formik';

import './Form.scss';

const initialValues = {
  email: '',
  password: '',
};

const validate = values => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!regex.test(values.email)) {
    errors.email = 'Invalid Email';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password too short';
  }

  return errors;
};

const submitForm = values => {
  console.log(values);
};

const Form = () => {
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={submitForm}>
      {formik => {
        const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } =
          formik;
        return (
          <div className="container">
            <form onSubmit={handleSubmit} className="container_form">
              <h1 className="title_gb">Вы можете авторизоваться с помощью Google Account:</h1>
              <button type="buttton" className="gb">
                GOOGLE
              </button>
              {/* <a
                className="google"
                href="http://localhost:3000/auth/google-redirect"
                title="Google Account"
              ></a> */}
            </form>

            <form onSubmit={handleSubmit} className="container_form">
              <h1 className="title_register">
                Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
              </h1>
              <div className="form-row">
                <label htmlFor="email">Электронная почта:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'input-error' : null}
                />
                {errors.email && touched.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-row">
                <label htmlFor="password">Пароль:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password ? 'input-error' : null}
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? 'disabled-btn' : ''}
                disabled={!(dirty && isValid)}
              >
                ВОЙТИ
              </button>
              <button type="button">РЕГИСТРАЦИЯ</button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
