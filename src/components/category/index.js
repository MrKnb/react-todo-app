import React, { useState } from 'react';

import Todo from '../todo';
import AddNew from '../addButton';
import Styles from './index.module.css';

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

function Category({ match }) {
  const [categories, setCategories] = useState(data);
  const matchedCategory = categories.filter(
    (category) => category.id == match.params.id
  )[0];
  return (
    <div>
      <h1 className={Styles.categoryName}>{matchedCategory.title}</h1>
      <ul>
        {matchedCategory.todos.map((todo, index) => {
          console.log(index);
          return <Todo key={index} title={todo.title} />;
        })}
      </ul>
      <div className={Styles.addButton}>
        <AddNew text="new todo" />
      </div>
    </div>
  );
}

export default Category;
