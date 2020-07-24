import React, { useState } from 'react';
import Styles from './index.module.css';

function AddItemForm({ addItem, hideForm }) {
  const [value, setValue] = useState('');

  const onSubmission = (event) => {
    event.preventDefault();
    addItem(value);
    setValue('');
    hideForm();
  };

  return (
    <form className={Styles.addItemForm} onSubmit={onSubmission}>
      <input
        type="text"
        placeholder="new item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default AddItemForm;
