import React from 'react';

import Styles from './index.module.css';
import displayDate from './date';
import BackToPrevious from './BackToPrevious';

function Header(props) {
  return (
    <header className={Styles.Header}>
      {props.path === '/' ? null : <BackToPrevious />}
      <p className={Styles.date}>{displayDate()}</p>
    </header>
  );
}

export default Header;
