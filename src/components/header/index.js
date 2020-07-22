import React from 'react';
import Styles from './index.module.css';
import displayDate from './date';
import BackToPrevious from './BackToPrevious';

function Header() {
  return (
    <header className={Styles.Header}>
      <BackToPrevious />
      <p className="date">{displayDate()}</p>
    </header>
  );
}

export default Header;
