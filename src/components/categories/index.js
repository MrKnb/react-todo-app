import React, { useState, useEffect } from 'react';

import Category from '../category';
import AddNew from '../addButton';
import Styles from './index.module.css';
import Form from '../form';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setCategories(JSON.parse(window.localStorage.getItem('Categories')));
  }, []);

  const displayForm = () => setShowForm(true);

  return (
    <div className="categories">
      <h1 className={Styles.categoryHeading}>Categories</h1>
      {categories ? (
        categories.map((category) => (
          <Category key={category.id} id={category.id} title={category.title} />
        ))
      ) : (
        <p>no categories</p>
      )}

      <div className={Styles.addButton}>
        {showForm ? <Form /> : null}
        <AddNew text="new category" showForm={displayForm} />
      </div>
    </div>
  );
}

export default Categories;
