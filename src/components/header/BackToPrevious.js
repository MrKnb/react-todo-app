import React from 'react';

import Styles from './index.module.css';

function BackToPrevious() {
  return (
    <div className={Styles.backButton}>
      <i class="material-icons">arrow_back_ios</i>
      <p>Categories</p>
    </div>
  );
}

export default BackToPrevious;
