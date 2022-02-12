import s from "./blackModal.module.css";

// Animation
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
const zoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

export default function BlackModal() {
  return (
    <ZoomInDiv>
      <div className={s.field}>
        <p className={s.textLarge}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={s.textSmall}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </ZoomInDiv>
  );
}
