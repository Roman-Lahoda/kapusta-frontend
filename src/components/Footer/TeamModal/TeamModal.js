import React from 'react';
import { createPortal } from 'react-dom';
import s from './TeamModal.module.scss';
import logo from '../../../images/logo.svg';
import gitHub from '../../../images/teamModal/git.png';

import linkedIn from '../../../images/teamModal/lin.png';

const modalRootRef = document.querySelector('#root');

function TeamModal({ handleBackdropClick, closeModal, members }) {
  return createPortal(
    <>
      {
        <div className={s.backdrop} onClick={handleBackdropClick}>
          <div className={s.modal_content}>
            <button className={s.modalCloseBtn} onClick={closeModal} type="button">
              <svg className={s.modalCloseIcon} width="12" height="12" />
            </button>
            <div className={s.main}>
              <div className={s.logo}>
                <img src={logo} alt="logo" />
              </div>
              <div className={`${s.teamLead} ${s.member}`}>
                <img
                  className={s.photo}
                  src={window.location.origin + '/team/photo1.jpg'}
                  alt="Roman Lahoda"
                />
                <div className={s.leadInfo}>
                  <span className={s.name}>Roman Lahoda</span>
                  <span className={s.position}>Team Lead</span>
                  <div className={s.social}>
                    <a
                      href="https://github.com/Roman-Lahoda/"
                      className={s.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={gitHub} alt="GitHub" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lari-dev/"
                      className={s.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedIn} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ul className={s.membersList}>
              {members.map(({ id, name, photo, social, position }) => (
                <li key={id} className={s.member}>
                  <img
                    className={s.photo}
                    src={window.location.origin + `/team/${photo}`}
                    alt={name}
                  />
                  <span className={s.name}>{name}</span>
                  <div className={s.social}>
                    <a href={social.github} className={s.link} target="_blank" rel="noreferrer">
                      <img src={gitHub} alt="GitHub" />
                    </a>
                    <a href={social.linkedin} className={s.link} target="_blank" rel="noreferrer">
                      <img src={linkedIn} alt="LinkedIn" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </>,
    modalRootRef,
  );
}

export default TeamModal;
