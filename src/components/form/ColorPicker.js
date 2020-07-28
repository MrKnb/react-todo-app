import React from 'react';
import Styles from './index.module.css';

function ColorPicker({ setColor }) {
  return (
    <div className={Styles.colorpicker}>
      <div className={Styles.colors}>
        <div className={Styles.color} style={{ backgroundColor: '#e49273' }}>
          <input
            type="radio"
            name="colors"
            id="salmon"
            value="#e49273"
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.dot}></div>
        </div>
        <div className={Styles.color} style={{ backgroundColor: '#873D48' }}>
          <input
            type="radio"
            name="colors"
            id="solid-pink"
            value="#873D48"
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.dot}></div>
        </div>
        <div className={Styles.color} style={{ backgroundColor: '#48639C' }}>
          <input
            type="radio"
            name="colors"
            id="queen-blue"
            value="#48639C"
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.dot}></div>
        </div>
        <div className={Styles.color} style={{ backgroundColor: '#7EBDC3' }}>
          <input
            type="radio"
            name="colors"
            id="middle-blue"
            value="#7EBDC3"
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.dot}></div>
        </div>
        <div className={Styles.color} style={{ backgroundColor: '#12355B' }}>
          <input
            type="radio"
            name="colors"
            id="prussian-blue"
            value="#12355B"
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.dot}></div>
        </div>
        <div className={Styles.color} style={{ backgroundColor: '#484041' }}>
          <input
            type="radio"
            name="colors"
            id="black"
            value="#484041"
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.dot}></div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
