import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../reduxV2/auth/auth-selector';
import { useRef, useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import UserInfo from '../UserInfo';
import UserLogout from '../UserLogout';
import { gsap, Power2 } from 'gsap';
import s from './Header.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Header = () => {
  const viewPort = useWindowDimensions();
  const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);

  let logotype = useRef(null);

    useEffect(() => {
      gsap.fromTo(
          logotype,
          0.5,
          {
            y: -100,
          },
          {
            y: 13,
            ease: Power2.easeInOut,
          },
        );
  }, []);


  return (
    <header className={s.header}>
      <div ref={el => (logotype = el)}>
        <div className={s.headerContainer}>
          <Link to="/" alt="homepage" className={s.logoLink}>
            <img src={logo} className={s.logoImg} alt="Kapusta-logo" />
          </Link>

          {isAuthenticated && (
            <div className={s.userContainer}>
              <UserInfo />
              <UserLogout />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
