// import React from 'react';
// import Loader from 'react-loader-spinner';

// const Loader = () => {
//   return (
//     <Loader
//       style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//       }}
//       type="Circles"
//       // type="Watch"
//       color="#FFDAC0"
//       height={100}
//       width={100}
//     />
//   );
// };

// export default Loader;

import Kapusta from '../../images/spiner-kapusta.svg';
import s from './Loader.module.scss';

function Loader() {
  return (
    <div className={s.loaderWrapper}>
      <img className={s.loader} src={Kapusta} alt="Kapusta" />
    </div>
  );
}

export default Loader;
