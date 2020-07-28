import React, { useState, useEffect, useRef } from 'react';

import Styles from './index.module.css';

function EditForm(props) {
  const [value, setValue] = useState(props.value);

  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  const onSubmission = (event) => {
    event.preventDefault();
    props.editItem(props.id, value);
    props.hideForm();
  };

  return (
    <form
      className={Styles.editItemForm}
      style={{ border: `2.5px solid ${props.color}` }}
      onSubmit={onSubmission}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={input}
      />
    </form>
  );
}

export default EditForm;
