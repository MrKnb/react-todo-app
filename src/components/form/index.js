import React, { useState } from 'react';
import Styles from './index.module.css';
import Overlay from '../overlay';
import { useLocation } from 'react-router-dom';
import ColorPicker from './ColorPicker';

function AddItemForm({ addItem, hideForm, themeColor }) {
  const [value, setValue] = useState('');
  const [color, setColor] = useState('#4c856d');

  const onSubmission = (event) => {
    event.preventDefault();
    if (value.trim() && color.trim()) {
      addItem(value, color);
      setValue('');
      hideForm();
    }
  };

  const { pathname } = useLocation();

  return (
    <>
      <form
        className={Styles.addItemForm}
        onSubmit={onSubmission}
        style={{ backgroundColor: themeColor }}
      >
        {pathname === '/' && <ColorPicker setColor={setColor} />}
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
