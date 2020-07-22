import React from 'react';
import Styles from './index.module.css';
import displayDate from './date';
import backToCategory from './backArrow';

function Header() {
  return (
    <header className={Styles.Header}>
      <div className={Styles.backButton}>
      <i class="material-icons">arrow_back_ios</i>
      <p>Categories</p>
      </div>
      <p className="date">{displayDate()}</p>
    </header>
  );
}

export default Header;
