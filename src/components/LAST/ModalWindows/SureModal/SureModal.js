import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
// import { authOperations } from '../../../redux/auth';
import { StandartBtn } from '../../Buttons/StandartBtn/StandartBtn';
import s from './sureModal.module.css';

// Animation
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
const zoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

export default function SureModal({ closeModal }) {
  const dispatch = useDispatch();

  return (
    <ZoomInDiv>
      <div className={s.field}>
        <button onClick={closeModal} className={s.sureCloseBtn} id="sureCloseBtn">
          {/* можно анимацию сделать для каждого элемента */}
          {/* <ZoomInDiv>
          <CloseIcon fontSize="small" />
        </ZoomInDiv> */}
          <CloseIcon fontSize="small" />
        </button>
        <div>
          <p className={s.text}>Вы действительно хотите выйти?</p>
          <StandartBtn
            className={s.btn}
            onClick={() => {
              // dispatch(authOperations.logOut())
              closeModal();
            }}
          >
            да
          </StandartBtn>
          <StandartBtn onClick={closeModal}>нет</StandartBtn>
        </div>
      </div>
    </ZoomInDiv>
  );
}

SureModal.propTypes = {
  closeModal: PropTypes.func,
};
