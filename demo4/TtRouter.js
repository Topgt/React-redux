import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return <h1> hellow </h1>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
