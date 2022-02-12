import CommunButton from '../CommunButton';
import s from './standartBtn.module.css';

//передаем через пропсы текст кнопки
export default function StandartBtn({ children, className, onClick }) {
  return (
    <CommunButton type="button" className={s.btn + ' ' + className} onClick={onClick}>
      {children}
    </CommunButton>
  );
}
