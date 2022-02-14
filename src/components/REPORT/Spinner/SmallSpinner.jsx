import Loader from 'react-loader-spinner';
import s from './SmallSpinner.module.scss';

function SmallSpinner() {
  return (
    <div className={s.containerList}>
      <Loader
        type="ThreeDots"
        color="var(--accent-color-primary)"
        height={60}
        width={60}
        // timeout={3000}
      />
    </div>
  );
}

export default SmallSpinner;
