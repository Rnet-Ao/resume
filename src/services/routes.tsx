import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Resume, SelectText } from '../components/index';

export function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route exact path="/select-text" component={SelectText} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
