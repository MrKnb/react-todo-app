import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Categories from './components/categories';
import CategoryTasks from './components/categoryTasks';
import './App.css';
import 'reset-css';

import Header from './components/header';

function App() {
  const history = useHistory();
  const [path, setPath] = useState('/');

  useEffect(() => {
    return history.listen((location) => {
      setPath(location.pathname);
    });
  }, [history]);
  return (
    <div className="App">
      <Header path={path} />
      <Route
        render={({ location }) => (
          <SwitchTransition mode="out-in">
            <CSSTransition key={location.key} timeout={200} classNames="route">
              <div className="container">
                <div className="component-container">
                  <Switch>
                    <Route path="/" exact component={Categories} />

                    <Route path="/category/:id" component={CategoryTasks} />
                  </Switch>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        )}
      />
    </div>
  );
}

export default App;
