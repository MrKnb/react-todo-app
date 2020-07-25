import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Styles from './index.module.css';
import EditForm from '../editForm';

function Category(props) {
  const [showEditForm, setShowEditForm] = useState(false);

  const ref = React.createRef();

  const toggleForm = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <li className={Styles.singleCategory}>
        <div>
          <Link className={Styles.Link} to={`/category/${props.id}`}>
            {props.title}
          </Link>
        </div>
        <div className={Styles.icons}>
          <i className="material-icons" onClick={() => toggleForm()}>
            create
          </i>
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

export default Category;
