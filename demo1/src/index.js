import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TtRedux from './TtRedux';
import registerServiceWorker from './registerServiceWorker';

const reducer = (state=0, action) => {
  if ('add' === action.type)
    return state += 1;
}

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <div>
      <TtRedux number={store.getState()} />
      <button onClick={()=>store.dispatch({type: 'add'})} >加一</button>
    </div>,
    document.getElementById('root'));
}
store.subscribe(render);
store.dispatch({
  type: 'add'
})
registerServiceWorker();
