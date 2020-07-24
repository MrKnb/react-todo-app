import React, { useState } from 'react';

import Styles from './index.module.css';

function Todo(props) {
  return (
    <li className={Styles.singleTodo}>
      <div className={Styles.circleLink} onClick={() => console.log('done')}>
        <div className={Styles.circle}></div>
        {/* <i className="material-icons">done</i> */}
        <span>{props.title}</span>
      </div>
      <div className={Styles.icons}>
        <i className="material-icons">create</i>
        <i className="material-icons" onClick={() => props.delete(props.id)}>
          delete
        </i>
      </div>
    </li>
  );
}

export default Todo;
