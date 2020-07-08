import React from 'react'
import RouteDisplay from './RouteDisplay';
const Routes = (props) => {


  return(
    <div>
      <ul>
        {props.routes && props.routes.map(route =>
          <RouteDisplay key={route.id} route={route} />)}
      </ul>
    </div>
  )
}

export default Routes
