
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { getUserName, getAvatar } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
// import LogoutModal from "./LogoutModal";
import { useState } from "react";
import s from './Header.module.scss';

export default function UserMenu() {
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);
    const avatarURL = useSelector(getAvatar);
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
      };
    
      const isLogOut = () => {
        dispatch(logOut());
      };
  return (
    <div className={s.user__menu}>
      <NavLink to="/user" className={s.link}>
        <p className={s.user__avatar}>
          <span className={s.symbol}> 
          <img src={avatarURL} alt="аватар пользователя" />
           </span>
        </p>
        <MediaQuery minWidth={768}>
          <p className={s.user__name} >{userName}</p>
        </MediaQuery>
      </NavLink>
      <button type="button" className={s.logout}  onClick={toggleModal}>
        <MediaQuery maxWidth={767}>
          <img src= {logout} alt="" width={16} height={16} />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <p className={s.logout__text}>Выйти</p>
        </MediaQuery>
        {isModalOpen && (
          <LogoutModal
            text= {"modal.text1"}
            onCancel={toggleModal}
            onSubmit={isLogOut}
          />
        )}
      </button>
    </div>
  );
}
