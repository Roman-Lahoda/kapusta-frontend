import s from '../TransPageWrapper.module.scss';

const Background = ({ children }) => {
  return (
    <div className={s.bgCont}>
      <div className={s.topCont}></div>
      <div className={s.Bottom}></div>
      {/* {children} */}
    </div>

    // <div className={s.BottomImg}>
    //     <div className={s.Topbox}></div>
    // {children}
    // </div>
  );
};

export default Background;
