import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers';

import VideoSelectScreen from './screens/VideoSelectScreen';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Switch>

          <Route path="/" component={VideoSelectScreen} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
