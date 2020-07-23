import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import Styles from './index.module.css';

function BackToPrevious() {
  return (
    <div className={Styles.backButton}>
      <i className="material-icons">arrow_back_ios</i>
      <p>Categories</p>
    </div>
  );
}

export default BackToPrevious;
