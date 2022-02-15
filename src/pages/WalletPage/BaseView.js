import React from 'react';

function BaseView({ children }) {
  return (
    <>
      <div className="background-bottom"></div>
      <div className="background-top background-top_for-mobile"></div>
      <div className="container">{children}</div>
    </>
  );
}

export default BaseView;
