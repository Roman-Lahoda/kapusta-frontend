import Kapusta from '../../images/transactionIcons/spiner-kapusta.svg';
import s from './Loader.module.scss';

function Loader({ visibility }) {
  return (
    <div className={visibility ? s.loaderWrapper : s.hidden}>
      <img className={s.loader} src={Kapusta} alt="Kapusta" />
    </div>
  );
}

export default Loader;
