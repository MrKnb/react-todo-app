import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Categories from './components/categories';
import Category from './components/category';
import './App.css';
import 'reset-css';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/category/:id" component={Category} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
