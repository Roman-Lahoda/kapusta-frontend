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
//     <Formik initialValues={initialValues} validate={validate} onSubmit={submitForm}>
//       {formik => {
//         const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } =
//           formik;
//         return (
//           <div className={s.container}>
//             <form onSubmit={handleSubmit} className={s.container_form}>
//               <h1 className={s.title_gb}>
//                 Вы можете авторизоваться с помощью <br /> Google Account:
//               </h1>
//               <a
//                 href=" https://capusta2.herokuapp.com/api/transactions/:id  "
//                 className={s.g_link}
//                 title="Google Account"
//               >
//                 <div className={s.g_btn}>
//                   {/* <svg className={s.g_svg} width="17" height="18">
//                     <use href={`${gs}#google`}></use>
//                   </svg> */}
//                   <img src={images} alt="" className="g_svg" />
//                   Google
//                 </div>
//               </a>
//             </form>
//             <form onSubmit={handleSubmit} className={s.container_form}>
//               <h1 className={s.title_registe}>
//                 Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
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
//                   className={errors.email && touched.email ? 'input_error' : null}
//                 />
//                 {errors.email && touched.email && <span className="error">{errors.email}</span>}
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
//                   className={errors.password && touched.password ? 'input_error' : null}
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
