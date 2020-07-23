import React from 'react';

import Styles from './index.module.css';

function AddButton(props) {
  return (
    <button className={Styles.addButton}>
      <i className="material-icons">add_circle</i>
      <p>{props.text}</p>
    </button>
  );
}

export default AddButton;
