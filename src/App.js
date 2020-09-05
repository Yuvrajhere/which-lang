import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {stateReducer} from "./reducers/stateReducer";

import './App.css';

import Home from "./components/Home";
import Start from "./components/Start";
import About from "./components/About";

function App() {

  const store = createStore(stateReducer, applyMiddleware(thunk));

  return (
    <Provider store= {store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/whichlang/">
              <Home />
            </Route>
            <Route path="/whichlang/start">
              <Start />
            </Route>
            <Route path="/whichlang/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
