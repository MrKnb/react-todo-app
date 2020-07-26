import React, { useState } from 'react';

import Styles from './index.module.css';

function Todo(props) {
  const [isDone, setIsDone] = useState(props.status);
  return (
    <li className={Styles.singleTodo}>
      <div
        className={Styles.circleLink}
        onClick={() => {
          props.toggleDone(props.id);
          setIsDone(!isDone);
        }}
      >
        <div className={Styles.circle}>
          {isDone && <i className="material-icons">done</i>}
        </div>

        <span
          style={
            isDone ? { textDecoration: 'line-through', opacity: 0.5 } : null
          }
        >
          {props.title}
        </span>
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
