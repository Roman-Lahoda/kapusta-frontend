import Kapusta from '../../images/transactionIcons/spiner-kapusta.svg';
import s from './Loader.module.scss';

function Loader() {
  return (
    <div className={s.loaderWrapper}>
      <img className={s.loader} src={Kapusta} alt="Kapusta" />
    </div>
  );
}

export default Loader;
