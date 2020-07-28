import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import Todo from '../todo';
import AddNew from '../addButton';
import Styles from './index.module.css';
import Form from '../form';

function CategoryTasks({ match, setHeaderColor }) {
  const loadedCategories = JSON.parse(localStorage.getItem('Categories'));
  const [categories, setCategories] = useState(loadedCategories);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setHeaderColor(matchedCategory.theme);
  }, []);

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

  const editTodo = (id, newValue) => {
    const matchingTodo = matchedCategory.todos.filter(
      (todo) => todo.id === id
    )[0];
    matchingTodo.title = newValue;
    setCategories([...categories]);
    localStorage.setItem('Categories', JSON.stringify(categories));
  };

  const toggleDone = (id) => {
    const matchedTodo = matchedCategory.todos.filter(
      (todo) => todo.id === id
    )[0];
    matchedTodo.isDone = !matchedTodo.isDone;
    localStorage.setItem('Categories', JSON.stringify(categories));
  };

  const displayForm = () => setShowForm(true);
  const hideForm = () => setShowForm(false);

  return (
    <div className="category-tasks-container">
      <h1
        className={Styles.categoryName}
        style={{ color: matchedCategory.theme }}
      >
        {matchedCategory.title}
      </h1>

      {matchedCategory.todos.length ? (
        <ul className={Styles.list}>
          {matchedCategory.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                delete={deleteTodo}
                status={todo.isDone}
                toggleDone={toggleDone}
                edit={editTodo}
                themeColor={matchedCategory.theme}
              />
            );
          })}
        </ul>
      ) : (
        <p>no todos</p>
      )}
      <div className={Styles.addButton}>
        {showForm === false || (
          <Form
            addItem={addTodo}
            themeColor={matchedCategory.theme}
            hideForm={hideForm}
          />
        )}
        <AddNew
          color={matchedCategory.theme}
          text="new todo"
          showForm={displayForm}
        />
      </div>
    </div>
  );
}

export default CategoryTasks;
