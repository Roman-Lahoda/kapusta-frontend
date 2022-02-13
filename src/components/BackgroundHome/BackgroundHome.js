import sprite from '../../images/kapusta-sprite.svg';

import s from './BackgroundHome.module.scss';
function BackgroundHome() {
  return (
    <div className={s.container}>
      <div className={s.bg}></div>

      <svg className={s.kapusta}>
        <use href={`${sprite}#icon-Kapusta`}></use>
      </svg>

      <svg className={s.twoKapusta}>
        <use href={`${sprite}#icon-Two-Kapusta`}></use>
      </svg>

      <svg className={s.groupKapusta}>
        <use href={`${sprite}#icon-Group-Kapusta`}></use>
      </svg>
    </div>
  );
}
export default BackgroundHome;
