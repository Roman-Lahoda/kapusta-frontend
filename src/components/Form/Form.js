import React from 'react';
// import { useState } from 'react';

// import { Formik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// import './Form.scss';
import s from './Form.module.scss';
// import gs from '../../images/google.svg';
import images from '../../images/google.png';

// import { authRegister, authLogin } from '../../redux/auth/authReg';
// import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  password: '',
};

// // функция, которая обрабатывает проверку формы
// const validate = values => {
//   let errors = {};
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//   if (!values.email) {
//     errors.email = 'Email обязателен!';
//   } else if (!regex.test(values.email)) {
//     errors.email = 'Email недействителен.';
//   }

//   if (!values.password) {
//     errors.password = 'Пароль обязателен!';
//   } else if (values.password.length < 6) {
//     errors.password =
//       'Пароль слишком короткий, необходимо ввести 6 или более символов.';
//   }

//   return errors;
// };

// схема проверки
const signinSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required!'),

  password: Yup.string()
    .required('Password is required!')
    .min(6, 'Password is too short - should be 6 chars minimum and more.'),
});

// функция обратного вызова, которая будет выполняться только при отсутствии ошибок
const submitForm = values => {
  console.log(values);
};

// const dispatch = useDispatch();

// // ф-я обратного вызова, при нажатии на кнопку регистрации
// const handlerRegisterSubmit = e => {
//   e.preventDefault();
//   const user = { initialValues };
//   dispatch(authRegister(user));
// };

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={submitForm}
      // onHandler={handlerRegisterSubmit}
      // dispatch={dispatch}
    >
      {formik => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className={s.container}>
            <Form className={s.container_form}>
              <h1 className={s.title_gb}>
                Вы можете авторизоваться с помощью <br /> Google Account:
              </h1>
              <a
                href=" https://capusta2.herokuapp.com/api/auth/google  "
                className={s.g_link}
                title="Google Account"
              >
                <div className={s.g_btn}>
                  {/* <svg className={s.g_svg} width="17" height="18">
                    <use href={`${gs}#google`}></use>
                  </svg> */}
                  <img src={images} alt="" className={s.g_svg} />
                  Google
                </div>
              </a>
            </Form>
            <Form className={s.container_form}>
              <h1 className={s.title_registe}>
                Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
              </h1>
              <div className={s.form_row}>
                <label htmlFor="email">Электронная почта:</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className={errors.email && touched.email ? 'input-error' : null}
                />
                <ErrorMessage name="email" component="span" className={s.error} />
              </div>

              <div className={s.form_row}>
                <label htmlFor="password">Пароль:</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  className={errors.password && touched.password ? 'input-error' : null}
                />
                <ErrorMessage name="password" component="span" className={s.error} />
              </div>
            </Form>
            <Form className={s.btn_form}>
              <button
                type="submit"
                className={!(dirty && isValid) ? s.disabled_btn : ''}
                disabled={!(dirty && isValid)}
              >
                ВОЙТИ
              </button>
              {/* повесить на кнопку onClick={} = handlerRegisterSubmit*/}
              <button type="button" className={s.btn_reg}>
                РЕГИСТРАЦИЯ
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;

// ---------------------
// import React from 'react';
// import { Formik } from 'formik';

// // import './Form.scss';
// import s from './Form.module.scss';
// // import gs from '../../images/google.svg';
// import images from '../../images/google.png';

// const initialValues = {
//   email: '',
//   password: '',
// };

// const validate = values => {
//   let errors = {};
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//   if (!values.email) {
//     errors.email = 'Email is required';
//   } else if (!regex.test(values.email)) {
//     errors.email = 'Invalid Email';
//   }

//   if (!values.password) {
//     errors.password = 'Password is required';
//   } else if (values.password.length < 6) {
//     errors.password = 'Password too short';
//   }

//   return errors;
// };

// const submitForm = values => {
//   console.log(values);
// };

// const Form = () => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validate={validate}
//       onSubmit={submitForm}
//     >
//       {formik => {
//         const {
//           values,
//           handleChange,
//           handleSubmit,
//           errors,
//           touched,
//           handleBlur,
//           isValid,
//           dirty,
//         } = formik;
//         return (
//           <div className={s.container}>
//             <form
//               onSubmit={handleSubmit.bind(this)}
//               className={s.container_form}
//             >
//               <h1 className={s.title_gb}>
//                 Вы можете авторизоваться с помощью <br /> Google Account:
//               </h1>
//               <a
//                 href=" https://capusta2.herokuapp.com/api/user  "
//                 className={s.g_link}
//                 title="Google Account"
//               >
//                 <div className={s.g_btn}>
//                   {/* <svg className={s.g_svg} width="17" height="18">
//                     <use href={`${gs}#google`}></use>
//                   </svg> */}
//                   <img
//                     src={images}
//                     alt=""
//                     className="g_svg"
//                     width="17"
//                     height="18"
//                   />
//                   Google
//                 </div>
//               </a>
//             </form>
//             <form onSubmit={handleSubmit} className={s.container_form}>
//               <h1 className={s.title_registe}>
//                 Или зайти с помощью e-mail и пароля, предварительно
//                 зарегистрировавшись:
//               </h1>
//               <div className={s.form_row}>
//                 <label htmlFor="email">Электронная почта:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="your@email.com"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.email && touched.email ? 'input_error' : null
//                   }
//                 />
//                 {errors.email && touched.email && (
//                   <span className="error">{errors.email}</span>
//                 )}
//               </div>

//               <div className={s.form_row}>
//                 <label htmlFor="password">Пароль:</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Пароль"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.password && touched.password ? 'input_error' : null
//                   }
//                 />
//                 {errors.password && touched.password && (
//                   <span className="error">{errors.password}</span>
//                 )}
//               </div>
//             </form>
//             <div className={s.btn_form}>
//               <button
//                 type="submit"
//                 className={!(dirty && isValid) ? 'disabled_btn' : 'btn_login'}
//                 disabled={!(dirty && isValid)}
//               >
//                 ВОЙТИ
//               </button>
//               <button type="button" className={s.btn_reg}>
//                 РЕГИСТРАЦИЯ
//               </button>
//             </div>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// };

// export default Form;
