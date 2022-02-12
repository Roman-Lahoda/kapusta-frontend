import CommunButton from '../CommunButton';
import s from './confirmBtn.module.css';

export default function ConfirmBtn({ className, btnOff = false }) {
  //нужно добавить условие, если в инпуте ввода баланса - пусто, либо 0,
  //либо пришел ответ с червера о наличии баланса - тогда disabled={true}
  // в другом случае disabled={false}, или вообще убираем пропс(по дефолту и так false)
  return (
    <CommunButton type="submit" className={s.btn + ' ' + className} disabled={btnOff}>
      Подтвердить
    </CommunButton>
  );
}
