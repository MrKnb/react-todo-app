import React from 'react';
import { useLocation } from 'react-router-dom';

import Styles from './index.module.css';
import displayDate from './date';
import BackToPrevious from './BackToPrevious';

function Header(props) {
  const { pathname } = useLocation();

  return (
    <header className={Styles.Header} style={{ backgroundColor: props.theme }}>
      {pathname === '/' || <BackToPrevious />}
      <p className={Styles.date}>{displayDate()}</p>
    </header>
  );
}

export default Header;
