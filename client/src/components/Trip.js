import React from 'react';
import RoutesContainer from '../containers/RoutesContainer';
import BarLoader from 'react-spinners/BarLoader';

const  displayTrip = (trip) => {
  if (trip) {
    return (<div><h1>{trip.name}</h1><h3>{trip.description}</h3></div>);
  } else {
    return <BarLoader/>;

  }
}

const Trip = (props) => {

  let trip = props.trips.find(e => e.id === parseInt(props.match.params.id))

  console.log(trip)
  return(
    <div>
    {displayTrip(trip)}

      <RoutesContainer trip={trip} />
    </div>
  )
}

export default Trip
