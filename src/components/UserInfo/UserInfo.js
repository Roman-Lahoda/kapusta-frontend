import { useSelector } from 'react-redux';
import authSelectors from '../../reduxV2/auth/auth-selector';
import { useState } from 'react';
import s from './UserInfo.module.scss';

const UserInfo = () => {
  const UserName = useSelector(authSelectors.getUser);
  const defaultName = 'Посетитель';

  return (
    <div className={s.userInfo}>
      {/* {UserName.avatar ? (
            <img
              src={UserName.avatar}
              alt="Avatar"
              className={s.userAvatar}
              onClick={openModalProfile}
            />

          ) : (
            <p className={s.userAvatar}>
              {UserName.name ? UserName.name.slice(0, 1).toUpperCase() : defaultName.slice(0, 1).toUpperCase()}
            </p>
          )} */}

      <p className={s.userAvatar}>
        {UserName.email
          ? UserName.email.slice(0, 1).toUpperCase()
          : defaultName.slice(0, 1).toUpperCase()}
      </p>

      <p className={s.userFullName}>{UserName.email ? UserName.email : defaultName}</p>
    </div>
  );
};

export default UserInfo;
