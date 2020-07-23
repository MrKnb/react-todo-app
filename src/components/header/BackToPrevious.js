import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './index.module.css';

function BackToPrevious() {
  return (
    <Link to="/" className={Styles.Link}>
      <div className={Styles.backButton}>
        <i className="material-icons">arrow_back_ios</i>
        <p>Categories</p>
      </div>
    </Link>
  );
}

export default BackToPrevious;
