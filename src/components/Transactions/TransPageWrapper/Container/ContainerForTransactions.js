import s from '../TransPageWrapper.module.scss';

import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={s.Container}>{children}</div>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
