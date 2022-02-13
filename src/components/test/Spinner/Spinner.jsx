import Loader from 'react-loader-spinner';
import s from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={s.container}>
      <Loader
        type="ThreeDots"
        color="var(--accent-color-primary)"
        height={120}
        width={120}
        // timeout={3000}
      />
    </div>
  );
}

export default Spinner;
