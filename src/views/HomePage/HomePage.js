// import Dashboard from '../../components/Dashboard';
// import { authOperations } from '../../redux/auth';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// function HomePage({ active, changeActiveState, stateDashboardButton, changeStateDashboardButton }) {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <>
//       <Dashboard
//         active={active}
//         changeActiveState={changeActiveState}
//         stateDashboardButton={stateDashboardButton}
//         changeStateDashboardButton={changeStateDashboardButton}
//       />
//     </>
//   );
// }

// export default HomePage;

// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import queryString from 'query-string';

// // import s from './HomePage.module.scss';

// // import imgText from 'images/Union.svg';
// // import RegisterForm from 'components/RegisterForm';
// // import LoginForm from 'components/LogInForm';
// // import { loginGoogleSuccess, refreshLoginGoogleSuccess } from 'redux/auth';
// // import { getLoader } from 'redux/transactions';
// // import Loader from 'components/Loader/Loader';

// // const HomePage = ({ location }) => {
// //   const { refreshToken, token } = queryString.parse(location.search);
// //   const dispatch = useDispatch();
// //   const loader = useSelector(getLoader);

// //   useEffect(() => {
// //     if (token) {
// //       dispatch(loginGoogleSuccess(token));
// //       dispatch(refreshLoginGoogleSuccess(refreshToken));
// //     }
// //   }, [dispatch, refreshToken, token]);

// //   const [login, setLogin] = useState(true);
// //   const onRegisterClick = () => {
// //     setLogin(false);
// //   };

// //   const onComeBackClick = () => {
// //     setLogin(true);
// //   };
// //   return (
// //     <>
// //       {loader ? (
// //         <Loader />
// //       ) : (
// //         <div className={s.container}>
// //           <div className={s.firstSection}>
// //             <div className={s.bcgImage}></div>
// //             <div className={s.text}>
// //               <img className={s.imgText} src={imgText} alt="Kapusta" />
// //               <h1 className={s.fontText}>SMART FINANSE</h1>
// //             </div>
// //           </div>
// //           <div className={s.secondSection}>
// //             {login ? (
// //               <LoginForm onClickRegister={onRegisterClick} />
// //             ) : (
// //               <RegisterForm onClickComeBack={onComeBackClick} />
// //             )}
// //             <div className={s.bcgImageBottom}></div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default HomePage;
