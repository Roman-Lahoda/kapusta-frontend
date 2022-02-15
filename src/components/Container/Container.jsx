import s from './Container.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import Background from 'components/Background';
// import BackgroundHome from 'components/BackgroundHome';
// import {
//     getCurrentToken,
//     getCurrentUser,
//     getFetchingCurrentUser
// } from '../../redux/auth';
function Container({ children }) {
    return <div className={s.Container}>{children}</div>;
}

//багатослойний фон
// function Container({ children }) {
//     const dispatch = useDispatch();
//     // const isFetchCurrentUser = useSelector(getFetchingCurrentUser);
//     const isAuth = useSelector(getCurrentToken);
//     useEffect(() => {
//         dispatch(getCurrentUser());
//     }, [dispatch]);
//     return (
//         <>
//             {isAuth ? (
//                 <div className={s.BottomImg}>
//                     <div className={s.Container}>{children}</div>
//                 </div>
//             ) : (
//                 <div className={s.BottomImg}>
//                     <div className={s.Container}>{children}</div>
//                 </div>
//             )}
//         </>
//     );
// }

Container.propTypes = {
    children: PropTypes.node,
};
export default Container;
