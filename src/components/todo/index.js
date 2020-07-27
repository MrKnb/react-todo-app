import React, { useState } from 'react';

import Styles from './index.module.css';
import EditForm from "../editForm";

function Todo(props) {
  const [showEditForm, setShowEditForm] = useState(false);

  const ref = React.createRef();

  const toggleForm = () => {
    setShowEditForm(!showEditForm);
  };
  const [isDone, setIsDone] = useState(props.status);
  return (
    <>
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
        <i className="material-icons" onClick={() => toggleForm()}>create</i>
        <i className="material-icons" onClick={() => props.delete(props.id)}>
          delete
        </i>
      </div>
    </li>
    {showEditForm ? (
        <EditForm
          value={props.title}
          id={props.id}
          editItem={props.edit}
          hideForm={setShowEditForm}
          ref={ref}
        />
      ) : null}
    </>
  );
}

export default Todo;