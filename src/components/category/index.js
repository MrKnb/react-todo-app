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
      { id: 1, title: 'buy beer', isDone: false },
      { id: 2, title: 'buy pizza', isDone: false },
    ],
  },
  {
    id: 23,
    title: 'category2',
    todos: [
      { id: 3, title: 'buy beer', isDone: false },
      { id: 4, title: 'buy pizza', isDone: false },
    ],
  },
  {
    id: 53,
    title: 'category3',
    todos: [
      { id: 5, title: 'buy beer', isDone: false },
      { id: 6, title: 'buy pizza', isDone: false },
    ],
  },
];

function Category({ match }) {
  const [categories, setCategories] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const matchedCategory = categories.filter(
    (category) => category.id == match.params.id
  )[0];

  const deleteTodo = (todoID) => {
    const newItems = matchedCategory.todos.filter(({ id }) => id !== todoID);
    matchedCategory.todos = newItems;
    // setCategories({ ...categories, matchedCategory });
    console.log(matchedCategory.todos);
  };

  const displayForm = () => setShowForm(true);
  return (
    <div className="category-container">
      <h1 className={Styles.categoryName}>{matchedCategory.title}</h1>
      <ul>
        {matchedCategory.todos.map((todo, index) => {
          console.log(index);
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              delete={deleteTodo}
              title={todo.title}
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

export default Category;
