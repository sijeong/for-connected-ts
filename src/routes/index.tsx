import React from 'react';
import { Switch, Route } from 'react-router';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import NoMatch from '../components/NoMatch';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
