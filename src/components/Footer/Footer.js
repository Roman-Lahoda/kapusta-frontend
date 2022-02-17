import { useEffect } from 'react';
import TeamModal from './TeamModal';
import useModal from './useModal';
import { Link } from 'react-router-dom';
import members from '../../db/team.json';
import s from './Footer.module.scss';
import sprite from '../../images/teamModal/sprite.svg';
import logo from '../../images/logo.svg';

function Footer() {
  const { isShowingModal, toggle, handleBackdropClick } = useModal();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={s.bgWrapper}>
      <div className={s.container}>
        <section className={s.footer}>
          <Link to="/">
            <img className={s.logo} src={logo} alt="logo" />
          </Link>
          <div className={s.team}>
            <span className={s.teamTitle}>Our Team</span>
            <svg className={s.arrow} width="24" height="24">
              <use href={`${sprite}#icon-arrow`} fill="black"></use>
            </svg>
            <svg className={s.kapusta} onClick={() => toggle()} width="40" height="40">
              <use href={`${sprite}#icon-kapusta`}></use>
            </svg>
          </div>
        </section>
        {/* <div className={s.copyright}>2022 Project group Team 8.</div> */}
      </div>
      {isShowingModal && (
        <TeamModal
          members={members}
          closeModal={toggle}
          handleBackdropClick={handleBackdropClick}
        />
      )}
    </div>
  );
}

export default Footer;
