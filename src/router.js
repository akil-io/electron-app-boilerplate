import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './assets/css/global.scss';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

const Home = () => {
  return (
    <h1>Hello from router!</h1>
  );
};

export default Router;