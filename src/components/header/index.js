import React from 'react';
import Styles from './index.module.css';
import displayDate from './date';

function Header() {
  return (
    <header className={Styles.Header}>
      <p className="date">{displayDate()}</p>
    </header>
  );
}

export default Header;
