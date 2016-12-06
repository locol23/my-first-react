import React from 'react';
import ReactDOM from 'react-dom';
import Top from './Top';
import ManageServer from './ManageServer';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Top} />
    <Route path="/manage/server" component={ManageServer} />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('app'));
