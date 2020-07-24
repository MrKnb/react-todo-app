import React, {useState} from 'react';
import Styles from './index.module.css';

function AddItemForm() {
  return <input className={Styles.addItemForm} type="text" placeholder="new item" />
}
/*I need to create an onclick trigger for the AddButton to show the add form.
Thoughts: work with "clicked state", initial state = false. Then, if clicked = true show
the form? Idk how to include this, I was going to do the <button onClick={handleClick}></button>
and somehow include the show in the handleClick function. But I really don't know how to do it.
*/


export default AddItemForm;