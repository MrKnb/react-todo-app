import React, { useState } from 'react';
import Styles from './index.module.css';
import Overlay from '../overlay';

function AddItemForm({ addItem, hideForm }) {
  const [value, setValue] = useState('');

  const onSubmission = (event) => {
    event.preventDefault();
    if (value.trim()) {
      addItem(value);
      setValue('');
      hideForm();
    }
  };

  return (
    <>
      <form className={Styles.addItemForm} onSubmit={onSubmission}>
        <input
          type="text"
          placeholder="new item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <Overlay hide={hideForm} onSubmission={onSubmission} />
    </>
  );
}

export default AddItemForm;
