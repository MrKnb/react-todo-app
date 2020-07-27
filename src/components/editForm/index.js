import React, { useState, useEffect } from 'react';

import Styles from './index.module.css';

// function EditForm(props) {
//   const [value, setValue] = useState(props.value);

//   const onSubmission = (event) => {
//     event.preventDefault();
//     props.editItem(props.id, value);
//     props.hideForm();
//   };

//   return (
//     <form className={Styles.addItemForm} onSubmit={onSubmission}>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </form>
//   );
// }

const EditForm = React.forwardRef((props, ref) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onSubmission = (event) => {
    event.preventDefault();
    props.editItem(props.id, value);
    props.hideForm();
  };

  return (
    <form className={Styles.editItemForm} onSubmit={onSubmission}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
      />
    </form>
  );
});

export default EditForm;
