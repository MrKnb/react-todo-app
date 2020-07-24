import React, { useState } from 'react';

import Category from '../category';
import AddNew from '../addButton';
import Styles from './index.module.css';
import Form from '../form';

const data = [
  {
    id: 30,
    title: 'category1',
    todos: [],
  },
  {
    id: 32,
    title: 'category2',
    todos: [],
  },
  {
    id: 34,
    title: 'category3',
    todos: [],
  },
];

function Categories() {
  const [categories, setCategories] = useState(data);
  const [showForm, setShowForm] = useState(false);

  const displayForm = () => setShowForm(true);

  return (
    <div className="categories">
      <h1 className={Styles.categoryHeading}>Categories</h1>
      {categories.map((category) => (
        <Category key={category.id} id={category.id} title={category.title} />
      ))}

      <div className={Styles.addButton}>
        {showForm ? <Form /> : null}
        <AddNew text="new category" showForm={displayForm} />
      </div>
    </div>
  );
}

export default Categories;
