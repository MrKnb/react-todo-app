import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './index.module.css';

function Category(props) {
  return (
    <li className={Styles.singleCategory}>
      <div>
        <Link className={Styles.Link} to={`/category/${props.id}`}>
          {props.title}
        </Link>
      </div>
      <div className={Styles.icons}>
        <i className="material-icons">create</i>
        <i className="material-icons">delete</i>
      </div>
    </li>
  );
}

export default Category;
