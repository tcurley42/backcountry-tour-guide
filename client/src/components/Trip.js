import React from 'react';
import {Redirect} from 'react-router-dom';
import RoutesContainer from '../containers/RoutesContainer';

const Trip = (props) => {

  console.log(props)

  let trip = props.trips.find(e => e.id = props.match.params.id)

  console.log(trip)
  return(
    <div>
    {trip ? null : <Redirect to='/trips'/>}
    {trip ? <div><h1>{trip.name}</h1><h3>{trip.description}</h3></div> : null}

      // Add a Routes component that fetches info and displays all routes
      <RoutesContainer/>
    </div>
  )
}

export default Trip
