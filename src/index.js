import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Router from './router.js';
import { store, history } from "./core.js";

let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

render( (<Provider store={store}>
  <ConnectedRouter history={history}>
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  </ConnectedRouter>
</Provider>), document.getElementById('root') );
