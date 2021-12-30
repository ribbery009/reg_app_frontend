import React from 'react';
import './styles.scss';

const AuthWrapper = ({ children }) => {
  return (
    <div className="authWrapper">
      <div className="wrap">

        <div className="children">
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;