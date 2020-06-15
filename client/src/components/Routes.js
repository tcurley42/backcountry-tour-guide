import React from 'react'
import RouteDisplay from './RouteDisplay';
const Routes = (props) => {


  return(
    <div>
      <ul>
        {props.routes && props.routes.map(route =>
          <RouteDisplay route={route} />)}
      </ul>
    </div>
  )
}

export default Routes
