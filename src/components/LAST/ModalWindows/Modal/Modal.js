import React from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({ children, onClose }) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return() => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    })
    
    const handleKeyDown = (e) => {
        if(e.code === 'Escape' || e.currentTarget === e.target) {
          onClose();
        }
    };

    const handleBackDropClick = (e) => {
        if(e.currentTarget === e.target) {
          onClose();
        }
    };

    return createPortal (
        <div 
            className={s.modalBackDrop} 
            onClick={handleBackDropClick}
        >
            <div className={s.modalContent}>
                {children}
            </div>
        </div>,
        modalRoot
    )
}

Modal.propTypes = {
    children: PropTypes.object,
    onClose: PropTypes.func,
};
  