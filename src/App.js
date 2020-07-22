import React from 'react';

import AddButton from './components/addButton';
import './App.css';
import 'reset-css';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddButton />
      </div>
    </div>
  );
}

export default App;
