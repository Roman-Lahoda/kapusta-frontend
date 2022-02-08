import React from 'react';
import UserMenu from './userMenu';
import logo from '../../images/logo.png';
import { useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from "../../redux/auth/selectors.js";
import s from './Header.module.scss';
function Header() {
    const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.box}>
          <Link to={isLoggedIn ? '/home' : '/'}>
          <img src={logo} alt="" width={90} height={30} />
          </Link>
        </div>
        {isLoggedIn && <UserMenu />}
      </div>
    </header>
  );
}

export default Header;
