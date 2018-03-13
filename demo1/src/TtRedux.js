import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

function TtRedux(prop) {
  return (<h1>{prop.number}</h1>)
}
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


export default TtRedux
