import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connedt } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { push, routerMiddleware, routerReducer, ConnectedRouter } from 'react-router-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory()
const middleware = routerMiddleware(history)
const initStore = {}
const reducer = (state={ number:0 }, action) => {}

const store = createStore(
  combineReducers(
    reducer,
    routerReducer
  ),
  initStore,
  applyMiddleware(
    middleware
  )
)

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
