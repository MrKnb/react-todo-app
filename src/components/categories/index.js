import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import Category from '../category';
import AddNew from '../addButton';
import Styles from './index.module.css';
import Form from '../form';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (localStorage.length) {
      setCategories(JSON.parse(localStorage.getItem('Categories')));
    }
  }, []);

  const addCategory = (title) => {
    const newCategory = {
      id: uuid(),
      title: title,
      todos: [],
    };
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem('Categories', JSON.stringify(updatedCategories));
  };

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
    localStorage.setItem('Categories', JSON.stringify(updatedCategories));
  };

  const hideForm = () => setShowForm(false);
  const displayForm = () => setShowForm(true);

  return (
    <div className="categories">
      <h1 className={Styles.categoryHeading}>Categories</h1>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            title={category.title}
            delete={deleteCategory}
          />
        ))
      ) : (
        <p>no categories</p>
      )}

      <div className={Styles.addButton}>
        {showForm ? <Form addItem={addCategory} hideForm={hideForm} /> : null}
        <AddNew text="new category" showForm={displayForm} />
      </div>
    </div>
  );
}

export default Categories;
