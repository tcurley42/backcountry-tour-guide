import React from 'react'

const Routes = (props) => {


  return(
    <div>
      <ul>
        {props.routes && props.routes.map(route =>
        <li key={route.id}>{route.route_id}</li>)}
      </ul>
    </div>
  )
}

export default Routes
