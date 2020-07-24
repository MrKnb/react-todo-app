import React, { useState } from 'react';

import Todo from '../todo';
import AddNew from '../addButton';
import Styles from './index.module.css';
import Form from '../form';

const data = [
  {
    id: 12,
    title: 'category1',
    todos: [
      { title: 'buy beer', isDone: false },
      { title: 'buy pizza', isDone: false },
    ],
  },
  {
    id: 23,
    title: 'category2',
    todos: [
      { title: 'buy beer', isDone: false },
      { title: 'buy pizza', isDone: false },
    ],
  },
  {
    id: 53,
    title: 'category3',
    todos: [
      { title: 'buy beer', isDone: false },
      { title: 'buy pizza', isDone: false },
    ],
  },
];

function CategoryTasks({ match }) {
  const [categories, setCategories] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const matchedCategory = categories.filter(
    (category) => category.id == match.params.id
  )[0];

  const deleteTodo = (id) => {
    const updatedTodos = matchedCategory.todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
  };

  const displayForm = () => setShowForm(true);
  return (
    <div className="category-tasks-container">
      <h1 className={Styles.categoryName}>{matchedCategory.title}</h1>
      <ul>
        {matchedCategory.todos.map((todo, index) => {
          console.log(index);
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
      <div className={Styles.addButton}>
        {showForm ? <Form /> : null}
        <AddNew text="new todo" showForm={displayForm} />
      </div>
    </div>
  );
}

export default CategoryTasks;
