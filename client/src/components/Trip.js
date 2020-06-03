import React from 'react';
import {Redirect} from 'react-router-dom';
import RoutesContainer from '../containers/RoutesContainer';

const  displayTrip = (trip) => {
  if (trip) {
    return (<div><h1>{trip.name}</h1><h3>{trip.description}</h3></div>);
  } else {
    return "Loading...";
  }
}


const Trip = (props) => {

  let trip = props.trips.find(e => e.id === parseInt(props.match.params.id))

  console.log(trip)
  return(
    <div>
    {displayTrip(trip)}

      <RoutesContainer trip={trip}/>
    </div>
  )
}

export default Trip
