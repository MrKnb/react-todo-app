import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import Todo from '../todo';
import AddNew from '../addButton';
import Styles from './index.module.css';
import Form from '../form';

function CategoryTasks({ match }) {
  const loadedCategories = JSON.parse(localStorage.getItem('Categories'));
  const [categories, setCategories] = useState(loadedCategories);
  const [showForm, setShowForm] = useState(false);

  const matchedCategory = categories.filter(
    (category) => category.id === match.params.id
  )[0];

  const deleteTodo = (id) => {
    const updatedTodos = matchedCategory.todos.filter((todo) => todo.id !== id);
    matchedCategory.todos = [...updatedTodos];
    setCategories([...categories]);
    localStorage.setItem('Categories', JSON.stringify(categories));
  };

  const addTodo = (title) => {
    const newTodo = { id: uuid(), title: title, isDone: false };
    matchedCategory.todos = [...matchedCategory.todos, newTodo];
    localStorage.setItem('Categories', JSON.stringify(categories));
  };

  const displayForm = () => setShowForm(true);
  const hideForm = () => setShowForm(false);

  return (
    <div className="category-tasks-container">
      <h1 className={Styles.categoryName}>{matchedCategory.title}</h1>

      {matchedCategory.todos.length ? (
        <ul>
          {matchedCategory.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                delete={deleteTodo}
              />
            );
          })}
        </ul>
      ) : (
        <p>no todos</p>
      )}
      <div className={Styles.addButton}>
        {showForm === false || <Form addItem={addTodo} hideForm={hideForm} />}
        <AddNew text="new todo" showForm={displayForm} />
      </div>
    </div>
  );
}

export default CategoryTasks;
