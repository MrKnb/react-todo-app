import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddNew from '../addButton';
import Styles from './index.module.css';

const data = [
  {
    id: 12,
    title: 'category1',
    todos: [],
  },
  {
    id: 23,
    title: 'category2',
    todos: [],
  },
  {
    id: 53,
    title: 'category3',
    todos: [],
  },
];

function Categories() {
  const [categories, setCategories] = useState(data);

  return (
    <div className="categories">
      <h1 className={Styles.categoryHeading}>Categories</h1>
      {categories.map((category) => (
        <h1 key={category.id}>
          <Link to={`/category/${category.id}`}>{category.title}</Link>
        </h1>
      ))}
      <div className={Styles.addButton}>
        <AddNew text="new category" />
      </div>
    </div>
  );
}

export default Categories;
