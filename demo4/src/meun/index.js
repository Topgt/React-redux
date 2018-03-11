import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

const Meun = (props) => {
  return (<div>
      <ul>
        <li><Link to='/home'>home</Link></li>
        <li><Link to='/home/about'>about</Link></li>
      </ul>
      <div>
          { JSON.stringify(props.route.routes) }
          { renderRoutes(props.route.routes) /*JSON.stringify(props.route.routes)*/ }
      </div>
    </div>)
}

export default Meun
