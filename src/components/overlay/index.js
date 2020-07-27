import React from 'react';

import Styles from './index.module.css';

function Overlay(props) {
  return (
    <div className={Styles.overlay} onClick={props.hide}>
      <button onClick={props.onSubmission} className={Styles.doneButton}>
        done
      </button>
    </div>
  );
}

export default Overlay;
