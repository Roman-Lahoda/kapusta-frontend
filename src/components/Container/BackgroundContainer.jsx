import React from 'react';
import s from './BackgroundContainer.module.scss';

const BackgroundContainer = ({ children }) => {
  return (
    <div className={s.backgroundContainerImage}>
      <div className={s.backgroundContainer}></div>
      {children}
    </div>
  );
};

export default BackgroundContainer;
