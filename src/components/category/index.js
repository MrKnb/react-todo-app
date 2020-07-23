import React, { useState } from 'react';

import AddNew from '../addButton';

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
      <p>{matchedCategory.title}</p>
      <ul>
        {matchedCategory.todos.map((todo, index) => {
          console.log(index);
          return <li key={matchedCategory.todos[index]}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Category;
