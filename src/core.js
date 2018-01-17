import electron from 'electron';
import {createHashHistory} from 'history';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';

let actions = {};
let reducers = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    actions,
  })
  : compose;

reducers = combineReducers(reducers);
const history = createHashHistory({
  // Here we override prompt to use the native electron dialog module, this lets us override the message box title
  getUserConfirmation: (message, callback) => {
    electron.remote.dialog.showMessageBox(
      {
        title: 'Confirm Navigation',
        type: 'question',
        buttons: ['Yes', 'No'],
        message
      },
      (clickedIdx) => {
        if (clickedIdx === 0) {
          callback(true);
        } else {
          callback(false);
        }
      }
    )
  }

  //callback(window.confirm(message))
});

let middlewares = [
  routerMiddleware(history),
  thunk
];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(require('redux-logger')({
    // Change this configuration to your liking
    duration: true, collapsed: true
  }));
}

const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));
const enhancer = composeEnhancers(...enhancers);

// Generate store
const store = createStore(
  connectRouter(history)(reducers),
  {},
  enhancer
);

export {
  history,
  store
}