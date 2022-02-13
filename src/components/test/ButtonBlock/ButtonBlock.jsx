import PropTypes from 'prop-types';

import s from './ButtonBlock.module.scss';

const ButtonBlock = ({
  firstButtonText,
  secondButtonText,
  firstButtonHandler,
  secondButtonHandler,
  firstButtonType,
  secondButtonType,
}) => {
  return (
    <div className={s.buttonBlock}>
      <button className={s.button} type={firstButtonType} onClick={firstButtonHandler}>
        {firstButtonText}
      </button>
      <button className={s.button} type={secondButtonType} onClick={secondButtonHandler}>
        {secondButtonText}
      </button>
    </div>
  );
};

ButtonBlock.propTypes = {
  firstButtonText: PropTypes.string.isRequired,
  secondButtonText: PropTypes.string.isRequired,
  firstButtonHandler: PropTypes.func,
  secondButtonHandler: PropTypes.func.isRequired,
  firstButtonType: PropTypes.string.isRequired,
  secondButtonType: PropTypes.string.isRequired,
};

export default ButtonBlock;
