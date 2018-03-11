import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import registerServiceWorker from './registerServiceWorker';
import asyncComponent from './AsyncComponent'

const Meun = asyncComponent( ()=>import('./meun') )
const App = asyncComponent( ()=>import('./App') )

const routeConfig = [{
  path: '/',
  exact: true,
  component: Meun,
},{
  path: '/home',
  component: Meun,
  routes: [{
    path: '/home/about',
    component: App,
  }]
}]

ReactDOM.render(
  <Router>
    <div>
      <div>
        { renderRoutes(routeConfig) }
      </div>
      <div>
        {  }
      </div>
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
