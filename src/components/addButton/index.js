import React from 'react';

import Styles from './index.module.css';

function AddButton() {
  return (
    <button className={Styles.addButton}>
      <i class="material-icons">add_circle</i>
      <p>new category</p>
    </button>
  );
}

export default AddButton;
