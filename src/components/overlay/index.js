import React from 'react';

import Styles from './index.module.css';

function Overlay(props) {
  return (
    <>
      <div className={Styles.overlay} onClick={props.hide}></div>
      <button onClick={props.onSubmission} className={Styles.doneButton}>
        done
      </button>
    </>
  );
}

export default Overlay;
