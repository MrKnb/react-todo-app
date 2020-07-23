import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Router>
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/category/:id" component={Category} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
