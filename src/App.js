// import { /*lazy,*/ Suspense, useEffect } from 'react';
// import { Switch, Redirect } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import queryString from 'query-string';
// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';
// import MainContainer from './components/MainContainer/MainContainer';
// import Container from './components/Container/Container';
// import NavBar from './components/NavBar/NavBar';
// import Toast from './components/Toast/Toast.jsx';
// import RegisterPage from './views/RegisterPage/RegisterPage';
// import LoginPage from './views/LoginPage/LoginPage';
// import ReportPage from './views/ReportPage/ReportPage';
// import HomePage from './views/HomePage/HomePage';
// import { getIsFetchCurrentUser, getGoogleAuthToken, getUserIsLoggedIn } from './redux/auth';
// import { getCurrentUser } from './redux/auth';
// import { getUserBalance } from './redux/balance';

// import './App.css';

// import FormDescription from './components/FormDescription/FormDescription';
// import Spinner from './components/Spinner/Spinner';
// // const SignUpPage = lazy(() => import('' /* webpackChunkName: "signup" */));
// // const LoginPage = lazy(() => import('' /* webpackChunkName: "login" */));
// // const HomePage = lazy(() => import('' /* webpackChunkName: "homepage" */));
// // const ReportPage = lazy(() => import('' /* webpackChunkName: "report" */));

// export default function App() {
//   const dispatch = useDispatch();
//   const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);
//   const isLoggedIn = useSelector(getUserIsLoggedIn);

//   const token = queryString.parse(window.location.search).token;

//   useEffect(() => {
//     token && dispatch(getGoogleAuthToken(token));
//     dispatch(getCurrentUser());
//     token && dispatch(getUserBalance());
//   }, [dispatch, token]);

//   useEffect(() => {
//     isLoggedIn && dispatch(getUserBalance());
//   }, [dispatch, isLoggedIn]);

//   return (
//     !isFetchCurrentUser && (
//       <>
//         <NavBar />
//         <Suspense fallback={<Spinner />}>
//           <MainContainer>
//             <Container>
//               <Switch>
//                 <PublicRoute path="/" exact>
//                   <Redirect to="/login" />
//                 </PublicRoute>

//                 <PublicRoute path="/signup" restricted>
//                   <RegisterPage />
//                 </PublicRoute>

//                 <PublicRoute path="/test" exact restricted>
//                   <FormDescription />
//                 </PublicRoute>

//                 <PublicRoute path="/login" redirectTo="/home" restricted>
//                   <LoginPage />
//                 </PublicRoute>

//                 <PrivateRoute path="/home">
//                   <HomePage />
//                 </PrivateRoute>

//                 <PrivateRoute path="/report">
//                   <ReportPage />
//                 </PrivateRoute>

//                 <Redirect to="/" />
//               </Switch>
//             </Container>
//           </MainContainer>
//         </Suspense>
//         <Toast />
//       </>
//     )
//   );
// }

// import React from 'react';
// import './App.css';
// import InputPanel from './components/LAST/InputPanel/InputPanel';
// import Summary from './components/LAST/Summary/Summary';
// import Table from './components/LAST/Table/Table';
// import Form from './components/Form1/Form';
// // import StandartBtn from './components/LAST/Buttons/StandartBtn/StandartBtn';
// // import { CommunButton } from './components/LAST/Buttons/CommunButton';
// import CalendarBar from './components/LAST/CalendarBar/CalendarBar';
// import ContainerTabs from './components/LAST/ContainerTabs/ContainerTabs';
// function App() {
//   return (
//     <div className="App">
//       <InputPanel />
//       <ContainerTabs />
//       <Table />
//       <Summary />
//       {/* <Form /> */}
//     </div>
//   );
// }
// export default App;

// --------------

import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
// import { getIsFetchingCurrentUser } from './redux/auth/selectors';
// import { fetchCurrentUser } from './redux/auth/thunks';
// import AppBar from './components/AppBar/AppBar';
// import AuthForm from './components/AuthForm/AuthForm';
// import ReportPage from './pages/ReportPage/ReportPage';
// import CountingTable from './components/CountingTable/CountingTable';
// import { GoogleAuthPage } from './pages/GoogleAuthPage';
// import Container from './components/Container/Container';
// import MainPage from './pages/MainPage/MainPage';
// import Balance from './components/Balance/Balance';
// import { getToken } from './redux/auth/selectors';
import ContainerTabs from './components/LAST/ContainerTabs/ContainerTabs';
import InputPanel from './components/LAST/InputPanel/InputPanel';
import Summary from './components/LAST/Summary/Summary';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const token = useSelector(getToken);

  useEffect(() => {
    if (token) dispatch(fetchCurrentUser());
  });

  return (
    <>
      <ContainerTabs />
      <InputPanel />
      <Summary />
    </>
  );
}

export default App;
